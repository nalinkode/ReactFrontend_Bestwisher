import axios from "axios";
import { ENVIRONMENT_API_URL } from "../../constants/Environment";
import AuthorizationHeader from "../authentication/AuthorizationHeader";

const API_ENDPOINT = `${ENVIRONMENT_API_URL}/post`;

const getAllUserPost = async () => {
  return axios
    .get(API_ENDPOINT + "/fetch/all", { headers: AuthorizationHeader() })
    .then((response) => {
      return response.data.data;
    });
};

const getAllPostByUserId = async (userId) => {
  return axios
    .get(API_ENDPOINT + "/fetch/all/" + userId, {
      headers: AuthorizationHeader(),
    })
    .then((response) => {
      return response.data.data;
    });
};

const saveUserPost = (formData) => {
  return axios.post(API_ENDPOINT + "/create", formData, {
    headers: AuthorizationHeader(),
  });
};

export default {
  getAllUserPost,
  getAllPostByUserId,
  saveUserPost,
};
