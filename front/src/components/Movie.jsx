import React from "react";
import axios from "axios";

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
        <br />
        <span> Year: {movie.Year}</span>
        <br />
        <br />
        <button onClick={e => movieSender(movie)}>ADD TO FAVORITES</button>
      </h5>
    </div>
  </div>
);

const movieSender = movie => {
  axios.post("/api/favs", { movie });
};
