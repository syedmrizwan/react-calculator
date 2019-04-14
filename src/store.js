import { createStore } from "redux";
import calculator from "./reducers/calculator";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(calculator, composeWithDevTools());
