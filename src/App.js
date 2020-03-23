import React from "react";
import { Redirect, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Auth from "./Auth/Auth";
import Callback from "./component/Callback";
import Budget from "./component/budget";
import { connect } from "react-redux";
import * as authAction from "./Redux/Actions/authAction";
import { PropTypes } from "prop-types";
function App(props) {
  //#region Dispatch createAuth to add auth into Store
  if (!props.auth) {
    let auth0 = new Auth(props.history);
    props.createAuth({
      login: () => {
        auth0.login();
      },
      logout: () => {
        auth0.logout();
      },
      isAuthenticated: auth0.isAuthenticated(),
      handleAuthentication: () => {
        auth0.handleAuthentication();
      },
      getProfile: cb => {
        auth0.getProfile(cb);
      }
    });
  }
  //#endregion

  return (
    <>
      <Nav />
      <div className="body">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Callback" render={props => <Callback {...props} />} />
        <Route path="/budget">
          {props.isAuthenticated ? <Budget /> : <Redirect to="/" />}
        </Route>
      </div>
    </>
  );
}
App.propTypes = {
  isAuthenticated: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  createAuth: PropTypes.func.isRequired
};
const mapStatetoProps = state => {
  return {
    isAuthenticated: state.authReducer.auth
      ? state.authReducer.auth.isAuthenticated
      : null
  };
};
const mapActionstoProps = {
  createAuth: authAction.createAuth
};
export default connect(mapStatetoProps, mapActionstoProps)(App);
