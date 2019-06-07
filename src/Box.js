import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: this.randomColor()
    };

    this.changeColor = this.changeColor.bind(this);
    this.randomColor = this.randomColor.bind(this);
  }

  changeColor() {
    let newColor;
    do {
      newColor = this.randomColor();
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  }

  randomColor() {
    let randIdx = Math.floor(Math.random() * this.props.colors.length);
    return this.props.colors[randIdx];
  }

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.changeColor}
      />
    );
  }
}

export default Box;
