import axios from "axios";

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_SHOWS = "RECEIVE_SHOWS";

const receiveMovies = movies => {
  return { type: RECEIVE_MOVIES, movies };
};

const receiveMovie = movie => {
  return { type: RECEIVE_MOVIE, movie };
};

const receiveShows = shows => {
  return { type: RECEIVE_SHOWS, shows };
};
