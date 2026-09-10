import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Dhaka",
    feelsLike: 35.61,
    humidity: 84,
    temp: 28.99,
    tempMax: 28.99,
    tempMin: 28.99,
    weather: "overcast clouds",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div className="weather-app">
      <p className="weather-kicker">LOCAL FORECAST</p>
      <h2>Weather App by Redoan</h2>
      <p className="weather-intro">
        Search any city to see its current conditions.
      </p>
      <SearchBox updateInfo={updateInfo}></SearchBox>
      <InfoBox info={weatherInfo}></InfoBox>
    </div>
  );
}
