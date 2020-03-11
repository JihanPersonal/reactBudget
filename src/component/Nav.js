import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
const Nav = props => {
  const { isAuthenticated, login, logout } = props.auth;
  const authenticated = isAuthenticated();
  const [profile, setProfile] = useState(null);
  const loadprofile = () => {
    props.auth.getProfile((profile, err) => {
      setProfile(profile);
    });
  };
  let username = profile ? profile.name : "";
  if (authenticated) {
    if (username === "") {
      loadprofile();
      if (profile) username = profile.name;
    }
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/budget">Budget</Link>
        </li>
        <li className="licenter">
          {authenticated ? <p>{`Welcome! ${username}`}</p> : null}
        </li>
        <li className="liright">
          {authenticated ? (
            <button className="btn login" onClick={logout}>
              Log out
            </button>
          ) : (
            <button className="btn login" onClick={login}>
              Log in
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
