import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCityForAPICall, fetchCurrentWeatherStartAsync } from './../redux/open-weather-api/actions'

class SearchPlace extends Component {
  constructor() {
    super()
    this.state = {
      cityName: '',
      countryName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleClick(e) {
    // e.preventDefault();
    console.log(this.state.cityName, this.state.countryName)
    let placeName = { name: this.state.cityName + ',' + this.state.countryName }
    console.log(placeName)
    // this.props.setPlace({
    //   placeName
    // })
    this.props.refresh(placeName);
    console.log('proslo')
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="cityName"
          placeholder="enter city name"
          onChange={this.handleChange}
          value={this.state.cityName}
        />
        <input
          type="text"
          name="countryName"
          placeholder="enter country name"
          onChange={this.handleChange}
          value={this.state.countryName}
        />
        <button
          type="submit"
          onClick={this.handleClick}
        >Enter</button>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  // setPlace: placeName => dispatch(setCityForAPICall(placeName)),
  refresh: placeName => dispatch(fetchCurrentWeatherStartAsync(placeName))
})

export default connect(null, mapDispatchToProps)(SearchPlace)
