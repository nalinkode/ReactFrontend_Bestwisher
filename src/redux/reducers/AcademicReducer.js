import {
  UPDATE_ACADEMIC_REQUEST,
  UPDATE_ACADEMIC_SUCCESS,
  UPDATE_ACADEMIC_FAIL,
  ADD_ACADEMIC_REQUEST,
  ADD_ACADEMIC_SUCCESS,
  ADD_ACADEMIC_FAIL,
  DELETE_ACADEMIC_REQUEST,
  DELETE_ACADEMIC_SUCCESS,
  DELETE_ACADEMIC_FAIL,
  GET_ACADEMIC_REQUEST,
  GET_ACADEMIC_SUCCESS,
  GET_ACADEMIC_FAIL,
} from "../../constants/Type";

const initialPostState = {
  error: {},
  academicList: [],
  id: "",
};

export default function (state = initialPostState, action) {
  const { type, payload, error } = action;
  switch (type) {
    case GET_ACADEMIC_REQUEST:
      return {
        ...state,
      };
    case GET_ACADEMIC_SUCCESS:
      return {
        ...state,
        academicList: payload.academicList,
      };
    case GET_ACADEMIC_FAIL:
      return {
        ...state,
        error: error,
      };
    case UPDATE_ACADEMIC_REQUEST:
      return {
        ...state,
      };
    case UPDATE_ACADEMIC_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_ACADEMIC_FAIL:
      return {
        ...state,
        error: error,
      };
    case ADD_ACADEMIC_REQUEST:
      return {
        ...state,
      };
    case ADD_ACADEMIC_SUCCESS:
      return {
        ...state,
      };
    case ADD_ACADEMIC_FAIL:
      return {
        ...state,
        error: error,
      };
    case DELETE_ACADEMIC_REQUEST:
      return {
        ...state,
      };
    case DELETE_ACADEMIC_SUCCESS:
      return {
        ...state,
        academicList: state.academicList.filter(
          (academic) => academic.id !== payload.id
        ),
      };

    case DELETE_ACADEMIC_FAIL:
      return {
        ...state,
        error: error,
      };
    default:
      return state;
  }
}
