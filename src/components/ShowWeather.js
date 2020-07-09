import React from 'react'
import SearchCity from './SearchPlace'

export default function ShowWeather(props) {
  const { currentTempreture, feelsLike, tempMax, tempMin, currentDescription } = props.weatherCurrent
  // let currentTemp = props.weatherCurrent.currentTemp
  // let feelsLike = props.weatherCurrent.feelsLike
  return (
    <div>
      <div>
        <SearchCity

        />
      </div>
      <div>
        <span>London</span>
        <div className="show-weather-container">
          <span className="show-weather-item">Current temp {currentTempreture} </span>
          <span className="show-weather-item">Feels like {feelsLike}</span>
          <span className="show-weather-item">Min temp {tempMin}</span>
          <span className="show-weather-item">Max temp {tempMax}</span>
          <span className="show-weather-item">Chance of rain {}</span>

          <span className="show-weather-item">Description {currentDescription}</span>
        </div>
      </div>
    </div>
  )
}
