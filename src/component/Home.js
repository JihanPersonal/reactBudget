import React from "react";
import { Link } from "react-router-dom";
const Home = props => {
  //#region Authentication Method
  const { isAuthenticated, login, getProfile } = props.auth;
  const authenticated = isAuthenticated();
  //after authentication, get the username to App
  if (authenticated) {
    if (props.username === "") {
      getProfile((profile, err) => {
        props.setProfile(profile);
      });
    }
  }
  //#endregion

  return (
    <div className="container">
      <div className="text-center header headerresult">
        {!authenticated ? (
          <h5>Please login first to use the Budget Calculator</h5>
        ) : (
          <h5>{`Welcome! ${props.username}`}</h5>
        )}
      </div>
      {authenticated ? (
        <div className="text-center output">
          <Link to="/budget">
            <button className="btn buttoncolor">
              Start to Calculate Budget
            </button>
          </Link>
        </div>
      ) : (
        <div className="text-center output">
          <button className="btn buttoncolor loginbutton" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
