import React from "react";

export default function WeatherIcon(props) {
  return (
    <img
      src={`/images/${props.code}.png`}
      alt={props.alt}
      height={props.height}
      // className="icon"
    />
  );
}
