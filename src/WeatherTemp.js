import React from "react";

export default function WeatherTemp() {
  return (
    <span className="weatherTemp">
      <span className="celsius" id="celsius">
        °C
      </span>
      /
      <span className="fahrenheit inactive" id="fahrenheit">
        °F
      </span>
    </span>
  );
}
