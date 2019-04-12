import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import calculator from "./reducers/calculator";

const store = createStore(calculator);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
