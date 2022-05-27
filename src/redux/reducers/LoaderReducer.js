import { SHOW_LOADER, HIDE_LOADER } from "../../constants/Type";

const initialPostState = {
  isLoading: false,
};

export default function (state = initialPostState, action) {
  const { type } = action;

  switch (type) {
    case SHOW_LOADER:
      return {
        isLoading: true,
      };
    case HIDE_LOADER:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
}
