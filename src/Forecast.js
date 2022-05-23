import React from "react";
import WeatherIcon from "./WeatherIcons";
import axios from "axios";

export default function Forecast(response) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "bada8b7e78b2e8f21ed242b93f56b802";
  let lat = 40.7;
  let lon = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="testGrid">
        <div className="forecastGrid" id="forecastGrid">
          <div className="days" id="days">
            <p>Monday</p>
          </div>
          <div className="icons" id="icons">
            <span className="cloudy" id="cloudy">
              <WeatherIcon code="01d" className="icons" />
            </span>
          </div>
          <div className="forecast" id="forecast">
            <span className="maxTemp" id="max-temp">
              18°C
            </span>
            °{" "}
            <span className="minTemp" id="min-temp">
              10°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
