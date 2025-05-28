import { useWeather } from "../context/WeatherContext";
import Clear from "../assets/Clear.png";
import Cloudy from "../assets/Cloudy.png";
import Rain from "../assets/Rain.png";
import Haze from "../assets/Haze.png";

const Weather = () => {
  const { weatherData, lastUpdated } = useWeather();

  const getBackgroundImage = () => {
    if (!weatherData.weather) return "";
    const condition = weatherData.weather[0].main;

    switch (condition) {
      case "Rain":
        return `url(${Rain})`;
      case "Clear":
        return `url(${Clear})`;
      case "Clouds":
        return `url(${Cloudy})`;
      case "Haze":
      case "Smoke":
        return `url(${Haze})`;
      default:
        return "";
    }
  };

  if (!weatherData.weather) return null;

  return (
    <div
      className="max-w-lg sm:mx-auto bg-gradient shadow-lg rounded-md p-7 mt-8 mx-4 bg-cover bg-no-repeat"
      style={{ backgroundImage: getBackgroundImage() }}
    >
      <div className="flex justify-between w-full text-white">
        <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
          <div className="flex flex-col items-start justify-between h-full">
            <div>
              <p className="text-xl font-semibold">
                {weatherData.name}, {weatherData.sys.country}
              </p>
              <p className="text-sm font-semibold">
                {weatherData.weather[0].description}
              </p>
            </div>
            <div>
              <h1 className="text-blue-400 text-6xl font-semibold">
                {weatherData.main.temp.toFixed()} °C
              </h1>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-between items-end">
          <div className="relative">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="w-[120px]"
            />
          </div>

          <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto sm:text-xs">
            <div className="flex justify-between gap-x-8">
              <p>Feels Like</p>
              <p className="font-bold w-20">
                {weatherData.main.feels_like.toFixed()} °C
              </p>
            </div>
            <div className="flex justify-between gap-x-8">
              <p>Humidity</p>
              <p className="font-bold w-20">
                {weatherData.main.humidity} %
              </p>
            </div>
            <div className="flex justify-between gap-x-8">
              <p>Wind Speed</p>
              <p className="font-bold w-20">
                {weatherData.wind.speed.toFixed()} Kph
              </p>
            </div>
            <div className="flex justify-between gap-x-8">
              <p>Pressure</p>
              <p className="font-bold w-20">
                {weatherData.main.pressure} hpa
              </p>
            </div>
          </div>
        </div>
      </div>
      
        {lastUpdated && (
          <p className="text-sm text-white italic">
            Last updated at: {lastUpdated}
          </p>
        )}
    </div>
  );
};

export default Weather;

