import React from "react";
import "./CurrentHighlights.scss";
import Wind from "../../assets/wind.png";
import Water from "../../assets/water.png";
import UV from "../../assets/uv.png";
import Thermo from "../../assets/thermo.png";
import Rain from "../../assets/rain.png";
import Eye from "../../assets/eye.png";

const CurrentHighlights = ({ currentWeather, time }) => {
  let uv = currentWeather.current.uv;
  let feelslikec = currentWeather.current.feelslike_c;
  let feelslikef = currentWeather.current.feelslike_f;
  let rainin = currentWeather.current.precip_in;
  let rainmm = currentWeather.current.precip_mm;
  let humidity = currentWeather.current.humidity;
  // let location=currentWeather.location.region
  let viskm = currentWeather.current.vis_km;
  let vism = currentWeather.current.vis_miles;
  let windspeedmph = currentWeather.current.gust_mph;
  let windspeedkph = currentWeather.current.gust_kph;

  let timeID;
  let otherID;
  

  if (time >= 17 || time <= 6) {
    timeID = "night";
    otherID = "ngt";
  } else {
    timeID = "daytime";
    otherID= "dy";
  }

  return (
    <div className="highlights" id={timeID}>
      <div className="highlights__wind" id={otherID}>
        <h2 className="highlights__child">Wind Status</h2>
        <img
          className="highlights__image highlights__child"
          src={Wind}
          alt=""
        />
        <p className="highlights__child">Wind speed MPH: {windspeedmph}</p>
        <p className="highlights__child">Wind speed KPH: {windspeedkph}</p>
      </div>
      <div className="highlights__uv"id={otherID}>
        <h2 className="highlights__child">UV Index</h2>
        <img className="highlights__image highlights__child" src={UV} alt="" />
        <h1 className="highlights__child">{uv}</h1>
      </div>
      <div className="highlights__sunrise "id={otherID}>
        <h2 className="highlights__child">Precipitation</h2>
        <img
          className="highlights__image highlights__child"
          src={Rain}
          alt=""
        />
        <p className="highlights__child">Rainfall in Inches: {rainin}</p>
        <p className="highlights__child">Rainfall in Millimeters: {rainmm}</p>
      </div>

      <div className="highlights__humidity " id={otherID}>
        <h2 className="highlights__child">Humidity</h2>
        <img
          className="highlights__image highlights__child"
          src={Water}
          alt=""
        />

        <p className="highlights__child">{humidity}</p>
      </div>
      <div className="highlights__visibility " id={otherID}>
        <h2 className="highlights__child">Visibility</h2>
        <img className="highlights__image highlights__child" src={Eye} alt="" />

        <p className="highlights__child">Visibility in KM:{viskm}</p>
        <p className="highlights__child">Visibility in M: {vism}</p>
      </div>
      <div className="highlights__feels " id={otherID}>
        <h2 className="highlights__child">Feels Like</h2>
        <img
          className="highlights__image highlights__child"
          src={Thermo}
          alt=""
        />

        <p className="highlights__child">Feels like {feelslikec} °C</p>
        <p className="highlights__child">Feels like {feelslikef} °F</p>
      </div>
    </div>
  );
};

export default CurrentHighlights;
