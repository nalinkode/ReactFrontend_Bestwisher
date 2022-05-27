import {
  SET_MESSAGE,
  SHOW_LOADER,
  HIDE_LOADER,
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
import WorkService from "../../services/work/WorkService";

export const GET_WORK_ACTION = (userId) => (dispatch) => {
  dispatch({
    type: GET_WORK_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return WorkService.getWork(userId).then(
    (response) => {
      dispatch({
        type: GET_WORK_SUCCESS,
        payload: { workList: response },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_WORK_FAIL,
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

export const ADD_WORK_ACTION = (workData) => (dispatch) => {
  dispatch({
    type: ADD_WORK_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return WorkService.addWork(workData).then(
    (response) => {
      dispatch({
        type: ADD_WORK_SUCCESS,
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: ADD_WORK_FAIL,
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

export const UPDATE_WORK_ACTION = (workData) => (dispatch) => {
  dispatch({
    type: UPDATE_WORK_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return WorkService.updateWork(workData).then(
    (response) => {
      dispatch({
        type: UPDATE_WORK_SUCCESS,
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: UPDATE_WORK_FAIL,
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

export const DELETE_WORK_ACTION = (workId) => (dispatch) => {
  dispatch({
    type: DELETE_WORK_REQUEST,
  });
  dispatch({
    type: SHOW_LOADER,
  });
  return WorkService.deleteWork(workId).then(
    (response) => {
      dispatch({
        type: DELETE_WORK_SUCCESS,
        payload: { id: workId },
      });
      dispatch({
        type: HIDE_LOADER,
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: DELETE_WORK_FAIL,
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
