import React from "react";
import "./Weather.scss";
import { useState, useEffect } from "react";
import CurrentForecast from "../../components/CurrentForecast/CurrentForecast";
import CurrentHighlights from "../../components/CurrentHighlights/CurrentHighlights";
import Forecast from "../../components/Forecast/Forecast";
import FadeLoader from "react-spinners/FadeLoader";

const Weather = ({ REACT_APP_API_KEY, time, setLoading, loading }) => {
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [currentWeather, setCurrentWeather] = useState("");
  const [forecast, setForecast] = useState("");

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setUserLocation({ latitude, longitude });
        setLoading(false)
      });
    };

  const getCurrentWeather = async () => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${REACT_APP_API_KEY}&q=${userLocation.latitude},${userLocation.longitude}&aqi=no`
    );
    const weatherData = await res.json();
    setCurrentWeather(weatherData);
    
  };

  const getForecast = async () => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${REACT_APP_API_KEY}&q=${userLocation.latitude},${userLocation.longitude}&days=7&aqi=yes&alerts=yes`
    );
    const forecastData = await res.json();
    setForecast(forecastData);
    
  };

  useEffect(() => {
    getCurrentWeather();
    getForecast();
    getLocation()
  }, [userLocation.latitude, userLocation.longitude]);

  return (
    <div className="loading">
      {loading ? (
        <FadeLoader
          color={"#FFFF00"}
          loading={loading}
          size={500}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="weather">
          {currentWeather && (
            <CurrentForecast currentWeather={currentWeather} time={time} />
          )}
          {forecast && <Forecast forecast={forecast} time={time} />}
          {currentWeather && (
            <CurrentHighlights currentWeather={currentWeather} time={time} />
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;
