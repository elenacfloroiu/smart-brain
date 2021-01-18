import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ changeInputHandler, submitHandler }) => {
  return (
    <div>
      <h1 className="f3 f2-m f2-l fw2 black-60 mv3">
        This <i>Magic Brain</i> wiil detect faces in your picture.
      </h1>
      <h2 className="f5 f4-m f3-l fw2 black-70 mt0 lh-copy">Get it a try!!!</h2>
      <div className="center">
        <div className="form center pa4 br3 shadow-2">
          <input
            id="mainInput"
            className="f5 pa2 w-80 center"
            type="text"
            onChange={changeInputHandler}
            placeholder="Image URL..."
          />
          <button
            className="w-18 grow f5 link ph3 pv2 dib white"
            onClick={submitHandler}
            style={{ backgroundColor: "#4A4D5F", borderRadius: 5 }}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
