import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.api.propacity.in/api/v1/public/getAllCities?searchText=a"
        );
        const data = await response.json();
        setCityList(data.data);
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="search">
      <p className="cities">Manage Cities</p>
      <input className="input" placeholder="🔍 Enter location" />
      <ul className="city-list">
        {cityList?.map((city) => (
          <li className="city-names" key={city.id}>
            {city.name} - {city.state}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
