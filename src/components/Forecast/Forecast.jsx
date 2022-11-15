import React from 'react'
import "./Forecast.scss"

const Forecast = ({forecast, time}) => {

let forecastArr = forecast.forecast.forecastday;

console.log(forecastArr);

let timeID;


if (time >= 17 || time <= 6) {
  timeID = 'night'
  
} else {
  timeID = 'day'
 
}


  const forecastJSX = (forecastArr) => {
    return forecastArr.map((item, index) =>{
      return (
        <div className='forecast__card' key={index}>
          <img className='forecast__image' src={item.day.condition.icon} alt="" />
          <p className='forecast__child'>Date: {item.date}</p>
          <p className='forecast__child'>Weather: {item.day.condition.text}</p>
          <p className='forecast__child'>Average Temp: {item.day.avgtemp_c} °C</p>
          <p className='forecast__child'>Sunrise: {item.astro.sunrise}</p>
          <p className='forecast__child'>Sunset: {item.astro.sunset}</p>
        </div>
      )
    })

  }
  return (
    <div className='forecast' id={timeID} >
        <h1 className='forecast__header'>7 Day Forcast</h1>
        <p className='forecast__header'>Scroll down to see all</p>
        <div className='forecast__container' >{forecastJSX(forecastArr)}</div>
    </div>
  )
}

export default Forecast