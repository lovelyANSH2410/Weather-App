import React, { useState } from "react";
import "./Main.css";
import { useSelector } from "react-redux";
import Modal from "../utils/Modal";
import ManageCities from "../utils/ManageCities";

const Main = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleTemp, setToggleTemp] = useState(true);
  const {
    temperature,
    location,
    cloud_description,
    maxTemp,
    minTemp,
    icon_code,
  } = useSelector((store) => store.weather);
  const temp_faren = Math.floor(temperature * 1.8 + 32);

  return (
    <div className="main">
      {toggleSearch && (
        <Modal onClose={() => setToggleSearch(false)}>
          <ManageCities onClose={() => setToggleSearch(false)} />
        </Modal>
      )}

      <div className="flex justify-between w-full">
        <div>
          <span className="city">{location}</span>
          <button
            className="convert-temp-btn"
            onClick={() => setToggleTemp(!toggleTemp)}
          >
            {toggleTemp ? <>°C</> : <>°F</>}
          </button>
        </div>
        <button
          onClick={() => setToggleSearch(!toggleSearch)}
          className="add-btn"
        >
          ╋
        </button>
      </div>
      {temperature ? (
        <>
          <p className="temperature">
            {toggleTemp ? `${temperature}°C` : `${temp_faren}°F`}{" "}
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${icon_code}@2x.png`}
              alt="img"
            />
          </p>
          <p className="cloud">
            {cloud_description} - {maxTemp}° / {minTemp}°
          </p>
        </>
      ) : (
        <p className="loading">Data not found</p>
      )}
    </div>
  );
};

export default Main;
