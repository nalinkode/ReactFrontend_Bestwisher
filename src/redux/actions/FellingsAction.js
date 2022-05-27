import { SET_FEELING, CLEAR_FEELING } from "../../constants/Type";

export const setFeeling = (feeling) => ({
  type: SET_FEELING,
  payload: feeling,
});

export const clearFeeling = () => ({
  type: CLEAR_FEELING,
});
