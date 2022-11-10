import React from 'react'
import "./Forecast.scss"

const Forecast = ({forecast}) => {

let forecastArr = forecast.forecast.forecastday;

console.log(forecastArr);


  const forecastJSX = (forecastArr) => {
    return forecastArr.map((item, index) =>{
      return (
        <div className='forecast__card'  key={index}>
          <img src={item.day.condition.icon} alt="" />
          <p className='forecast__child'>Date: {item.date}</p>
          <p className='forecast__child'>Average Temp: {item.day.avgtemp_c} °C</p>
          <p className='forecast__child'>Sunrise: {item.astro.sunrise}</p>
          <p className='forecast__child'>Sunset: {item.astro.sunset}</p>
          <p className='forecast__child'>Weather: {item.day.condition.text}</p>

        </div>
      )
    })

  }
  return (
    <div className='forecast'>
        <h1 className='forecast__header'>7 Day Forcast</h1>
        <div className='forecast__container'>{forecastJSX(forecastArr)}</div>
    
    </div>
  )
}

export default Forecast