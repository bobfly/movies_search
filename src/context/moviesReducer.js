import { SEARCH_MOVIES, SET_ERROR_MESSAGE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        errorMessage: null,
        loading: false
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false
      };
    default:
      return {
        ...state,
        loading: false
      };
  }
};
