import { useState } from "react";
import axios from "axios";
import "./App.css"; // Make sure this matches your CSS file name

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const handlecityChange = (e) => {
    setCity(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1df2cede64c8ab3d3c05307103cd6023&units=metric`
      );
      setWeather(response);
      setCity("");
    } catch (err) {
      console.log("fetching data error", err);
    }
  };

  return (
    <div className="app-container">
      <div className="weather-card">
        <h1 className="title">🌤️ Weather App</h1>
        <input
          type="text"
          value={city}
          onChange={handlecityChange}
          placeholder="Enter city name"
          className="input"
        />
        <button onClick={fetchData} className="button">
          Get Weather
        </button>
        {weather && (
          <div className="weather-info">
            <h2 className="city-name">{weather.data.name}</h2>
            <p className="temperature">🌡️ Temp: {weather.data.main.temp}°C</p>
            <p className="description">
              🌥️ {weather.data.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
