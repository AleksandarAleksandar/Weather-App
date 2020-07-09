import { combineReducers } from 'redux'

import openWeatherReducer from './open-weather-api/reducer-open-weather'


const rootReducer = combineReducers({
  openWeather: openWeatherReducer
})

export default rootReducer