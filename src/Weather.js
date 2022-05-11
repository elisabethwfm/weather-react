import React from "react";
import sunny from "./images/01d.png";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="Wrapper">
      <div className="pictureBg">
        <img src={sunny} alt="" className="backgroundImg" />
      </div>
      <div className="container">
        <div className="headline" id="headline">
          <span className="currentCity" id="current-city">
            City
          </span>
          <div className="currentTemp" id="current-temp">
            <span className="temperature" id="temperature">
              18
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
          <img className="weatherIcon" src={sunny} alt="cloudSun" />
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
            Thu, 22 April 9:30am 2022
          </span>
          <div className="currentState" id="currentState">
            <div className="weatherState" id="weather-state">
              Clear sky
            </div>
            <div className="hum" id="hum">
              Humidity: 45%
            </div>
            <div className="wind" id="wind">
              Wind: 19 km/h
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
}
