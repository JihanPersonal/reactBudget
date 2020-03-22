import * as ActionTypes from "./ActionTypes";

export function createAuth(auth) {
  return { type: ActionTypes.CREATE_AUTH, auth };
}
export function createUserName(userName) {
  return { type: ActionTypes.CREATE_USERNAME, userName };
}
