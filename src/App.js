import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";

import { fetchData } from "./api/movies-api";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const loadMovies = (term = "") => {
    let data;
    fetchData(term)
      .then(response => {
        data = response.data;
        if (data.Response === "True") {
          setMovies(data.Search);
        }
      })
      .catch(error => {
        data = error.response.data;
        setErrorMessage(data.Error);
      });

    setLoading(false);
  };

  useEffect(() => {
    loadMovies("hobbit");
  }, []);

  const search = searchValue => {
    loadMovies(searchValue);
  };

  return (
    <div className="App">
      <Header text="Movies Search" />
      <Search search={search} />
      <p className="App intro">Favorite movies</p>
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
    </div>
  );
}

export default App;
