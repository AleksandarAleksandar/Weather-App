import actionTypes from './action-types-open-weather'

const INITIAL_STATE = {
  isFetching: false,
  currentWeather: {},
  weatherData: {},
  error: '',
  placeName: ''
};

const openWeatherApiReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case actionTypes.FETCH_CURRENT_WEATHER_START:
      return {
        ...state,
        isFetching: true
      };

    case actionTypes.FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        state,
        currentWeather: action.payload,
        isFetching: false
      };

    case actionTypes.FETCH_CURRENT_WEATHER_FAILURE:
      return {
        state,
        isFetching: false,
        error: action.payload
      };

    case actionTypes.SET_CITY_FOR_API_CALL:
      return {
        state,
        placeName: action.payload
      }


    default:
      return state
  };
};
export default openWeatherApiReducer;