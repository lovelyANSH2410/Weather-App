import React from "react";
import "./Weather.css";
import Main from "../dashboard/Main";
import Details from "../dashboard/Details";
import { useSelector } from "react-redux";

const Weather = () => {
  const { loading } = useSelector((store) => store.weather);

  return (
    <div className="weather">
      {!loading ? (
        <>
          <Main />
          <Details />
        </>
      ) : (
        <p className="error-title">Loading...</p>
      )}
    </div>
  );
};

export default Weather;
