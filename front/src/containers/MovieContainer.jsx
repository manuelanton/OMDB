import React from "react";
import { connect } from "react-redux";
import Movie from "../components/Movie";
import { sendFav } from "../store/actions";

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(movie) {
    this.props.sendFav(movie);
  }

  render() {
    return <Movie movie={this.props.movie} handleClick={this.handleClick} />;
  }
}

const mapStateToProps = ({ selectedMovie, user }) => ({
  movie: selectedMovie,
  user
});

const mapDispatchToProps = dispatch => ({
  sendFav: movie => dispatch(sendFav(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
