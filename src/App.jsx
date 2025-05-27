import Search from "./components/Search";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="w-screen h-screen">
      <p className="text-3xl text-center font-semibold py-2">Welcome to Weather App</p>
      <Search />
      <Weather />
    </div>
  );
}

export default App;

