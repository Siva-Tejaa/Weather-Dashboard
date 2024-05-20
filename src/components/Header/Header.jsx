// import React from 'react';
import WeatherLogo from "../../assets/WeatherLogo2.png";

const Header = () => {
  return (
    <div className="flex items-center gap-2 p-1 shadow-lg text-white">
      <img src={WeatherLogo} alt="WeatherLogo" width="70em" height="70em" />
      <img src="" />
      <p className="font-bold text-3xl">Weather Dashboard</p>
    </div>
  );
};

export default Header;
