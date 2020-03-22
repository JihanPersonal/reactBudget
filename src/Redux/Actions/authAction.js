import * as ActionTypes from "./ActionTypes";

export function createAuth(auth) {
  return { type: ActionTypes.CREATE_AUTH, auth };
}
export function createProfile(profile) {
  return { type: ActionTypes.CREATE_PROFILE, profile };
}
