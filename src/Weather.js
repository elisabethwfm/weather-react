import React, { useState } from "react";
// import images from "./images";
import Forecast from "./Forecast";
import axios from "axios";
import FriendlyDateFormatted from "./FriendlyDateFormatted";

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
      date: new Date(response.data.dt) * 1000,
      icon: response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/10d@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Wrapper">
        <div className="pictureBg">
          <img src={weatherData.iconUrl} alt="" className="backgroundImg" />
        </div>
        <div className="container">
          <div className="headline" id="headline">
            <span className="currentCity" id="current-city">
              London
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
            <img
              className="weatherIcon"
              src={weatherData.iconUrl}
              alt={weatherData.description}
            />
          </div>
          <div className="currentData" id="currentData">
            <form className="typeLocation" id="type-location-form">
              <input
                type="text"
                placeholder="Type your location..."
                className="location"
                id="location-input"
              />

              <span
                className="searchButton"
                id="search-button"
                role="img"
                aria-labelledby="currentLocation"
              >
                🔍
              </span>
              <span
                className="currentLocation"
                id="current-location"
                role="img"
                aria-labelledby="currentLocation"
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
    const apiKey = "bada8b7e78b2e8f21ed242b93f56b802";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading ... ";
  }
}
