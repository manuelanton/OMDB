import { combineReducers } from "redux";
import { RECEIVE_MOVIE, RECEIVE_MOVIES } from "./actions";

const initialState = {
  selectedMovie: {},
  movies: []
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MOVIE: {
      return { ...state, selectedMovie: action.movie };
    }
    case RECEIVE_MOVIES: {
      return { ...state, movies: action.movies };
    }
    default:
      return state;
  }
}
