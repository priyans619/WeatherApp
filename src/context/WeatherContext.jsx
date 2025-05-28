
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  const fetchWeather = async (city) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    try {
      const currentRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setCurrentWeather(currentRes.data);

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      // Filter forecast to 1 reading per day (e.g., 12:00 PM)
      const daily = forecastRes.data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(daily);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const searchLocation = (event) => {
    if (event.key === "Enter" && location.trim()) {
      fetchWeather(location);
      setLocation("");
    }
  };

  useEffect(() => {
    fetchWeather("London");
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        location,
        setLocation,
        searchLocation,
        weatherData: currentWeather,
        forecastData: forecast,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
