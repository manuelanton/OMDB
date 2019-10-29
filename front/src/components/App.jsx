import React from "react";
import SearchContainer from "../containers/SearchContainer";
import MoviesContainer from "../containers/MoviesContainer";
import { Route, Redirect, Switch } from "react-router-dom";
import MovieContainer from "../containers/MovieContainer";
import RouteHook from "react-route-hook";
import { fetchMovie } from "../store/actions";
import store from "../store/index";
import RegisterContainer from "../containers/RegisterContainer";

const onMovieEnter = ({ match }) =>
  store.dispatch(fetchMovie(match.params.movieID));

export default () => (
  <div>
    <SearchContainer />
    <Switch>
      <RouteHook
        path="/movies/:movieID"
        component={MovieContainer}
        onEnter={onMovieEnter}
      />
      <Route path="/users/register" component={RegisterContainer} />
      <Route exact path="/" component={MoviesContainer} />
    </Switch>
  </div>
);
