import React from "react";

export default ({ movie, handleClick, checkFavs }) => (
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
        <br />
        <span> Year: {movie.Year}</span>
        <br />
        <br />
        {checkFavs(movie) ? (
          <button>REMOVE FROM FAVORITES</button>
        ) : (
          <button onClick={() => handleClick(movie)}>ADD TO FAVORITES</button>
        )}
      </h5>
    </div>
  </div>
);
