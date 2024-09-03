import React from "react";
import "./Details.css";
import { useSelector } from "react-redux";

const Details = () => {
  const { humidity, real_feel, pressure, sunrise, wind_speed } = useSelector(
    (store) => store.weather
  );

  return (
    <div className="detail-list">

      <p className="detail">
        UV{" "}
        <img
          className="image"
          src="https://img.icons8.com/?size=160&id=9eToT1eAIEII&format=png"
          alt="uv"
        />
      </p>
      <p className="detail">
        Humidity - {humidity}%
        <img
          className="image"
          src="https://cdn-icons-png.flaticon.com/512/9342/9342439.png"
          alt="hum"
        />
      </p>
      <p className="detail">
        Real Feel - {real_feel}°C
        <img
          className="image"
          src="https://images.vexels.com/media/users/3/240746/isolated/preview/2fb6bd2cc5c9c8772c19c09cfd0b6deb-cold-temperature-icon.png"
          alt="hum"
        />
      </p>
      <p className="detail">
        Wind - {wind_speed}Km/h
        <img
          className="image"
          src="https://cdn-icons-png.flaticon.com/512/1476/1476732.png"
          alt="hum"
        />
      </p>
      <p className="detail">
        Sunrise - {sunrise}
        <img
          className="image"
          src="https://cdn-icons-png.flaticon.com/512/1146/1146885.png"
          alt="hum"
        />
      </p>
      <p className="detail">
        Pressure - {pressure}
        <img
          className="image"
          src="https://cdn-icons-png.flaticon.com/512/1839/1839341.png"
          alt="hum"
        />
      </p>
    </div>
  );
};

export default Details;
