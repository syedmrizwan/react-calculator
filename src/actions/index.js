export const addElement = text => ({
  type: "ADD_ELEM",
  text
});

export const equal = value => ({
  type: "EQUAL",
  value
});

export const clear = () => ({
  type: "CLEAR"
});
