import React from "react";
import ReactDOM from "react-dom";
import BoxContainer from "./BoxContainer";
import "./BoxContainer.css";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BoxContainer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
