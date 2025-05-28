import Search from "./components/Search";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast/Forecast";
import ErrorMessage from "./components/ErrorMessage"; 
import { useWeather } from "./context/WeatherContext"; 

function App() {
  const { error } = useWeather(); // for error

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sky-950 to-blue-00 text-white px-4 py-6">
      <h1 className="text-3xl text-center font-semibold mb-6">
        WEATHER APPLICATION
      </h1>

      <Search />
      {error && <ErrorMessage message={error} />}

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 mt-6 max-w-7xl mx-auto px-2">
        <div className="w-full lg:w-1/2">
          <Weather />
        </div>
        <div className="w-full lg:w-1/2">
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
