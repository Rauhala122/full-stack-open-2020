import React, { useState, useEffect } from 'react'
import axios from 'axios'

const apiUrl = "http://api.weatherstack.com/current";
const apiKey = "?access_key=1c256d9e563c939a48bedf15d9f2c9d6";

const Weather = ({city}) => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
        const eventHandler = (response)  => {
          setWeather(response.data)
          console.log(`${apiUrl}${apiKey}&query=${city})`)
        }
        const promise = axios.get(`${apiUrl}${apiKey}&query=${city})`)
        promise.then(eventHandler)
    }, [city])
  const current = {...weather.current}
  console.log(current.weather_icons)
  return (
    <div>
      <p>Temperature: {current.temperature} Celcius</p>
      <img src={current.weather_icons}/>
      <p>Wind: {current.wind_speed} km/h direction {current.wind_dir}</p>
    </div>
  )
}

export default Weather
