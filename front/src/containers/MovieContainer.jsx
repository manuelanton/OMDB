import React from "react";
import { connect } from "react-redux";
import Movie from "../components/Movie";

const mapStateToProps = ({ selectedMovie }) => ({
  movie: selectedMovie
});

export default connect(mapStateToProps)(Movie);
