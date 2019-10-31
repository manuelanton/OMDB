import React from "react";
import { connect } from "react-redux";
import Movie from "../components/Movie";
import { sendFav, destroyFav } from "../store/actions";

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.checkFavs = this.checkFavs.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(movie) {
    this.props.sendFav(movie);
  }

  handleDelete(movie) {
    this.props.destroyFav(movie.imdbID);
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
        handleDelete={this.handleDelete}
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
  sendFav: movie => dispatch(sendFav(movie)),
  destroyFav: movieID => dispatch(destroyFav(movieID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
