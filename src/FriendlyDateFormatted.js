import React from "react";

export default function FriendlyDateFormatted(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dayDate = props.date.getDate();
  let month = months[props.date.getMonth()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let year = props.date.getFullYear();

  return (
    <div className="FormattedDate">
      <span className="date" id="date">
        {day}, {dayDate} {month} {hours}:{minutes} {year}
      </span>
    </div>
  );
}
