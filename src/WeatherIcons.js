// import React from "react";
// import clear_sky from "./images/01d.png";
// import few_clouds from "./images/02d.png";
// import scattered_clouds from "./images/03d.png";
// import broken_clouds from "./images/04d.png";
// import shower_rain from "./images/09d.png";
// import rain from "./images/10d.png";
// import thunderstorm from "./images/11d.png";
// import snow from "./images/13d.png";
// import mist from "./images/50d.png";

// export default function WeatherIcon(props) {
//   const codeMapping = {
//     "01d": "clear_sky",
//     "01n": "clear_sky",
//     "02d": "few_clouds",
//     "02n": "few_clouds",
//     "03d": "scattered_clouds",
//     "03n": "scattered_clouds",
//     "04d": "broken_clouds",
//     "04n": "broken_clouds",
//     "09d": "shower_rain",
//     "09n": "shower_rain",
//     "10d": "rain",
//     "10n": "rain",
//     "11d": "thunderstorm",
//     "11n": "thunderstorm",
//     "13d": "snow",
//     "13n": "snow",
//     "50d": "mist",
//     "50n": "mist",
//   };
// }

// // export default function WeatherIcon(props) {
// //   const codeMapping = {
// //     "01d": "01d.png",
// //     "01n": "01d.png",
// //     "02d": "02n.png",
// //     "02n": "02n.png",
// //     "03d": "03n.png",
// //     "03n": "03n.png",
// //     "04d": "04n.png",
// //     "04n": "04n.png",
// //     "09d": "09d.png",
// //     "09n": "09d.png",
// //     "10d": "10d.png",
// //     "10n": "10d.png",
// //     "11d": "11d.png",
// //     "11n": "11d.png",
// //     "13d": "13d.png",
// //     "13n": "13d.png",
// //     "50d": "50d.png",
// //     "50n": "50d.png",
// //   };

// //   return <img src="../images" alt={props.alt} />;
// // }

// // export default function WeatherIcon(props) {
// //   return (
// //     <img
// //       src={`/img/${props.code}.png`}
// //       alt={props.alt}
// //       height="150"
// //       className="icon"
// //     />
// //   );
// // }
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
