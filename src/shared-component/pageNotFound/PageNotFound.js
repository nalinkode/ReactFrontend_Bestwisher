import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center" id="main">
      <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">
        404
      </h1>
      <div className="inline-block align-middle">
        <h2 className="font-weight-normal lead">
          The page you requested was not found. <Link to={"/"}>Go to home</Link>
        </h2>
      </div>
    </div>
  );
}
