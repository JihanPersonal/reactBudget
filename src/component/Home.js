import React from "react";
import { Link } from "react-router-dom";
import "../css/homepage.css";
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
    <div className="homecontainer">
      <div className="text-center header headerresult">
        {!authenticated ? (
          <h5>Please login first to use the Budget Calculator</h5>
        ) : (
          <h5>{`Welcome! ${props.username}`}</h5>
        )}
      </div>
      {authenticated ? (
        <div className="text-center gotobudget">
          <Link to="/budget">
            <button className="btn buttoncolor">
              Start to Calculate Budget
            </button>
          </Link>
        </div>
      ) : (
        <div className="text-center gotobudget">
          <button className="btn buttoncolor loginbutton" onClick={login}>
            Login >
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
