import React from "react";
import Tilt from "react-tilt";
import "./logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div
      className="ma5"
      style={{ display: "flex", justifyContent: "flex-end", margin: 50 }}>
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{
          paddinBottom: 5,
          paddingTop: 5,
          height: 90,
          width: 100,
        }}>
        <div className="Tilt-inner">
          <img alt="logo" style={{ height: 80, width: 90 }} src={brain}></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
