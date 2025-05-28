import { useWeather } from "../../context/WeatherContext";
import ForecastUI from "./ForecastUI";

const Forecast = () => {
  const { forecastData } = useWeather();

  if (!forecastData || forecastData.length === 0) return null;

  return <ForecastUI forecastData={forecastData} />;
};

export default Forecast;
