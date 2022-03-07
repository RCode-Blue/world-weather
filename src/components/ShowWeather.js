import React, { Component } from "react";

class WeatherDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { weatherData: null };
  }

  renderWeather = () => {
    console.log(this.props.weatherData.res);

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
      <div>
        <div className="">{name}</div>
        <div className="">{description}</div>
        <div className="">temperature: {temp}</div>
        <div className="">
          {" "}
          <span> max: {temp_max}</span>
          <span>min: {temp_min}</span>
        </div>
        <div className="">feels like: {feels_like}</div>
        <div className="">humidity: {humidity}</div>
        <div className="">
          {" "}
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt=""
          />{" "}
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
    );
  };

  render() {
    // console.log(this.props);
    return <div className="">{this.renderWeather()}</div>;
  }
}

export default WeatherDetails;
