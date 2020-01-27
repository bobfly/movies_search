import React from "react";
import { createPortal } from "react-dom";

const MovieModal = ({ isOpen, hide, movieDetails, poster }) =>
  isOpen
    ? createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="movie_card">
              <div className="info_section">
                <div className="movie_header">
                  <img
                    className="locandina"
                    src={poster}
                    alt={movieDetails.Title}
                  />
                  <h1>{movieDetails.Title}</h1>
                  <h4>
                    {movieDetails.Year}, {movieDetails.Director}
                  </h4>
                  <span className="minutes">{movieDetails.Runtime}</span>
                  <p className="type">{movieDetails.Genre}</p>
                </div>
                <div className="movie_desc">
                  <p className="text">{movieDetails.Plot}</p>
                </div>
                <div className="movie_actions">
                  <button type="button" className="button" onClick={hide}>
                    Close
                  </button>
                </div>
              </div>
              <div
                className="blur_back"
                style={{
                  background: `url(${poster})`
                }}
              ></div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default MovieModal;
