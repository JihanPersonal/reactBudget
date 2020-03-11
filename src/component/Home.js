import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = props => {
  const [profile, setProfile] = useState(null);
  const { isAuthenticated, login } = props.auth;

  const loadprofile = () => {
    props.auth.getProfile((profile, err) => {
      setProfile(profile);
    });
  };
  let username = profile ? profile.name : "";
  if (isAuthenticated()) {
    if (username === "") {
      loadprofile();
      if (profile) username = profile.name;
    }
  }

  return (
    <div className="container">
      <div className="text-center header headerresult">
        {!isAuthenticated() ? (
          <h5>Please login to use the Budget Calculator</h5>
        ) : (
          <h5>{`Welcome! ${username}`}</h5>
        )}
      </div>
      {isAuthenticated() ? (
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
