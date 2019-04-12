import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions";
import "./App.css";
// import Result from "./Result";
// import KeyPad from "./KeyPad";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div className="calculator-body">
//           <h1>Simple Calculator</h1>
//           <Result result={this.state.result} />
//           <KeyPad onClick={this.onClick} />
//         </div>
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, btns, addElem, clear, equal } = this.props;
    return (
      <div className="App">
        <div>
          <input type="text" value={value} />
        </div>
        <div className="buttons-container">
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.value,
    btns: state.btns
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addElem: text => {
      dispatch(action.addElement(text));
    },
    clear: () => {
      dispatch(action.clear());
    },
    equal: value => {
      dispatch(action.equal(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

//export default App;
