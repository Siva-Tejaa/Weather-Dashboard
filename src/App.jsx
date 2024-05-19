import { useState, useEffect } from "react";
import "./App.css";

//Components
import Header from "./components/Header/Header";

//Context
import { Context } from "./utils/Context";

//API'S
import {
  API_KEY,
  GET_WEATHER_BY_CITY_NAME,
  GET_5_DAY_WEATHER_FORECAST,
} from "./utils/api/api";
import WeatherCard from "./components/WeatherCard/WeatherCard";

const App = () => {
  const [city, setCity] = useState("New Delhi");

  const [cityLoading, setCityLoading] = useState(false);
  const [cityData, setCityData] = useState([]);
  const [cityError, setCityError] = useState(false);

  const [foreCastLoading, setForeCastLoading] = useState(false);
  const [foreCastData, setForeCastData] = useState([]);
  const [foreCastError, setForeCastError] = useState(false);

  const getAPI = async () => {
    try {
      const URL = `${GET_WEATHER_BY_CITY_NAME}${city}${API_KEY}`;
      const response = await fetch(URL);
      const data = await response.json();
      setCityData(data);
      console.log(data);
      setCityLoading(true);
    } catch (error) {
      console.log(error);
      setCityError(true);
    } finally {
      setCityLoading(false);
    }
  };

  const getAPI2 = async () => {
    try {
      const URL = `${GET_5_DAY_WEATHER_FORECAST}${city}${API_KEY}`;
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setCityLoading(true);
    } catch (error) {
      console.log(error);
      setCityError(true);
    } finally {
      setCityLoading(false);
    }
  };

  useEffect(() => {
    getAPI();
    getAPI2();
  }, [city]);

  return (
    <Context.Provider value={{ cityData }}>
      <div className="flex flex-col min-h-[100svh] bg-[linear-gradient(169deg,#a0025e,#f9c829_153.21%)]">
        <Header />
        <WeatherCard />
      </div>
    </Context.Provider>
  );
};

export default App;
