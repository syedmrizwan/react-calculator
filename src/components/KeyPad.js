import React, { Component } from "react";

class KeyPad extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="button">
        {btns.map((item, key) => {
          if (item == "C") {
            return (
              <button onClick={clear.bind(this)} key={key}>
                {item}
              </button>
            );
          } else if (item == "=") {
            return (
              <button onClick={equal.bind(this, value)} key={key}>
                {item}
              </button>
            );
          } else {
            return (
              <button onClick={addElem.bind(this, item)} key={key}>
                {item}
              </button>
            );
          }
        })}
      </div>
    );
  }
}

export default KeyPad;
