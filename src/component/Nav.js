import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import logo from "../img/logo.png";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
const Nav = props => {
  const { isAuthenticated, login, logout } = props.auth;
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
          {isAuthenticated ? (
            <button className="btn login" onClick={logout}>
              {"Log out >"}
            </button>
          ) : (
            <button className="btn login" onClick={login}>
              {"Log in >"}
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};
Nav.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStatetoProps = state => {
  return {
    auth: state.authReducer.auth
  };
};
export default connect(mapStatetoProps)(Nav);
