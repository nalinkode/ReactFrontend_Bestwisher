import { SHOW_LOADER, HIDE_LOADER } from "../../constants/Type";

export const SHOW_LOADER_ACTION = () => (dispatch) => {
  dispatch({
    type: SHOW_LOADER,
  });
};

export const HIDE_LOADER_ACTION = () => (dispatch) => {
  dispatch({
    type: HIDE_LOADER,
  });
};
