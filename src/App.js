import React from "react";
import { Redirect, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Auth from "./component/Auth/Auth";
import Callback from "./component/Callback";
import Budget from "./component/budget";

function App(props) {
  let auth0 = new Auth(props.history);
  return (
    <>
      <Nav auth={auth0} />
      <div className="body">
        <Route
          path="/"
          exact
          render={props => <Home auth={auth0} {...props} />}
        />
        <Route
          path="/Callback"
          render={props => <Callback auth={auth0} {...props} />}
        />
        <Route
          path="/budget"
          render={props =>
            auth0.isAuthenticated() ? (
              <Budget auth={auth0} {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </div>
    </>
  );
}

export default App;
