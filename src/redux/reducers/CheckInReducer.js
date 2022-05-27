import { SET_LOCATION, CLEAR_LOCATION } from "../../constants/Type";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOCATION:
      return { place: payload };
    case CLEAR_LOCATION:
      return { place: "" };
    default:
      return state;
  }
}
