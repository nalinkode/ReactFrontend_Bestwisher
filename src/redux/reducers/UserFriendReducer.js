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
} from "../../constants/Type";

const initialPostState = {
  requestedProfiles: [],
  pendingRequest: [],
  confirmedFriendship: {},
  friendship: {},
  friendList: [],
  error: {},
};

export default function (state = initialPostState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case ADD_FRIEND_REQUEST:
      return {
        ...state,
      };
    case ADD_FRIEND:
      return {
        ...state,
        friendship: payload.friendship,
      };
    case ADD_FRIEND_REQUEST_FAIL:
      return {
        ...state,
      };

    case GET_FRIEND_REQUEST_USERS_REQUEST:
      return {
        ...state,
      };
    case GET_FRIEND_REQUESTED_USERS:
      return {
        ...state,
        requestedProfiles: payload.requestedProfiles,
      };
    case GET_FRIEND_REQUEST_USERS_FAIL:
      return {
        ...state,
      };

    case GET_PENDING_FRIEND_REQUEST:
      return {
        ...state,
      };
    case GET_PENDING_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        pendingRequest: payload.pendingRequest,
      };
    case GET_PENDING_FRIEND_REQUEST_FAIL:
      return {
        ...state,
      };
    case CONFIRMED_FRIEND_REQUEST_USERS_REQUEST:
      return {
        ...state,
      };
    case CONFIRMED_FRIEND_REQUEST:
      return {
        ...state,
        confirmedFriendship: payload.confirmedFriendship,
      };
    case CONFIRMED_FRIEND_REQUEST_USERS_FAIL:
      return {
        ...state,
      };

    case DELETE_FRIEND_REQUEST_USERS_REQUEST:
      return {
        ...state,
      };
    case DELETE_FRIEND_REQUEST:
      return {
        ...state,
        confirmedFriendship: payload.confirmedFriendship,
      };
    case DELETE_FRIEND_REQUEST_USERS_FAIL:
      return {
        ...state,
      };

    case GET_ALL_USER_FRIENDS_REQUEST:
      return {
        ...state,
      };
    case GET_ALL_USER_FRIENDS_SUCCESS:
      return {
        ...state,
        friendList: payload.friendList,
      };
    case GET_ALL_USER_FRIENDS_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
