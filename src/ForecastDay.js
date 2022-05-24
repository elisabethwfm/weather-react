import React from "react";
import WeatherIcon from "./WeatherIcons";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="days" id="days">
        <p>{day()}</p>
      </div>
      <div className="icons" id="icons">
        <span className="cloudy" id="cloudy">
          <WeatherIcon code={props.data.weather[0].icon} className="icons" />
        </span>
      </div>
      <div className="forecast" id="forecast">
        <span className="maxTemp" id="max-temp">
          {Math.round(props.data.temp.max)}°
        </span>{" "}
        <span className="minTemp" id="min-temp">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
