import React from "react";
import { Link } from "react-router-dom";

const Search = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <button type="submit">Search</button>
        <input
          placeholder="Enter movie or show name"
          onChange={e => props.handleChange(e)}
          value={props.inputValue}
        />
      </form>
      <Link to="/">
        {" "}
        <button onClick={props.emptyMovies}>HOME</button>
      </Link>
      <Link to="/users/register">
        <button>REGISTER</button>
      </Link>
    </div>
  );
};

export default Search;
