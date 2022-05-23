import React from "react";
import WeatherIcon from "./WeatherIcons";

export default function Forecast() {
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
