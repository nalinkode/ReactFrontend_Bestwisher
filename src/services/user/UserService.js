import authorizationHeader from "../authentication/AuthorizationHeader";
import { ENVIRONMENT_API_URL } from "../../constants/Environment";
import axios from "axios";

const API_ENDPOINT = `${ENVIRONMENT_API_URL}/api/user/`;

const getAllUser = () => {
  return axios.get(API_ENDPOINT + "fetchAll", {
    headers: authorizationHeader(),
  });
};

export default {
  getAllUser,
};
