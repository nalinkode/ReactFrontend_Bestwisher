import { SET_LOCATION, CLEAR_LOCATION } from "../../constants/Type";

export const setFeeling = (feeling) => ({
  type: SET_LOCATION,
  payload: feeling,
});

export const clearFeeling = () => ({
  type: CLEAR_LOCATION,
});
