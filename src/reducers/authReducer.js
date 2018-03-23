import { AUTHENTICATING, AUTH_LOGIN  } from "../actions/authActions";

const initialState = {
  username: '',
  email: '',
  password: '',
  isLoading: false
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATING:
      return { ...state, isLoading: true };
    // Login
    case AUTH_LOGIN:
      return { ...state, isLoading: false, username: action.payload.username, email: action.payload.email, password: action.payload.password,  };
    // Default
    default:
      return state;
  }
}

export { authReducer }
