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
          {city.name}
        </div>
      );
    });
  };

  renderSelectedCity = () => {
    return this.props.selectedCity ? (
      <div>{this.props.selectedCity.name}</div>
    ) : (
      <div></div>
    );
  };

  render() {
    // console.log("Dropdown: ", this.state);
    // console.log("Dropdown: ", this.props.selectedCity);

    return (
      <div className="ui form">
        <div className="field">
          <label className="label">Select a Country:</label>
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
      </div>
    );
  }
}

export default Dropdown;
