import React from "react";
import "./Weather.scss";
import { useState, useEffect } from "react";
import CurrentForecast from "../../components/CurrentForecast/CurrentForecast";
import CurrentHighlights from "../../components/CurrentHighlights/CurrentHighlights";
import Forecast from "../../components/Forecast/Forecast";

const Weather = ({REACT_APP_API_KEY, time}) => {
  const [currentWeather, setCurrentWeather] = useState("");
  const [forecast, setForecast] = useState("");

  const getCurrentWeather = async () => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=6e43ebee6cbc4c50a32135335221111&q=London&aqi=no`
    );
    const weatherData = await res.json();
    setCurrentWeather(weatherData);
  };

  const getForecast = async () => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=6e43ebee6cbc4c50a32135335221111&q=London&days=7&aqi=yes&alerts=yes`
    );
    const forecastData = await res.json();
    setForecast(forecastData);
  };

  const componentDidMount =() => {
    if (navigator.geolocation) {
    console.log("GeoLocation is Available!");
    } else {
    console.log("No");;
    }}

  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };


  const success = (pos) => {

    let crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  const  errors = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
          }
          result.onchange =  () => {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  };

  useEffect(() => {
    getCurrentWeather();
    getForecast();
    getLocation();
  }, []);



  


  return (
    <div className="weather">
      {currentWeather && <CurrentForecast currentWeather={currentWeather}time={time}/>}

      {forecast && <Forecast forecast={forecast}time={time} />}

      {currentWeather && <CurrentHighlights currentWeather={currentWeather}time={time} />}

    </div>
  );
};

export default Weather;
