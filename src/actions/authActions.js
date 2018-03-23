// Dictionary Reducer Actions
import AuthApi from "../services/authApi"

// action to control isLoading state (display loader)
export const AUTHENTICATING = "AUTHENTICATING";
export const AUTH_LOGIN = "AUTH_LOGIN";

// //////////////////// //
// ////// LOGIN  ////// //
// //////////////////// //

export function authLogin(email, password) {
  return function(dispatch) {
    dispatch({ type: AUTHENTICATING });
    AuthApi.authLogin(email, password)
    .then(res => {
      dispatch({ type: AUTH_LOGIN, payload: res.user });
    });
  };
}
