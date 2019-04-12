const calcState = {
  value: 0,
  btns: [
    "(",
    "CE",
    ")",
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    ".",
    "0",
    "=",
    "/"
  ]
};

const calculator = (state = calcState, action) => {
  switch (action.type) {
    case "ADD_ELEM":
      return {
        ...state,
        value: state.value == 0 ? action.text : state.value + action.text
      };
    case "CLEAR":
      return {
        ...state,
        value: 0
      };
    case "EQUAL":
      return {
        ...state,
        value: eval(action.value)
      };
    default:
      console.log(state);
      return state;
  }
};
export default calculator;
