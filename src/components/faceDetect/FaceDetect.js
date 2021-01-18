import React from "react";
import "./FaceDetect.css";

const FaceDetect = ({ imageURL, boxes }) => {
  return (
    <div className="center ma">
      <div className="absolute">
        {imageURL !== "" && (
          <img
            id="inputImage"
            alt={"Face Recognized"}
            src={imageURL}
            width="500px"
          />
        )}
        {boxes.map((box, index) => (
          <div
            key={index}
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}></div>
        ))}
      </div>
    </div>
  );
};
export default FaceDetect;
