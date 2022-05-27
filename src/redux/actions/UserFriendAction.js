import {
  SET_MESSAGE,
  ADD_FRIEND_REQUEST,
  ADD_FRIEND,
  ADD_FRIEND_REQUEST_FAIL,
  GET_FRIEND_REQUEST_USERS_REQUEST,
  GET_FRIEND_REQUESTED_USERS,
  GET_FRIEND_REQUEST_USERS_FAIL,
  CONFIRMED_FRIEND_REQUEST_USERS_REQUEST,
  CONFIRMED_FRIEND_REQUEST,
  CONFIRMED_FRIEND_REQUEST_USERS_FAIL,
  DELETE_FRIEND_REQUEST_USERS_REQUEST,
  DELETE_FRIEND_REQUEST,
  DELETE_FRIEND_REQUEST_USERS_FAIL,
  GET_PENDING_FRIEND_REQUEST,
  GET_PENDING_FRIEND_REQUEST_SUCCESS,
  GET_PENDING_FRIEND_REQUEST_FAIL,
  GET_ALL_USER_FRIENDS_REQUEST,
  GET_ALL_USER_FRIENDS_SUCCESS,
  GET_ALL_USER_FRIENDS_FAIL,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../../constants/Type";

import FriendService from "../../services/friend/FriendService";

export const ADD_FRIEND_REQUEST_ACTION = (friendshipData) => (dispatch) => {
  dispatch({
    type: ADD_FRIEND_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return FriendService.addFriendRequest(friendshipData).then(
    (response) => {
      dispatch({
        type: ADD_FRIEND,
        payload: { friendship: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: ADD_FRIEND_REQUEST_FAIL,
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

export const GET_ALL_FRIEND_REQUEST_ACTION = (userId) => (dispatch) => {
  dispatch({
    type: GET_FRIEND_REQUEST_USERS_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return FriendService.getRequestUserByUserId(userId).then(
    (response) => {
      dispatch({
        type: GET_FRIEND_REQUESTED_USERS,
        payload: { requestedProfiles: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_FRIEND_REQUEST_USERS_FAIL,
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

export const GET_PENDING_FRIEND_REQUEST_ACTION = (userId) => (dispatch) => {
  dispatch({
    type: GET_PENDING_FRIEND_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return FriendService.getPendingFriendRequest(userId).then(
    (response) => {
      dispatch({
        type: GET_PENDING_FRIEND_REQUEST_SUCCESS,
        payload: { pendingRequest: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_PENDING_FRIEND_REQUEST_FAIL,
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

export const CONFIRMED_FRIEND_REQUEST_ACTION =
  (friendshipData) => (dispatch) => {
    dispatch({
      type: CONFIRMED_FRIEND_REQUEST_USERS_REQUEST,
    });
    dispatch({
      type: SHOW_LOADER,
    });
    return FriendService.confirmedFriendRequest(friendshipData).then(
      (response) => {
        dispatch({
          type: CONFIRMED_FRIEND_REQUEST,
          payload: { confirmedFriendship: response },
        });
        dispatch({
          type: HIDE_LOADER,
        });
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: CONFIRMED_FRIEND_REQUEST_USERS_FAIL,
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

export const GET_ALL_USER_FRIENDS_ACTION = (userId) => (dispatch) => {
  dispatch({
    type: GET_ALL_USER_FRIENDS_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return FriendService.getUserAllFriends(userId).then(
    (response) => {
      dispatch({
        type: GET_ALL_USER_FRIENDS_SUCCESS,
        payload: { friendList: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_ALL_USER_FRIENDS_FAIL,
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

export const DELETE_FRIEND_REQUEST_ACTION = (id) => (dispatch) => {
  dispatch({
    type: DELETE_FRIEND_REQUEST_USERS_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return FriendService.deleteFriendRequest(id).then(
    (response) => {
      dispatch({
        type: DELETE_FRIEND_REQUEST,
        payload: { confirmedFriendship: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: DELETE_FRIEND_REQUEST_USERS_FAIL,
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
