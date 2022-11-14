import React from "react";
import "./Weather.scss";
import { useState, useEffect } from "react";
import CurrentForecast from "../../components/CurrentForecast/CurrentForecast";
import CurrentHighlights from "../../components/CurrentHighlights/CurrentHighlights";
import Forecast from "../../components/Forecast/Forecast";

const Weather = ({REACT_APP_API_KEY, time}) => {
  const [currentWeather, setCurrentWeather] = useState("");
  const [forecast, setForecast] = useState("");
  const [userLocation, setUserLocation] = useState({latitude:0,longitude:0});


  console.log(REACT_APP_API_KEY);


  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setUserLocation({latitude, longitude});
      console.log(userLocation);
    },
    (error) => {

    })
  }

  // console.log(REACT_APP_API_KEY);
  console.log(userLocation);

  const getCurrentWeather = async () => {
    getLocation();
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${REACT_APP_API_KEY}&q=${userLocation.latitude},${userLocation.longitude}&aqi=no`
      );
      const weatherData = await res.json();
      console.log(res);
      setCurrentWeather(weatherData);
  };

  const getForecast = async () => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=b9bb29b9157b427095b130730221411&q=Manchester&days=7&aqi=yes&alerts=yes`
    );
    const forecastData = await res.json();
    console.log(res);
    setForecast(forecastData);
  };


  useEffect(() => {
    getCurrentWeather();
    getForecast();
    
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
