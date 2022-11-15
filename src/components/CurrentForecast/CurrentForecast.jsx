import React from 'react'
import "./CurrentForecast.scss"

const CurrentForecast = ({currentWeather, time}) => {

  let tempc=currentWeather.current.temp_c
  let tempf=currentWeather.current.temp_f
  let condition=currentWeather.current.condition.text
  let location=currentWeather.location.region
  let country=currentWeather.location.country
  let img= currentWeather.current.condition.icon

  let timeID;

  if (time >= 17 || time <= 6) {
    timeID = 'night'
  } else {
    timeID = 'day'
  }


  return (
    <div className="current-forecast" id={timeID}>
      <img className='current-forecast__image child' src={img} alt="" />
      <h1 className='current-forecast__location child'>{location},   {country} </h1>
      <h2 className='current-forecast__description child'>Its {condition} outside today.</h2>
      <h2 className='current-forecast__header child '> {tempc}°C or {tempf}°F    </h2>
   </div>
  )
}

export default CurrentForecast