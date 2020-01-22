import React, { useState, useContext } from "react";
import MoviesContext from "../context/MoviesContext";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const moviesContext = useContext(MoviesContext);

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    moviesContext.loadMovies(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
