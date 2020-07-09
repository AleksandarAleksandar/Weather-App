import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCurrentWeatherStartAsync } from './../redux/open-weather-api/actions'
import ShowWeather from './ShowWeather'

class CurrentWeather extends Component {

  constructor() {
    super();
    this.state = {};
  }
  async componentDidMount() {
    // let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`);
    // let respo = await data.json();
    // console.log(respo)
    // console.log(this.props)
    this.props.dispatch(fetchCurrentWeatherStartAsync())

  }
  render() {
    console.log(this.props.currentWeather)
    let currentTemp = ''
    let currentDescription = '';
    if (this.props.currentWeather && this.props.currentWeather.main) {
      currentTemp = this.props.currentWeather.main
      // currentDescription = this.props.currentWeather
    }
    if (this.props.currentWeather && this.props.currentWeather.weather) {
      console.log(this.props.currentWeather.weather[0].description)
      currentDescription = this.props.currentWeather.weather[0].description
      // currentDescription = this.props.currentWeather
    }
    console.log(currentTemp)
    let currentTempreture = '';
    let feelsLike = '';
    let tempMin = '';
    let tempMax = '';
    for (let key in currentTemp) {
      if (key === 'temp') currentTempreture = currentTemp[key]
      if (key === 'feels_like') feelsLike = currentTemp[key]
      if (key === 'temp_min') tempMin = currentTemp[key]
      if (key === 'temp_max') tempMax = currentTemp[key]
    }
    let weatherCurrent = { currentTempreture, feelsLike, tempMin, tempMax, currentDescription }

    return (
      <div>
        <ShowWeather weatherCurrent={weatherCurrent} />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  currentWeather: state.openWeather.currentWeather
});

export default connect(mapStateToProps)(CurrentWeather)


