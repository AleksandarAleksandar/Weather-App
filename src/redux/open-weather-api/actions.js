import actionTypes from './action-types-open-weather';
import axios from 'axios'


const apiKey = "7327da26266f1afbe2b13cdd523b6a5f";

export const fetchCurrentWeatherStart = () => ({
  type: actionTypes.FETCH_CURRENT_WEATHER_START
});

export const fetchCurrentWeatherSuccess = currentWeatherData => ({
  type: actionTypes.FETCH_CURRENT_WEATHER_SUCCESS,
  payload: currentWeatherData
})

export const fetchCurrentWeatherFailure = error => ({
  type: actionTypes.FETCH_CURRENT_WEATHER_FAILURE,
  payload: error
})
export const setCityForAPICall = placeName => ({
  type: actionTypes.SET_CITY_FOR_API_CALL,
  payload: placeName
})


export const fetchCurrentWeatherStartAsync = (placeName) => {
  return async dispatch => {
    dispatch(fetchCurrentWeatherStart());
    dispatch(setCityForAPICall(placeName))
    let placeData = 'Monheim am Rhein,Germany'
    for (let key in placeName) {
      if (placeName[key] !== '') placeData = placeName[key]
    }
    console.log(placeData)
    let respo = await axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=Nis,rs&appid=${apiKey}`)
    // let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=Nis,rs&appid=${apiKey}`);
    // let respo = await data.json();
    console.log(respo.data)
    dispatch(fetchCurrentWeatherSuccess(respo.data))
  }
}

