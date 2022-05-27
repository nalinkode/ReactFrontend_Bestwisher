import authorizationHeader from "../authentication/AuthorizationHeader";
import { ENVIRONMENT_API_URL } from "../../constants/Environment";
import axios from "axios";

const API_ENDPOINT = `${ENVIRONMENT_API_URL}/work/`;

const updateWork = (work) => {
  return axios.put(API_ENDPOINT + "update", work, {
    headers: authorizationHeader(),
  });
};

const addWork = (work) => {
  return axios.post(API_ENDPOINT + "create", work, {
    headers: authorizationHeader(),
  });
};

const deleteWork = (workId) => {
  return axios.delete(API_ENDPOINT + "delete/" + workId, {
    headers: authorizationHeader(),
  });
};

const getWork = (userId) => {
  return axios
    .get(API_ENDPOINT + "fetch/" + userId, {
      headers: authorizationHeader(),
    })
    .then((response) => {
      return response.data.data;
    });
};

export default {
  updateWork,
  addWork,
  deleteWork,
  getWork,
};
