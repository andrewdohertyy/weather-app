import React from 'react'
import "./CurrentForecast.scss"

const CurrentForecast = ({currentWeather}) => {

  let tempc=currentWeather.current.temp_c
  let tempf=currentWeather.current.temp_f
  let condition=currentWeather.current.condition.text
  let location=currentWeather.location.region
  let country=currentWeather.location.country
  let time=currentWeather.location.localtime
  let img= currentWeather.current.condition.icon


  return (
    <div className='current-forecast'>
      <img className='current-forecast__image child' src={img} alt="" />
      <h1 className='current-forecast__location child'>{location},   {country} </h1>
      <h2 className='current-forecast__header child '> {tempc} °C   </h2>
      <h2 className='current-forecast__header child'> {tempf} °F   </h2>
      <h3 className='current-forecast__description child'>Its {condition} outside today.</h3>
      
      
      <h3 className='current-forecast__date child'>Last Checked: {time}</h3>
    </div>
  )
}

export default CurrentForecast