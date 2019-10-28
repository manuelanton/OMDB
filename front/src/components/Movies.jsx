import React from "react";

export default ({ movies }) => (
  <div className="movies">
    <div className="row">
      {movies.map(movie => (
        <div key={movie.imdbID} className="col-xs-4">
          <br />
          {console.log(movie.imdbID)}
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
