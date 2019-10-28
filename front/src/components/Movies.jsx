import React from "react";
import { Link } from "react-router-dom";

export default ({ movies }) => (
  <div className="movies">
    <h3>movies</h3>
    <div className="row">
      {movies.map(movie => (
        <div key={movie.id} className="col-xs-4">
          <img src={movie.Poster} />
          <div className="caption">
            <h5>
              <span>Title: {movie.Title}</span>
              <br />
              <span>Type: {movie.Type}</span>
            </h5>
            <small> Year: {movie.Year}</small>
          </div>
        </div>
      ))}
    </div>
  </div>
);
