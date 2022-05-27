import authorizationHeader from "../authentication/AuthorizationHeader";
import { ENVIRONMENT_API_URL } from "../../constants/Environment";
import axios from "axios";

const API_ENDPOINT = `${ENVIRONMENT_API_URL}/profile/`;

const PHOTOS_API_ENDPOINT = `${ENVIRONMENT_API_URL}/photo/`;

const getAllProfileUser = (userId) => {
  return axios
    .get(API_ENDPOINT + "fetch/all/" + userId, {
      headers: authorizationHeader(),
    })
    .then((response) => {
      return response.data.data;
    });
};

const getProfileByUserId = (userId) => {
  return axios
    .get(API_ENDPOINT + "fetch/user/" + userId, {
      headers: authorizationHeader(),
    })
    .then((response) => {
      return response.data.data;
    });
};

/// updates new image
const updateProfileImage = (profile) => {
  return axios.put(API_ENDPOINT + "update/image", profile, {
    headers: authorizationHeader(),
  });
};

/// updates existing image
const updateUserImage = (imageData) => {
  return axios.put(PHOTOS_API_ENDPOINT + "update", imageData, {
    headers: authorizationHeader(),
  });
};

const getAllProfileImages = (userId) => {
  return axios
    .get(PHOTOS_API_ENDPOINT + "profile/fetch/" + userId, {
      headers: authorizationHeader(),
    })
    .then((response) => {
      return response.data.data;
    });
};

const getAllCoverImages = (userId) => {
  return axios
    .get(PHOTOS_API_ENDPOINT + "cover/fetch/" + userId, {
      headers: authorizationHeader(),
    })
    .then((response) => {
      return response.data.data;
    });
};

const deleteUserProfileOrCoverPhoto = (type, profileId, photoId) => {
  return axios.delete(
    `${
      PHOTOS_API_ENDPOINT +
      "delete/" +
      type +
      "/" +
      profileId +
      "/photoId/" +
      photoId
    }`,
    {
      headers: authorizationHeader(),
    }
  );
};

export default {
  getAllProfileUser,
  getProfileByUserId,
  updateProfileImage,
  getAllProfileImages,
  getAllCoverImages,
  updateUserImage,
  deleteUserProfileOrCoverPhoto,
};
