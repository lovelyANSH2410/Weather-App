import React, { useEffect, useRef, useState } from "react";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import { setWeatherData } from "./weatherSlice";
import { WEATHER_API_KEY } from "./constants";

const ManageCities = ({ onClose }) => {
  const [cityList, setCityList] = useState([]);
  const { loading } = useSelector((store) => store.weather);
  const city = useRef(null);
  const ApiKey = WEATHER_API_KEY;
  const dispatch = useDispatch();

  const search = async (cit) => {
    dispatch(setWeatherData({ loading: true }));
    const cityName = cit || city.current.value;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${ApiKey}`
      );
      const data = await response.json();
      dispatch(setWeatherData({ loading: false }));
      const sunriseDate = new Date(data.sys.sunrise * 1000);
      const sunriseTime = sunriseDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      dispatch(
        setWeatherData({
          temperature: Math.floor(data.main.temp),
          location: data.name,
          minTemp: Math.floor(data.main.temp_min),
          maxTemp: Math.floor(data.main.temp_max),
          humidity: Math.floor(data.main.humidity),
          real_feel: Math.floor(data.main.feels_like),
          wind_speed: Math.floor(data.wind.speed),
          icon_code: data.weather[0].icon,
          cloud_description: data.weather[0].description,
          pressure: Math.floor(data.main.pressure),
          sunrise: sunriseTime,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.api.propacity.in/api/v1/public/getAllCities?searchText=a"
        );
        const data = await response.json();
        setCityList(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleCityClick = (cityName) => {
    search(cityName);
    onClose();
  };

  return (
    <div className="modal">
      <p className="cities">Manage Cities</p>
      <div className="flex">
        <input ref={city} className="input" placeholder="Enter location" />
        <button onClick={() => search()} className="search-btn">
          Search
        </button>
      </div>
      <ul className="city-list">
        {cityList?.map((city) => (
          <li
            onClick={() => handleCityClick(city.name)}
            className="city-names"
            key={city.id}
          >
            {city.name} - {city.state}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageCities;
