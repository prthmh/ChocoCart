import React from "react";
import loaderSvg from "../assests/loader.svg";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="center_loader">
      <div className="loader_wrapper">
        <img src={loaderSvg} alt="Loading..." />
      </div>
    </div>
  );
};

export default Loading;
