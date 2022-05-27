import React from "react";
import { Oval, BallTriangle, Rings } from "react-loader-spinner";
import "./Loader.css";

export default function Loader({ isVisible }) {
  if (isVisible) {
    return (
      <div className="loader-align">
        <BallTriangle color="#00BFFF" height={80} width={80} />
      </div>
    );
  } else return null;
}
