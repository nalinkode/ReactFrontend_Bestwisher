import authorizationHeader from "../authentication/AuthorizationHeader";
import { ENVIRONMENT_API_URL } from "../../constants/Environment";
import axios from "axios";

const API_ENDPOINT = `${ENVIRONMENT_API_URL}/academic/`;

const updateAcademic = (academic) => {
  return axios.put(API_ENDPOINT + "update", academic, {
    headers: authorizationHeader(),
  });
};

const addAcademic = (academic) => {
  return axios.post(API_ENDPOINT + "create", academic, {
    headers: authorizationHeader(),
  });
};

const deleteAcademic = (academicId) => {
  return axios.delete(API_ENDPOINT + "delete/" + academicId, {
    headers: authorizationHeader(),
  });
};

const getAcademic = (userId) => {
  return axios
    .get(API_ENDPOINT + "fetch/" + userId, {
      headers: authorizationHeader(),
    })
    .then((response) => {
      return response.data.data;
    });
};

export default {
  updateAcademic,
  addAcademic,
  deleteAcademic,
  getAcademic,
};
