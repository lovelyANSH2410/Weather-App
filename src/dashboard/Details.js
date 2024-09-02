import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div className="detail-list">
      <p className="detail">
        UV{" "}
        <img
          className="img"
          src="https://img.icons8.com/?size=160&id=9eToT1eAIEII&format=png"
          alt="uv"
        />
      </p>
      <p className="detail">
        Humidity{" "}
        <img
          className="img"
          src="https://cdn-icons-png.flaticon.com/512/9342/9342439.png"
          alt="hum"
        />
      </p>
      <p className="detail">
        Real Feel{" "}
        <img
          className="img"
          src="https://images.vexels.com/media/users/3/240746/isolated/preview/2fb6bd2cc5c9c8772c19c09cfd0b6deb-cold-temperature-icon.png"
          alt="hum"
        />
      </p>
      <p className="detail">
        East
        <img
          className="img"
          src="https://cdn-icons-png.flaticon.com/512/1476/1476732.png"
          alt="hum"
        />
      </p>
      <p className="detail">
        Sunrise
        <img
          className="img"
          src="https://cdn-icons-png.flaticon.com/512/1146/1146885.png"
          alt="hum"
        />
      </p>
      <p className="detail">
        Pressure
        <img
          className="img"
          src="https://cdn-icons-png.flaticon.com/512/1839/1839341.png"
          alt="hum"
        />
      </p>
    </div>
  );
};

export default Details;
