import React, { Component } from "react";

import Dropdown from "./Dropdown";

import cityList from "../data/openWeather/cities";
const cities = cityList();

class Main extends Component {
  render() {
    return (
      <div className="">
        MAIN
        <Dropdown />
      </div>
    );
  }
}

export default Main;
