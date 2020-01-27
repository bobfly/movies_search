import React, { useState, useContext, useEffect } from "react";
import MoviesContext from "../context/MoviesContext";
import Movie from "./Movie";
import MovieModal from "./MovieModal";
import Spinner from "./shared/Spinner";
import { DEFAULT_SEARCH_VALUE } from "../config/keys";

const MoviesList = () => {
  const { movies, errorMessage, loading, loadMovies } = useContext(
    MoviesContext
  );

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    loadMovies(DEFAULT_SEARCH_VALUE);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="movies">
      {loading && !errorMessage ? (
        <Spinner />
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        movies.map((movie, index) => (
          <Movie
            key={`${index}-${movie.Title}`}
            movie={movie}
            handleClick={openModal}
          />
        ))
      )}
      <MovieModal
        modalOpen={modalOpen}
        handleOpen={openModal}
        handleClose={closeModal}
      />
    </div>
  );
};

export default MoviesList;
