import React, { Component } from "react";

import Dropdown from "./Dropdown";
import ShowWeather from "./ShowWeather";
import cityList from "../data/openWeather/cities";

const KEY = process.env.OPEN_WEATHER;
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: null,
      weatherData: null,
    };
  }

  setSelectedCity = (city) => {
    this.setState({ selectedCity: city });
  };

  getCityWeather = () => {
    const cityId = this.state.selectedCity.id;
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ weatherData: { res } }));
  };

  renderSubmitButton = () => {
    return this.state.selectedCity ? (
      <button onClick={(e) => this.getCityWeather()}>Submit</button>
    ) : (
      <div></div>
    );
  };

  render() {
    return (
      <div className="main">
        <div className="main__title">World Weather</div>
        <Dropdown
          className="main_dropdown"
          cities={cityList}
          selectedCity={this.state.selectedCity}
          setSelectedCity={this.setSelectedCity}
        />
        {this.renderSubmitButton()}
        {this.state.weatherData ? (
          <ShowWeather weatherData={this.state.weatherData} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Main;
