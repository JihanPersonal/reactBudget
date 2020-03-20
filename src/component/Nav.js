import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import logo from "../img/logo.png";
const Nav = props => {
  const { isAuthenticated, login, logout } = props.auth;
  const authenticated = isAuthenticated();
  return (
    <nav>
      <ul>
        <li className="liLogo">
          <img src={logo} alt="LOGO" className="navLogo" />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/budget">Budget</Link>
        </li>
        <li className="liright">
          {authenticated ? (
            <button className="btn login" onClick={logout}>
              Log out >
            </button>
          ) : (
            <button className="btn login" onClick={login}>
              Log in >
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
