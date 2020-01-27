import React, { useState } from "react";
import MovieModal from "./MovieModal";
import Spinner from "./shared/Spinner";

import "./MovieModal.scss";

import useModal from "../hooks/useModal";
import { getMovieById } from "../api/movies-api";

const DEFAULT_PLACEHOLDER_IMAGE = "https://picsum.photos/300/445";

const Movie = ({ movie }) => {
  const { isOpen, toggle } = useModal();
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  const handleMovieClick = movieId => {
    setLoading(true);
    getMovieById(movieId)
      .then(response => {
        setMovieDetails(response.data);
        toggle();
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className="movie" onClick={() => handleMovieClick(movie.imdbID)}>
        <h2>{movie.Title}</h2>
        <div style={{ position: "relative" }}>
          {loading ? <Spinner /> : null}
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
        </div>
        <p>({movie.Year})</p>
      </div>
      <MovieModal
        isOpen={isOpen}
        hide={toggle}
        movieDetails={movieDetails}
        poster={poster}
      />
    </>
  );
};

export default Movie;
