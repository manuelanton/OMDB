import React from "react";
import SearchContainer from "../containers/SearchContainer";
import MoviesContainer from "../containers/MoviesContainer";
import { Route, Redirect, Switch } from "react-router-dom";
import MovieContainer from "../containers/MovieContainer";
import RouteHook from "react-route-hook";
import { fetchMovie } from "../store/actions";
import store from "../store/index";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import { fetchUser } from "../store/actions";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  onMovieEnter({ match }) {
    store.dispatch(fetchMovie(match.params.movieID));
  }
  componentDidMount() {
    store.dispatch(fetchUser());
  }

  render() {
    return (
      <div>
        <SearchContainer />
        <Switch>
          <RouteHook
            path="/movies/:movieID"
            component={MovieContainer}
            onEnter={this.onMovieEnter}
          />
          <Route exact path="/users/register" component={RegisterContainer} />
          <Route exact path="/users/login" component={LoginContainer} />
          <Route exact path="/" component={MoviesContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(App);
