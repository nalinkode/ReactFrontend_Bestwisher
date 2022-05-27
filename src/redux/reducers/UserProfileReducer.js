import {
  GET_ALL_USER_PROFILE_REQUEST,
  GET_ALL_USER_PROFILE,
  GET_ALL_USER_PROFILE_REQUEST_FAIL,
  GET_PROFILE_BY_USERID_REQUEST,
  GET_PROFILE_BY_USERID,
  GET_PROFILE_BY_USERID_REQUEST_FAIL,
  UPDATE_USER_PROFILE_REQUEST,
  SUCCESS_UPDATE_USER_PROFILE,
  FAIL_UPDATE_USER_PROFILE_REQUEST,
  GET_ALL_USER_PROFILE_IMAGES_REQUEST,
  GET_ALL_PROFILE_IMAGES,
  GET_ALL_USER_PROFILE_IMAGES_FAIL,
  GET_ALL_USER_COVER_IMAGES_REQUEST,
  GET_ALL_COVER_IMAGES,
  GET_ALL_USER_COVER_IMAGES_FAIL,
  UPDATE_USER_PHOTO_REQUEST,
  UPDATE_USER_PHOTO_SUCCESS,
  UPDATE_USER_PHOTO_FAIL,
  DELETE_USER_PHOTO_REQUEST,
  DELETE_USER_PHOTO_SUCCESS,
  DELETE_USER_PHOTO_FAIL,
} from "../../constants/Type";

const initialPostState = {
  profiles: [],
  profile: {},
  imageList: [],
  coverImageList: [],
  error: {},
};

export default function (state = initialPostState, action) {
  const { type, payload, error } = action;
  switch (type) {
    case GET_ALL_USER_PROFILE_REQUEST:
      return {
        ...state,
      };
    case GET_ALL_USER_PROFILE:
      return {
        ...state,
        profiles: payload.profiles,
      };
    case GET_ALL_USER_PROFILE_REQUEST_FAIL:
      return {
        ...state,
      };
    case GET_PROFILE_BY_USERID_REQUEST:
      return {
        ...state,
      };
    case GET_PROFILE_BY_USERID:
      return {
        ...state,
        profile: payload.profile,
      };
    case GET_PROFILE_BY_USERID_REQUEST_FAIL:
      return {
        ...state,
      };

    case UPDATE_USER_PROFILE_REQUEST:
      return {
        ...state,
      };
    case SUCCESS_UPDATE_USER_PROFILE:
      return {
        ...state,
        profile: payload.profile,
      };
    case FAIL_UPDATE_USER_PROFILE_REQUEST:
      return {
        ...state,
        error: error,
      };

    case GET_ALL_USER_PROFILE_IMAGES_REQUEST:
      return {
        ...state,
      };
    case GET_ALL_PROFILE_IMAGES:
      return {
        ...state,
        imageList: payload.imageList,
      };
    case GET_ALL_USER_PROFILE_IMAGES_FAIL:
      return {
        ...state,
      };

    case GET_ALL_USER_COVER_IMAGES_REQUEST:
      return {
        ...state,
      };
    case GET_ALL_COVER_IMAGES:
      return {
        ...state,
        coverImageList: payload.coverImageList,
      };
    case GET_ALL_USER_COVER_IMAGES_FAIL:
      return {
        ...state,
      };

    case UPDATE_USER_PHOTO_REQUEST:
      return {
        ...state,
      };
    case UPDATE_USER_PHOTO_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_USER_PHOTO_FAIL:
      return {
        ...state,
        error: error,
      };

    case DELETE_USER_PHOTO_REQUEST:
      return {
        ...state,
      };
    case DELETE_USER_PHOTO_SUCCESS:
      return {
        ...state,
      };
    case DELETE_USER_PHOTO_FAIL:
      return {
        ...state,
        error: error,
      };

    default:
      return state;
  }
}
