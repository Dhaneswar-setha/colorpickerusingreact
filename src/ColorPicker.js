import React from "react";
var a = 10;

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
  }

  handleRed = (event) => {
    this.setState({
      red: event.target.value
    });
  };
  handleGreen = (event) => {
    this.setState({
      green: event.target.value
    });
  };
  handleBlue = (event) => {
    this.setState({
      blue: event.target.value
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundColor:
            "rgb(" +
            this.state.red +
            ", " +
            this.state.green +
            ", " +
            this.state.blue +
            ")",
          height: "100vh"
        }}
      >
        <div
          style={{
            backgroundColor: "lightpink",
            width: 200,
            padding: 20,
            borderRdaius: 10
          }}
        >
          <h1 style={{ padding: "10px", background: "yellow" }}>
            Color Picker
          </h1>
          red:
          <input
            type="range"
            value={this.state.red}
            onChange={this.handleRed}
          />{" "}
          <br />
          green:
          <input
            type="range"
            value={this.state.green}
            onChange={this.handleGreen}
          />
          <br />
          blue:
          <input
            type="range"
            value={this.state.blue}
            onChange={this.handleBlue}
          />{" "}
          <br />
          {this.state.red}
        </div>
      </div>
    );
  }
}
