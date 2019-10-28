import axios from "axios";

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";

const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});
const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});
export const fetchMovies = name => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=${name}`)
    .then(res => res.data)
    .then(movies => dispatch(receiveMovies(movies)));
export const fetchMovie = name => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&t=${name}`)
    .then(res => res.data)
    .then(movie => dispatch(receiveMovie(movie)));
