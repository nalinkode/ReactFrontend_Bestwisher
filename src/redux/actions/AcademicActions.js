import {
  SET_MESSAGE,
  SHOW_LOADER,
  HIDE_LOADER,
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
import AcademicService from "../../services/academic/AcademicService";

export const GET_ACADEMIC_ACTION = (userId) => (dispatch) => {
  dispatch({
    type: GET_ACADEMIC_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return AcademicService.getAcademic(userId).then(
    (response) => {
      dispatch({
        type: GET_ACADEMIC_SUCCESS,
        payload: { academicList: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_ACADEMIC_FAIL,
        error: error,
      });
      dispatch({
        type: HIDE_LOADER,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: error.message,
      });
      return Promise.reject();
    }
  );
};

export const ADD_ACADEMIC_ACTION = (academicData) => (dispatch) => {
  dispatch({
    type: ADD_ACADEMIC_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return AcademicService.addAcademic(academicData).then(
    (response) => {
      dispatch({
        type: ADD_ACADEMIC_SUCCESS,
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: ADD_ACADEMIC_FAIL,
        error: error,
      });
      dispatch({
        type: HIDE_LOADER,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: error.message,
      });
      return Promise.reject();
    }
  );
};

export const UPDATE_ACADEMIC_ACTION = (academicData) => (dispatch) => {
  dispatch({
    type: UPDATE_ACADEMIC_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return AcademicService.updateAcademic(academicData).then(
    (response) => {
      dispatch({
        type: UPDATE_ACADEMIC_SUCCESS,
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: UPDATE_ACADEMIC_FAIL,
        error: error,
      });
      dispatch({
        type: HIDE_LOADER,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: error.message,
      });
      return Promise.reject();
    }
  );
};

export const DELETE_ACADEMIC_ACTION = (academicId) => (dispatch) => {
  dispatch({
    type: DELETE_ACADEMIC_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return AcademicService.deleteAcademic(academicId).then(
    (response) => {
      dispatch({
        type: DELETE_ACADEMIC_SUCCESS,
        payload: { id: academicId },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: DELETE_ACADEMIC_FAIL,
        error: error,
      });
      dispatch({
        type: HIDE_LOADER,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: error.message,
      });
      return Promise.reject();
    }
  );
};
