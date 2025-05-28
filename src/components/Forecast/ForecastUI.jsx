
const ForecastUI = ({ forecastData }) => {
  return (
    <div className="flex justify-center">
      <div className=" p-1 rounded-xl text-black w-full max-w-lg mt-5">
        <h2 className="text-2xl text-white font-sans mb-6 text-center">5-Day Forecast</h2>
        <div className="flex flex-col gap-1">
          {forecastData.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-25 px-4 flex items-center justify-between"
            >
              <p className="font-medium w-20">
                {new Date(item.dt_txt).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                className="w-12"
              />
              <p className="text-sm w-24 text-center">{item.weather[0].main}</p>
              <p className="font-bold">{item.main.temp.toFixed()} °C</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForecastUI;
