import { combineReducers } from "redux";
import AuthenticationReducer from "./AuthenticationReducer";
import MessageReducer from "./MessageReducer";
import PostReducer from "./PostReducer";
import FeelingReducer from "./FeelingReducer";
import CheckInReducer from "./CheckInReducer";
import UserProfileReducer from "./UserProfileReducer";
import UserFriendReducer from "./UserFriendReducer";
import LoaderReducer from "./LoaderReducer";
import WorkReducer from "./WorkReducer";
import AcademicReducer from "./AcademicReducer";

export default combineReducers({
  AuthenticationReducer,
  LoaderReducer,
  MessageReducer,
  PostReducer,
  FeelingReducer,
  CheckInReducer,
  UserProfileReducer,
  UserFriendReducer,
  WorkReducer,
  AcademicReducer,
});
