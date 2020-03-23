import * as ActionTypes from "../Actions/ActionTypes";
const authReducer = (
  state = { auth: null, userName: "", profile: null },
  action
) => {
  switch (action.type) {
    case ActionTypes.CREATE_AUTH: {
      const newstate = { ...state, auth: action.auth };
      return newstate;
    }
    case ActionTypes.CREATE_PROFILE: {
      let profile = action.profile;
      let username = "";
      if (profile.given_name) username = profile.given_name;
      else if (profile.nickname) username = profile.nickname;
      else if (profile.name) username = profile.name;
      return { ...state, profile: profile, userName: username };
    }
    default:
      return state;
  }
};
export default authReducer;
