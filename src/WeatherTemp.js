import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="weatherTemp">
        <span className="temperature" id="temperature">
          {props.celsius}
        </span>
        <span className="celsius" id="celsius">
          °C
        </span>
        /
        <span
          className="fahrenheit inactive"
          id="fahrenheit"
          onClick={convertCelsius}
        >
          °F
        </span>
      </span>
    );
  } else {
    let fahrenheitTemp = (props.celsius * 9) / 5 + 32;
    return (
      <span className="weatherTemp">
        <span className="temperature" id="temperature">
          {Math.round(fahrenheitTemp)}
        </span>
        <span
          className="celsius inactive"
          id="celsius"
          onClick={convertFahrenheit}
        >
          °C
        </span>
        /
        <span className="fahrenheit" id="fahrenheit" onClick={convertCelsius}>
          °F
        </span>
      </span>
    );
  }
}
