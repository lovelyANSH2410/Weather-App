import React from "react";
import "./Main.css";
import { useSelector } from "react-redux";

const Main = () => {
  const {
    temperature,
    location,
    cloud_description,
    maxTemp,
    minTemp,
    icon_code,
  } = useSelector((store) => store.weather);

  return (
    <div className="main">
      <p className="city">{location}</p>
      <p className="temperature">
        <>{temperature}°</>{" "}
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${icon_code}@2x.png`}
          alt="img"
        />
      </p>
      <p className="cloud">
        {cloud_description} - {maxTemp}° / {minTemp}°
      </p>
    </div>
  );
};

export default Main;
