import {
  UPDATE_WORK_REQUEST,
  UPDATE_WORK_SUCCESS,
  UPDATE_WORK_FAIL,
  ADD_WORK_REQUEST,
  ADD_WORK_SUCCESS,
  ADD_WORK_FAIL,
  DELETE_WORK_REQUEST,
  DELETE_WORK_SUCCESS,
  DELETE_WORK_FAIL,
  GET_WORK_REQUEST,
  GET_WORK_SUCCESS,
  GET_WORK_FAIL,
} from "../../constants/Type";

const initialPostState = {
  error: {},
  workList: [],
  id: "",
};

export default function (state = initialPostState, action) {
  const { type, payload, error } = action;
  switch (type) {
    case GET_WORK_REQUEST:
      return {
        ...state,
      };
    case GET_WORK_SUCCESS:
      return {
        ...state,
        workList: payload.workList,
      };
    case GET_WORK_FAIL:
      return {
        ...state,
        error: error,
      };
    case UPDATE_WORK_REQUEST:
      return {
        ...state,
      };
    case UPDATE_WORK_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_WORK_FAIL:
      return {
        ...state,
        error: error,
      };
    case ADD_WORK_REQUEST:
      return {
        ...state,
      };
    case ADD_WORK_SUCCESS:
      return {
        ...state,
      };
    case ADD_WORK_FAIL:
      return {
        ...state,
        error: error,
      };
    case DELETE_WORK_REQUEST:
      return {
        ...state,
      };
    case DELETE_WORK_SUCCESS:
      return {
        ...state,
        workList: state.workList.filter((work) => work.id !== payload.id),
      };
    case DELETE_WORK_FAIL:
      return {
        ...state,
        error: error,
      };
    default:
      return state;
  }
}
