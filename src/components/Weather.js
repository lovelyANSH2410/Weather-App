import React from "react";
import "./Weather.css";
import Main from "../dashboard/Main";
import Details from "../dashboard/Details";

const Weather = () => {
  return (
    <div className="weather">
      <Main />
      <Details/>
    </div>
  );
};

export default Weather;
