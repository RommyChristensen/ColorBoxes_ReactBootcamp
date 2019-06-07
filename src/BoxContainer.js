import React, { Component } from "react";
import ReactDOM from "react-dom";
import Box from "./Box";

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 16,
    allColors: ["purple", "violet", "magenta", "pink"]
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => {
      return <Box colors={this.props.allColors} />;
    });
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
