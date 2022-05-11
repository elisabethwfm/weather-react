import React from "react";

export default function FriendlyDateFormatted(props) {
  //   let day = props.date.getDay();
  //   let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <div className="FormattedDate">
      <span className="date" id="date">
        Thu, 22 April 9:30am 2022
      </span>
    </div>
  );
}
