import {
  RECEIVE_MOVIE,
  RECEIVE_MOVIES,
  EMPTY_MOVIES,
  RECEIVE_USER,
  EMPTY_USER,
  RECEIVE_FAVS,
  DELETE_FAV
} from "./actions";

const initialState = {
  selectedMovie: {},
  movies: [],
  favs: [],
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
      return { ...state, user: {}, favs: [] };
    }
    case RECEIVE_FAVS: {
      if (!Array.isArray(action.favs))
        return { ...state, favs: [...state.favs, action.favs] };
      return { ...state, favs: action.favs };
    }
    case DELETE_FAV: {
      let noFav = state.favs.filter(movie => movie.imdbID !== action.favID);
      return { ...state, favs: noFav };
    }
    default:
      return state;
  }
}
