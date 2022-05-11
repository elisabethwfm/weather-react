import React, { useState } from "react";

export default function InputForm() {
  let [text, setText] = useState("");

  function updateText(event) {
    setText(event.target.value);
  }

  return (
    <div className="inputForm">
      <form className="typeLocation" id="type-location-form">
        <input
          type="text"
          placeholder="Type your location..."
          className="location"
          id="location-input"
          onChange={updateText}
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
    </div>
  );
}
