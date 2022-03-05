import React, { Component } from "react";

import Dropdown from "./Dropdown";
import cityList from "../data/openWeather/cities";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: null,
      weatherData: null,
    };
  }

  renderSubmitButton = () => {
    return this.state.selectedCity ? <div>Submit</div> : <div></div>;
    // return <div>Submit</div>;
  };

  setSelectedCity = (city) => {
    this.setState({ selectedCity: city });
  };

  render() {
    console.log("Main: ", this.state);
    return (
      <div className="">
        <Dropdown
          cities={cityList}
          selectedCity={this.state.selectedCity}
          setSelectedCity={this.setSelectedCity}
        />
        {this.renderSubmitButton()}
      </div>
    );
  }
}

export default Main;
