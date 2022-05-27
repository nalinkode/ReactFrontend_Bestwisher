import axios from "axios";
import { ENVIRONMENT_API_URL } from "../../constants/Environment";

const API_ENDPOINT = `${ENVIRONMENT_API_URL}/user/auth/`;

const Login = (username, password) => {
  return axios
    .post(API_ENDPOINT + "login", { username, password })
    .then((response) => {
      if (response.data.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
      return response.data;
    });
};

const Register = (userFormValues) => {
  const postUserData = {
    firstName: userFormValues.firstName,
    lastName: userFormValues.surName,
    username: userFormValues.email,
    email: userFormValues.email,
    gender: userFormValues.gender,
    password: userFormValues.password,
    phoneNumber: "",
    dob:
      userFormValues.year +
      "-" +
      userFormValues.month +
      "-" +
      userFormValues.day,
    role: ["USER"],
  };
  return axios.post(API_ENDPOINT + "register", postUserData);
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  Login,
  Register,
  logout,
};
