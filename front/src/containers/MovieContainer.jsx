import React from "react";
import { connect } from "react-redux";
import Movie from "../components/Movie";

const mapStateToProps = ({ selectedMovie, user }) => ({
  movie: selectedMovie,
  user
});

export default connect(mapStateToProps)(Movie);
