import React from "react";
import "./App.css";
import MoviesState from "./context/MoviesState";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import Search from "./components/Search";

function App() {
  return (
    <MoviesState>
      <div className="App">
        <Header text="Movies Search" />
        <Search />
        <p className="App intro">Favorite movies</p>
        <MoviesList />
      </div>
    </MoviesState>
  );
}

export default App;
