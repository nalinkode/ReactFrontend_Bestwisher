import axios from "axios";
import { ENVIRONMENT_API_URL } from "../../constants/Environment";
import AuthorizationHeader from "../authentication/AuthorizationHeader";

const API_ENDPOINT = `${ENVIRONMENT_API_URL}/friendship`;

const addFriendRequest = async (friendshipData) => {
  return axios
    .post(API_ENDPOINT + "/add", friendshipData, {
      headers: AuthorizationHeader(),
    })
    .then((response) => {
      return response.data.data;
    });
};

const getRequestUserByUserId = async (userId) => {
  return axios
    .get(API_ENDPOINT + "/fetch/" + userId, { headers: AuthorizationHeader() })
    .then((response) => {
      return response.data.data;
    });
};

const getPendingFriendRequest = async (userId) => {
  return axios
    .get(API_ENDPOINT + "/fetch/pending/" + userId, {
      headers: AuthorizationHeader(),
    })
    .then((response) => {
      return response.data.data;
    });
};

const confirmedFriendRequest = async (friendshipData) => {
  return axios
    .put(API_ENDPOINT + "/confirmed/", friendshipData, {
      headers: AuthorizationHeader(),
    })
    .then((response) => {
      return response.data.data;
    });
};

const deleteFriendRequest = async (friendshipId) => {
  return axios
    .delete(API_ENDPOINT + "/delete/" + friendshipId, {
      headers: AuthorizationHeader(),
    })
    .then((response) => {
      return response.data.data;
    });
};

const getUserAllFriends = async (userId) => {
  return axios
    .get(API_ENDPOINT + "/fetch/friends/" + userId, {
      headers: AuthorizationHeader(),
    })
    .then((response) => {
      return response.data.data;
    });
};

export default {
  addFriendRequest,
  getRequestUserByUserId,
  confirmedFriendRequest,
  deleteFriendRequest,
  getPendingFriendRequest,
  getUserAllFriends,
};
