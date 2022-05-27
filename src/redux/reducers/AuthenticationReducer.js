import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
} from "../../constants/Type";

const currentUser = JSON.parse(localStorage.getItem("user"));

const initialState = currentUser
  ? { currentUser, isLoggedIn: true, error: "" }
  : { currentUser: null, isLoggedIn: false, error: "" };

export default function (state = initialState, action) {
  const { type, payload, error } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: payload.user,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
        error: error.response.data.message,
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };

    default:
      return state;
  }
}
