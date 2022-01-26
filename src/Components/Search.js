import React, { useState } from "react";
import axios from "axios";
import "../Styles/Search.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [doShowData, setDoShowData] = useState(false);
  function getInfo(response) {
    setDoShowData(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }
  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=c9e949520b33b479d97265ad4b8693ed`;
    axios.get(url).then(getInfo);
  }
  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form className="form" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Enter a city"
          onChange={handleCityChange}
        />
        <input type="submit" className="search-button" value="🔍" />
      </form>
      {doShowData ? (
        <ul className="list">
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
            />
          </li>
        </ul>
      ) : null}
    </div>
  );
}
