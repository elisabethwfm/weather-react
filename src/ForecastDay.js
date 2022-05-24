import React from "react";
import WeatherIcon from "./WeatherIcons";

export default function ForecastDay(props) {
  return (
    <div className="ForecastDay">
      <div className="days" id="days">
        <p>{props.data[0].dt}</p>
      </div>
      <div className="icons" id="icons">
        <span className="cloudy" id="cloudy">
          <WeatherIcon code={props.data[0].weather[0].icon} className="icons" />
        </span>
      </div>
      <div className="forecast" id="forecast">
        <span className="maxTemp" id="max-temp">
          {Math.round(props.data[0].temp.max)}°
        </span>{" "}
        <span className="minTemp" id="min-temp">
          {Math.round(props.data[0].temp.min)}°
        </span>
      </div>
    </div>
  );
}
