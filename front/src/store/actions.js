import axios from "axios";

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const EMPTY_MOVIES = "EMPTY_MOVIES";
export const RECEIVE_USER = "RECEIVE_USER";
export const EMPTY_USER = "EMPTY_USER";
export const RECEIVE_FAVS = "RECEIVE_FAVS";
export const DELETE_FAV = "DELETE_FAV";

const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});
const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveFavs = favs => ({
  type: RECEIVE_FAVS,
  favs
});

export const deleteFav = favID => ({
  type: DELETE_FAV,
  favID
});

export const emptyMovies = () => {
  return { type: EMPTY_MOVIES };
};

export const emptyUser = () => {
  return { type: EMPTY_USER };
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
export const fetchFavs = () => dispatch => {
  axios
    .get("/api/favs")
    .then(res => res.data)
    .then(favs => dispatch(receiveFavs(favs)));
};
export const sendFav = movie => dispatch => {
  axios
    .post("/api/favs", movie)
    .then(res => res.data)
    .then(favs => dispatch(receiveFavs(favs)));
};
export const destroyFav = movieID => dispatch => {
  axios.get(`/api/favs/delete/${movieID}`).then(favId => {
    console.log(favId);
    dispatch(deleteFav(favId.data.imdbID));
  });
};
