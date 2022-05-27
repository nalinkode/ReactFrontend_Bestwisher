import {
  SET_MESSAGE,
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
  SHOW_LOADER,
  HIDE_LOADER,
} from "../../constants/Type";
import UserProfilePostService from "../../services/user/UserProfileService";

export const GET_ALL_USER_PROFILE_ACTION = (userId) => (dispatch) => {
  dispatch({
    type: GET_ALL_USER_PROFILE_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return UserProfilePostService.getAllProfileUser(userId).then(
    (response) => {
      dispatch({
        type: GET_ALL_USER_PROFILE,
        payload: { profiles: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_ALL_USER_PROFILE_REQUEST_FAIL,
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

export const GET_PROFILE_BY_USERID_ACTION = (userId) => (dispatch) => {
  dispatch({
    type: GET_PROFILE_BY_USERID_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return UserProfilePostService.getProfileByUserId(userId).then(
    (response) => {
      dispatch({
        type: GET_PROFILE_BY_USERID,
        payload: { profile: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_PROFILE_BY_USERID_REQUEST_FAIL,
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

export const UPDATE_USER_PROFILE_ACTION = (profile) => (dispatch) => {
  dispatch({
    type: UPDATE_USER_PROFILE_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return UserProfilePostService.updateProfileImage(profile).then(
    (response) => {
      dispatch({
        type: SUCCESS_UPDATE_USER_PROFILE,
        payload: { profiles: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: FAIL_UPDATE_USER_PROFILE_REQUEST,
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

export const GET_ALL_USER_PROFILE_IMAGES_ACTION = (userId) => (dispatch) => {
  dispatch({
    type: GET_ALL_USER_PROFILE_IMAGES_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return UserProfilePostService.getAllProfileImages(userId).then(
    (response) => {
      dispatch({
        type: GET_ALL_PROFILE_IMAGES,
        payload: { imageList: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_ALL_USER_PROFILE_IMAGES_FAIL,
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

export const GET_ALL_USER_COVER_IMAGES_ACTION = (userId) => (dispatch) => {
  dispatch({
    type: GET_ALL_USER_COVER_IMAGES_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return UserProfilePostService.getAllCoverImages(userId).then(
    (response) => {
      dispatch({
        type: GET_ALL_COVER_IMAGES,
        payload: { coverImageList: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_ALL_USER_COVER_IMAGES_FAIL,
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

export const UPDATE_USER_PHOTOS_ACTION = (imageData) => (dispatch) => {
  dispatch({
    type: UPDATE_USER_PHOTO_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return UserProfilePostService.updateUserImage(imageData).then(
    (response) => {
      dispatch({
        type: UPDATE_USER_PHOTO_SUCCESS,
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: UPDATE_USER_PHOTO_FAIL,
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

export const DELETE_USER_PHOTO_ACTION =
  (type, profileId, photoId) => (dispatch) => {
    dispatch({
      type: DELETE_USER_PHOTO_REQUEST,
    });
    dispatch({
      type: SHOW_LOADER,
    });
    return UserProfilePostService.deleteUserProfileOrCoverPhoto(
      type,
      profileId,
      photoId
    ).then(
      (response) => {
        dispatch({
          type: DELETE_USER_PHOTO_SUCCESS,
        });
        dispatch({
          type: HIDE_LOADER,
        });
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: DELETE_USER_PHOTO_FAIL,
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
