import React, { useContext, useEffect } from "react";
import MoviesContext from "../context/MoviesContext";
import Movie from "./Movie";

const MoviesList = () => {
  const { movies, errorMessage, loading, loadMovies } = useContext(
    MoviesContext
  );

  useEffect(() => {
    loadMovies("hobbit");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="movies">
      {loading && !errorMessage ? (
        <span>loading...</span>
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        movies.map((movie, index) => (
          <Movie key={`${index}-${movie.Title}`} movie={movie} />
        ))
      )}
    </div>
  );
};

export default MoviesList;
