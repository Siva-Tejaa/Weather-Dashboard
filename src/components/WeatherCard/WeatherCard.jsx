import React from "react";
import Search from "../Search/Search";
import Card from "../Card/Card";

const WeatherCard = () => {
  return (
    <>
      <div className=" grid place-items-center gap-3 rounded-md m-6 p-6 shadow-[0px_0px_50px_-3px_rgba(0,0,0,0.2)] md:m-12 md:self-center md:w-[49rem]">
        <Search />
        <Card />
      </div>
    </>
  );
};

export default WeatherCard;
