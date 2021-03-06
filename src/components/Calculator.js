import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions";

class Calculator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value, btns, addElem, clear, equal } = this.props;
    return (
      <div>
        <div className="result">
          <p>{value}</p>
        </div>
        <div className="button">
          {btns.map((item, key) => {
            if (item == "C") {
              return (
                <button onClick={clear.bind(this)} key={key}>
                  {item}
                </button>
              );
            } else if (item == "CE") {
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
)(Calculator);
