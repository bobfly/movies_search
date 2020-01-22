import axios from "axios";
import { OMDB_KEY } from "../config/keys";

const MOVIE_URL = "https://www.omdbapi.com/";
const KEY = `apikey=${OMDB_KEY}`;

const fetchData = term => {
  const url = `${MOVIE_URL}?s=${term}&${KEY}`;

  return axios.get(url);
};

export { fetchData };
