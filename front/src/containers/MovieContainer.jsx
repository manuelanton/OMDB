import React from "react";
import { connect } from "react-redux";
import Movie from "../components/Movie";
import { sendFav } from "../store/actions";

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.checkFavs = this.checkFavs.bind(this);
  }

  handleClick(movie) {
    this.props.sendFav(movie);
  }

  checkFavs(movie) {
    let bool = false;
    this.props.favs.map(fav => {
      if (movie.Title === fav.Title) bool = true;
    });
    return bool;
  }

  render() {
    return (
      <Movie
        movie={this.props.movie}
        handleClick={this.handleClick}
        favs={this.props.favs}
        checkFavs={this.checkFavs}
      />
    );
  }
}

const mapStateToProps = ({ selectedMovie, user, favs }) => ({
  movie: selectedMovie,
  user,
  favs
});

const mapDispatchToProps = dispatch => ({
  sendFav: movie => dispatch(sendFav(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
