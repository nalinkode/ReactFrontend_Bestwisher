import { SET_FEELING, CLEAR_FEELING } from "../../constants/Type";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_FEELING:
      return { feeling: payload };
    case CLEAR_FEELING:
      return { feeling: "" };
    default:
      return state;
  }
}
