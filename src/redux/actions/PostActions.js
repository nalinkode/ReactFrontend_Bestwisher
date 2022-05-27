import {
  GET_ALL_USER_POST,
  GET_ALL_USER_POST_REQUEST,
  GET_ALL_USER_POST_REQUEST_FAIL,
  SET_MESSAGE,
  SHARE_USER_POST_REQUEST,
  SHARE_USER_POST_FAILED,
  SHARE_USER_POST_SUCCESS,
  GET_POST_BY_USERID_REQUEST,
  GET_POST_BY_USERID,
  GET_POST_BY_USERID_REQUEST_FAIL,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../../constants/Type";
import UserPostService from "../../services/posts/PostService";

export const GET_ALL_USER_POST_ACTION = () => (dispatch) => {
  dispatch({
    type: GET_ALL_USER_POST_REQUEST,
  });

  dispatch({
    type: SHOW_LOADER,
  });

  return UserPostService.getAllUserPost().then(
    (response) => {
      dispatch({
        type: GET_ALL_USER_POST,
        payload: { allPosts: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_ALL_USER_POST_REQUEST_FAIL,
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

export const GET_POST_BY_USERID_ACTION = (userId) => (dispatch) => {
  dispatch({
    type: GET_POST_BY_USERID_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return UserPostService.getAllPostByUserId(userId).then(
    (response) => {
      dispatch({
        type: GET_POST_BY_USERID,
        payload: { userIdPosts: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_POST_BY_USERID_REQUEST_FAIL,
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

// Save user post to db
export const SHARE_USER_POST_ACTION = (formValues) => (dispatch) => {
  dispatch({
    type: SHARE_USER_POST_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });

  return UserPostService.saveUserPost(formValues).then(
    (response) => {
      dispatch({
        type: SHARE_USER_POST_SUCCESS,
        payload: { posts: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: SHARE_USER_POST_FAILED,
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
