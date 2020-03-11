import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Auth from "./component/Auth/Auth";
import Callback from "./component/Callback";
import Budget from "./component/budget";

function App(props) {
  let auth0 = new Auth(props.history);

  const [profile, setProfile] = useState(null);

  let username = profile ? profile.given_name : "";
  console.log(profile);
  return (
    <>
      <Nav auth={auth0} username={username} />
      <div className="body">
        <Route
          path="/"
          exact
          render={props => (
            <Home
              auth={auth0} //Auth object
              setProfile={setProfile} //getprofile callback
              username={username}
              {...props}
            />
          )}
        />
        <Route
          path="/Callback"
          render={props => <Callback auth={auth0} {...props} />}
        />
        <Route
          path="/budget"
          render={props =>
            auth0.isAuthenticated() ? (
              <Budget auth={auth0} username={username} {...props} />
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
