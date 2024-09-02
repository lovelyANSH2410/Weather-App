import React from "react";
import "./Body.css";
import Search from "./Search";
import Weather from "./Weather";

const Body = () => {
  return (
    <div className="bg">
      <Weather />
      <Search />
    </div>
  );
};

export default Body;
