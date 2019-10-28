import React from "react";
import { connect } from "react-redux";
import Movies from "../components/Movies";

const mapStateToProps = ({ movies }) => ({
  movies: movies
});

export default connect(mapStateToProps)(Movies);
