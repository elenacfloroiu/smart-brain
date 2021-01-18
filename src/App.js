import "./App.css";
import React from "react";

import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Rank from "./components/rank/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import FaceDetect from "./components/faceDetect/FaceDetect";
import { app } from "./shared/Api";

const PARTICLES = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    move: {
      enable: true,
      speed: 1,
    },
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = { value: "", imageURL: "", boxes: [] };
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    console.log(data.outputs[0].data.regions);
    const boxes = data.outputs[0].data.regions.map((box) => {
      const box_info = box.region_info.bounding_box;
      return {
        topRow: box_info.top_row * height,
        bottomRow: height - box_info.bottom_row * height,
        rightCol: width - box_info.right_col * width,
        leftCol: box_info.left_col * width,
      };
    });

    return boxes;
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ boxes: box });
  };

  changeInputHandler = (event) => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  resetInput = () => {
    this.setState({
      imageURL: "",
    });

    console.log("ddddd");
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
    this.setState({ imageURL: this.state.value });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.value, { language: "en" })
      .then((response) => {
        this.displayFaceBox(this.calculateFaceLocation(response));
        //this.displayFaceBox(this.calculateFaceLocation(response));
        console.log(response.outputs[0].data.regions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={PARTICLES} />
        <Logo />
        {/* <Rank /> */}
        <ImageLinkForm
          changeInputHandler={this.changeInputHandler}
          submitHandler={this.submitHandler}
        />
        <FaceDetect imageURL={this.state.imageURL} boxes={this.state.boxes} />
      </div>
    );
  }
}

export default App;
