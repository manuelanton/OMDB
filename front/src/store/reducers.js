import {
  RECEIVE_MOVIE,
  RECEIVE_MOVIES,
  EMPTY_MOVIES,
  RECEIVE_USER,
  EMPTY_USER
} from "./actions";

const initialState = {
  selectedMovie: {},
  movies: [],
  user: {}
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MOVIE: {
      return { ...state, selectedMovie: action.movie };
    }
    case RECEIVE_MOVIES: {
      return { ...state, movies: action.movies.Search };
    }
    case EMPTY_MOVIES: {
      return { ...state, movies: [] };
    }
    case RECEIVE_USER: {
      return { ...state, user: action.user };
    }
    case EMPTY_USER: {
      return { ...state, user: {} };
    }
    default:
      return state;
  }
}
