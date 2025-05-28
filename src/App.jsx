import Search from "./components/Search";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-sky-900 to-blue-800 text-white px-4 py-6">
      <p className="text-3xl text-center font-semibold mb-6">
        Welcome to Weather App
      </p>
      <Search />

      {/* Responsive layout */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-2 mt-6">
        {/* Optionally control widths for balance */}
        <div className="w-full lg:w-2/3">
          <Weather />
        </div>
        <div className="w-full lg:w-2/3">
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
