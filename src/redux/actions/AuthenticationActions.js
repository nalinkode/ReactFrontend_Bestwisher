import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_MESSAGE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../../constants/Type";
import UserAuthenticationService from "../../services/authentication/UserAuthenticationService";

export const LoginAction = (username, password) => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });

  return UserAuthenticationService.Login(username, password).then(
    (response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response.data },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: LOGIN_FAIL,
        error: error,
      });

      dispatch({
        type: HIDE_LOADER,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: error.message,
      });
      return Promise.reject();
    }
  );
};

export const RegisterAction = (UserObj) => (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  });

  dispatch({
    type: SHOW_LOADER,
  });

  return UserAuthenticationService.Register(UserObj).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      dispatch({
        type: HIDE_LOADER,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.message,
      });

      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: HIDE_LOADER,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: error,
      });
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  UserAuthenticationService.logout();
  dispatch({
    type: SHOW_LOADER,
  });
  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: HIDE_LOADER,
  });
};
