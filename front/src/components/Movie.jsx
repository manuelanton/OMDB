import React from "react";

export default ({ movie }) => (
  <div key={movie.imdbID} className="col-xs-4">
    <br />

    <img src={movie.Poster} />

    <div className="caption">
      <h5>
        <span>Title: {movie.Title}</span>
        <br />
        <span>Type: {movie.Type}</span>
        <br />
        <span>Plot: {movie.Plot}</span>
      </h5>
      <small> Year: {movie.Year}</small>
    </div>
  </div>
);
