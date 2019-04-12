import React, { Component } from "react";
import "./App.css";
import Calculator from "./Calculator";

class App extends Component {
  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
