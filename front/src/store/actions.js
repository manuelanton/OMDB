import axios from "axios";

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const EMPTY_MOVIES = "EMPTY_MOVIES";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});
const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const emptyMovies = () => {
  return { type: EMPTY_MOVIES };
};

export const fetchMovies = name => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=${name}`)
    .then(res => res.data)
    .then(movies => dispatch(receiveMovies(movies)));
export const fetchMovie = id => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then(res => res.data)
    .then(movie => dispatch(receiveMovie(movie)));
export const fetchUser = () => dispatch => {
  axios
    .get("/api/me")
    .then(res => res.data)
    .then(user => dispatch(receiveUser(user)));
};
