import * as ActionTypes from "../Actions/ActionTypes";
const authReducer = (state = { auth: "", userName: "" }, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_AUTH: {
      return { ...state, auth: action.auth };
    }
    case ActionTypes.CREATE_USERNAME: {
      return { ...state, userName: action.userName };
    }
    default:
      return state;
  }
};
export default authReducer;
