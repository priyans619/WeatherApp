import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`;
    
    try {
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get(weatherUrl),
        axios.get(forecastUrl),
      ]);
      setData(weatherRes.data);
      setForecastData(
        forecastRes.data.list.filter((item) => item.dt_txt.includes("12:00:00"))
      );
      setError("");
      localStorage.setItem("lastCity", city);
    } catch (err) {
      setError("City not found. Please try another location.");
      setData({});
      setForecastData([]);
    }
  };

  const searchLocation = (event) => {
    if (event.key === "Enter" && location.trim()) {
      fetchWeather(location);
      setLocation("");
    }
  };

  // On first load check localStorage for saved city line 27
  useEffect(() => {
    const savedCity = localStorage.getItem("lastCity") || "London";
    fetchWeather(savedCity);
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        location,
        setLocation,
        searchLocation,
        weatherData: data,
        forecastData,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
