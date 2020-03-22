import React, { useState, useEffect } from "react";
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
  const [profile, setProfile] = useState(null);
  let username = "";
  const setusername = () => {
    if (profile) {
      if (profile.given_name) username = profile.given_name;
      else if (profile.nickname) username = profile.nickname;
      else if (profile.name) username = profile.name;
      props.dispatch(authAction.createUserName(username));
    }
  };
  if (!props.userName || props.userName === "") {
    setusername();
    //props.dispatch(authAction.createUserName("Jihan"));
  }
  if (!props.auth) {
    props.dispatch(
      authAction.createAuth({
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
        },
        setProfile: profile => {
          setProfile(profile);
        }
      })
    );
  }
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
const mapStatetoProps = (state, ownprops) => {
  return {
    auth: state.auth.auth,
    userName: state.auth.userName
  };
};
const mapActionstoProps = dispatch => {
  return {
    actions: bindActionCreators(authAction, dispatch)
  };
};
export default connect(mapStatetoProps)(App);
