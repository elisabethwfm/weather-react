import React, { useState } from "react";
// import images from "./images";
// import clear sky from "./images/01d.png"
import Forecast from "./Forecast";
import axios from "axios";
import FriendlyDateFormatted from "./FriendlyDateFormatted";
import WeatherIcons from "./WeatherIcons";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: Math.round(response.data.main.humidity),
      date: new Date(response.data.dt * 1000),
      // iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "bada8b7e78b2e8f21ed242b93f56b802";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Wrapper">
        <div className="pictureBg">
          <WeatherIcons code={weatherData.icon} />
          <img
            src={weatherData.icon}
            alt={weatherData.description}
            className="backgroundImg"
          />
        </div>
        <div className="container">
          <div className="headline" id="headline">
            <span className="currentCity" id="current-city">
              {weatherData.city}
            </span>
            <div className="currentTemp" id="current-temp">
              <span className="temperature" id="temperature">
                {weatherData.temperature}
              </span>
              <span className="celsius" id="celsius">
                °C
              </span>
              /
              <span className="fahrenheit inactive" id="fahrenheit">
                °F
              </span>
            </div>
          </div>
          <div>
            <WeatherIcons code={weatherData.icon} />
            <img
              className="weatherIcon"
              src={weatherData.icon}
              alt={weatherData.description}
            />
          </div>
          <div className="currentData" id="currentData">
            <form
              className="typeLocation"
              id="type-location-form"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Type your location..."
                className="location"
                id="location-input"
                onChange={updateCity}
              />

              <input
                className="searchButton"
                id="search-button"
                role="img"
                aria-labelledby="currentLocation"
                type="submit"
                value="🔍"
              />

              <span
                className="currentLocation"
                id="current-location"
                role="img"
                aria-labelledby="currentLocation"
                type="sumbit"
              >
                🎯
              </span>
            </form>
            <span className="date" id="date">
              <FriendlyDateFormatted date={weatherData.date} />
            </span>
            <div className="currentState" id="currentState">
              <div className="weatherState" id="weather-state">
                {weatherData.description}
              </div>
              <div className="hum" id="hum">
                Humidity: {weatherData.humidity}%
              </div>
              <div className="wind" id="wind">
                Wind: {weatherData.wind} km/h
              </div>
            </div>
          </div>

          <div id="forecast-wrapper">
            <Forecast />
          </div>
        </div>
        <div className="test">
          <p>
            <a
              href="https://github.com/elisabethwfm/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code{" "}
            </a>
            by
            <a
              href="https://www.linkedin.com/in/elisabeth-wolfram-8736441a8/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Elisabeth Wolfram
            </a>
          </p>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading ... ";
  }
}
