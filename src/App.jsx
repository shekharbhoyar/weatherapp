import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const handlecityChange = (e) => {
    setCity(e.target.value);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"1df2cede64c8ab3d3c05307103cd6023"}`
      );
      console.log(response);
      setWeather(response);
    } catch (err) {
      console.log("fetching data error", err);
    }
  };
  return (
    <>
      <div className="container">
        <h1>Weather App</h1>
        <input
          type="text"
          value={city}
          onChange={handlecityChange}
          placeholder="Enter City name"
        ></input>
        <br />
        <button onClick={fetchData}>Get Weather</button>
        {weather && (
          <div>
            <h2>{weather.data.name}</h2>
            <p>{weather.data.main.temp}</p>
            <p>{weather.data.weather[0].description}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
