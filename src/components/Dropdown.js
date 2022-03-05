import React, { Component } from "react";

import data from "../data/openWeather/cities.json";

class Dropdown extends Component {
  render() {
    // console.log(cities.length);
    return <div className="">{`Cities dropdown (${data.cities.length})`}</div>;
  }
}

export default Dropdown;
