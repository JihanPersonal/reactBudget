import React from "react";
import { Redirect, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Auth from "./Auth/Auth";
import Callback from "./component/Callback";
import Budget from "./component/budget";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authAction from "./Redux/Actions/authAction";
function App(props) {
  let auth0 = new Auth(props.history);

  //#region Dispatch createAuth to add auth into Store
  if (!props.auth) {
    props.actions.createAuth({
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
          {auth0.isAuthenticated() ? <Budget /> : <Redirect to="/" />}
        </Route>
        } />
      </div>
    </>
  );
}
const mapStatetoProps = state => {
  return {
    auth: state.auth.auth
  };
};
const mapActionstoProps = dispatch => {
  return {
    actions: bindActionCreators(authAction, dispatch)
  };
};
export default connect(mapStatetoProps, mapActionstoProps)(App);
