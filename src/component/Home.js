import React from "react";
import { Link } from "react-router-dom";
import "../css/homepage.css";
import logo from "../img/logo.png";
import { connect } from "react-redux";

const Home = props => {
  //#region Authentication Method
  const { isAuthenticated, login, getProfile, setProfile } = props.auth;
  //after authentication, get the username to App
  if (isAuthenticated) {
    if (props.userName === "") {
      getProfile((profile, err) => {
        console.log("set profile from home");
        console.log(props);
        setProfile(profile);
      });
    }
  }
  //#endregion

  return (
    <div className="homecontainer" id="formContent">
      <div className="text-center header homeheader">
        <img src={logo} alt="LOGO" className="logo" />
        {!isAuthenticated ? (
          <h5>Login to use the Budget Calculator</h5>
        ) : (
          <h5>{`Welcome! ${props.userName}`}</h5>
        )}
      </div>
      {isAuthenticated ? (
        <div className="text-center gotobudget largebottom">
          <Link to="/budget">
            <button className="btn buttoncolor ">
              Start to Calculate Budget
            </button>
          </Link>
        </div>
      ) : (
        <div className="text-center gotobudget largebottom">
          <button className="btn buttoncolor" onClick={login}>
            Login >
          </button>
        </div>
      )}
    </div>
  );
};
const mapStatetoProps = (state, ownprops) => {
  return {
    auth: state.auth.auth,
    userName: state.auth.userName
  };
};
export default connect(mapStatetoProps)(Home);
