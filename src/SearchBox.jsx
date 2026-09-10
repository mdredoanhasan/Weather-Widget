import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function WeatherBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_INFO = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "3ef1d179b198682036cce9d8f494fb51";

  const getWeatherInfo = async () => {
    const response = await fetch(
      `${API_INFO}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`,
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unable to find that city");
    }

    return {
      city: data.name,
      weather: data.weather[0].description,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
    };
  };
  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setError(false);
    try {
      const newInfo = await getWeatherInfo();
      setCity("");
      updateInfo(newInfo);
    } catch {
      setError(true);
    }
  };
  return (
    <div className="weatherbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <p className="search-error">No city found. Try another name.</p>
        )}
      </form>
    </div>
  );
}
