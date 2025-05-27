
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});

  const fetchWeather = (city) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Weather fetch error:", err));
  };

  useEffect(() => {
    fetchWeather("London");
  }, []);

  return (
    <WeatherContext.Provider >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
