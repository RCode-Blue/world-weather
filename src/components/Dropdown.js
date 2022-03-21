import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  toggleMenuOpen = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  renderCities = () => {
    const { cities, setSelectedCity } = this.props;

    return cities.cities.map((city) => {
      return (
        <div
          className="item"
          key={city.id}
          onClick={() => setSelectedCity(city)}
        >
          <div className="world-dropdown__city">{city.name}</div>
        </div>
      );
    });
  };

  renderSelectedCity = () => {
    return this.props.selectedCity ? (
      <div className="world-dropdown__selected-city">
        {this.props.selectedCity.name}
      </div>
    ) : (
      <div></div>
    );
  };

  render() {
    // console.log("Dropdown: ", this.state);
    // console.log("Dropdown: ", this.props.selectedCity);

    return (
      <div className="world-dropdown">
        <label className="world-dropdown__label">Select a Country:</label>
        <div
          className={`ui selection dropdown ${
            this.state.menuOpen ? "visible active" : ""
          }`}
          onClick={() => {
            this.toggleMenuOpen();
          }}
        >
          <i className="dropdown icon"></i>
          {this.renderSelectedCity()}
          <div
            className={`menu ${
              this.state.menuOpen ? "visible transition" : ""
            } `}
          >
            {this.renderCities()}
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
