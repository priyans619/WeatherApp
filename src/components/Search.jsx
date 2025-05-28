import { useWeather } from "../context/WeatherContext";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const { location, setLocation, searchLocation } = useWeather();

  return (
    <div className="text-center px-4 md:px-8 py-4 md:py-8">
      <div className="relative w-full md:w-[700px] mx-auto">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
          <FiSearch size={20} />
        </div>
        <input
          type="text"
          className="py-2 pl-10 pr-3 w-full text-lg rounded-xs
            border border-gray-200 text-gray-600 placeholder:text-gray-400
            focus:outline-none bg-white shadow-md"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
    </div>
  );
};

export default Search;
