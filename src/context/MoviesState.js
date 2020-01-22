import React, { useReducer } from "react";
import MoviesContext from "./MoviesContext";
import moviesReducer from "./moviesReducer";
import { SEARCH_MOVIES, SET_ERROR_MESSAGE } from "./types";
import { fetchData } from "../api/movies-api";

const MoviesState = props => {
  const initialState = {
    loading: true,
    movies: [],
    errorMessage: null,
    searchMovies: () => {}
  };

  const [state, dispatch] = useReducer(moviesReducer, initialState);

  function loadMovies(term) {
    let data;
    fetchData(term)
      .then(response => {
        data = response.data;
        if (data.Response === "True") {
          dispatch({
            type: SEARCH_MOVIES,
            payload: data.Search
          });
        } else if (data.Response === "False") {
          dispatch({
            type: SET_ERROR_MESSAGE,
            payload: data.Error
          });
        }
      })
      .catch(error => {
        data = error.response.data;
        dispatch({
          type: SET_ERROR_MESSAGE,
          payload: data.Error
        });
      });
  }

  return (
    <MoviesContext.Provider
      value={{
        loading: state.loading,
        movies: state.movies,
        errorMessage: state.errorMessage,
        loadMovies
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
