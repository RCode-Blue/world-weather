import React, { Component } from "react";

class WeatherDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { weatherData: null };
  }

  renderWeather = () => {
    if (!this.props.weatherData) {
      return <div></div>;
    }
    const {
      name,
      main: weatherMain,
      weather,
      wind,
    } = this.props.weatherData.res;
    const { temp, temp_max, temp_min, feels_like, humidity } = weatherMain;
    const { description, main, icon } = weather[0];
    return (
      <div className="weather-data">
        <div className="weather-data__city">{name}</div>
        <div className="weather-data__wrapper">
          <div className="weather-data__main">
            <img
              className="main-icon"
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt=""
            />

            <div className="main-temperature">
              <div className="main-temperature__current">{temp} &#176;C</div>
              <div className="main-temperature__feels">
                feels like: {feels_like}
              </div>
            </div>
          </div>

          <div className="weather-data__description">{description}</div>

          <div className="weather-data__minmax">
            <span> max: {temp_max} &#176;C</span>
            <span>min: {temp_min} &#176;C</span>
          </div>

          <div className="weather-data__humidity">humidity: {humidity}</div>

          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    );
  };

  render() {
    // console.log(this.props);
    return <div className="">{this.renderWeather()}</div>;
  }
}

export default WeatherDetails;
