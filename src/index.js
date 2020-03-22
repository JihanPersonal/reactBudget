import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./Redux/configureStore";

const store = configureStore();
ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
