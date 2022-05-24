import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false); //false, because the default state is that it is not loaded yet
  let [forecast, setForecast] = useState("");

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true); //this shows the response
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="testGrid">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="forecastGrid" id="forecastGrid" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "bada8b7e78b2e8f21ed242b93f56b802";
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Forecast loading...";
  }
}
