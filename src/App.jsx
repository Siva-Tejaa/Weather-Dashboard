import { useState, useEffect } from "react";
import "./App.css";

//Components
import Header from "./components/Header/Header";
import WeatherCard from "./components/WeatherCard/WeatherCard";

//Context
import { Context } from "./utils/Context";

//API'S
import {
  API_KEY,
  GET_WEATHER_BY_CITY_NAME,
  GET_5_DAY_WEATHER_FORECAST,
  GET_WEATHER_BY_LOCATION,
} from "./utils/api/api";

const App = () => {
  const [userlocation, setUserLocation] = useState({
    latitude: "",
    longitude: "",
  });

  const [units, setUnits] = useState("units=metric");

  const [city, setCity] = useState("New Delhi");
  const [cityData, setCityData] = useState([]);
  const [foreCastData, setForeCastData] = useState([]);

  //GET User Location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      setCity("New Delhi");
      alert("Geolocation is not supported by this browser.");
    }
  };

  // const setTempC = () => {
  //   setUnits("units=metric");
  // };

  // const setTempF = () => {
  //   setUnits("units=imperial");
  // };

  //Get Weather Data
  const getWeatherByCity = async () => {
    try {
      const URL = `${GET_WEATHER_BY_CITY_NAME}${city}${API_KEY}&${units}`;
      const response = await fetch(URL);
      const data = await response.json();
      if (data?.main) {
        setCityData(data);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const getWeatherByLocation = async () => {
    try {
      const URL = `${GET_WEATHER_BY_LOCATION}${userlocation?.latitude}&lon=${userlocation?.longitude}${API_KEY}&${units}`;
      const response = await fetch(URL);
      const data = await response.json();
      if (data?.main) {
        setCityData(data);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  //Get 5 Day Weather Forecast Data
  const getWeatherForeCast = async () => {
    try {
      const URL = `${GET_5_DAY_WEATHER_FORECAST}${city}${API_KEY}&${units}`;
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    if (userlocation?.latitude == "" || userlocation?.longitude == "") {
      getWeatherByCity();
    } else {
      getWeatherByLocation();
    }
    // getWeatherByCity();
    // getUserLocation();
    getWeatherForeCast();
  }, []);

  // useEffect(() => {
  //   if (userlocation?.latitude == "" || userlocation?.longitude == "") {
  //     getWeatherByCity();
  //   } else {
  //     getWeatherByLocation();
  //   }
  // }, [units]);

  useEffect(() => {
    if (userlocation?.latitude == "" || userlocation?.longitude == "") {
      // console.log("User not approved location");
    } else {
      getWeatherByLocation();
    }
  }, [userlocation]);

  return (
    <Context.Provider
      value={{
        city,
        setCity,
        cityData,
        getUserLocation,
        getWeatherByCity,
      }}
    >
      <div className="flex flex-col min-h-[100svh] bg-[linear-gradient(169deg,#a0025e,#f9c829_153.21%)]">
        <Header />
        <WeatherCard />
      </div>
    </Context.Provider>
  );
};

export default App;
