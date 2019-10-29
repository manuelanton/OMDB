import React from "react";
import { Link } from "react-router-dom";

export default ({ movies }) => (
  <div className="movies">
    <div className="row">
      {movies &&
        movies.map(movie => (
          <div key={movie.imdbID} className="col-xs-4">
            <br />
            <Link to={`/movies/${movie.imdbID}`}>
              <img src={movie.Poster} />
            </Link>
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
