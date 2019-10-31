import React from "react";
import { Link } from "react-router-dom";

const Search = props => {
  return (
    <div>
      <Link to="/">
        <button onClick={props.emptyMovies}>HOME</button>
      </Link>
      {props.user.username ? (
        <div>
          <p>Hello {props.user.username}!</p>
          <form onSubmit={props.handleSubmit}>
            <button type="submit">Search</button>
            <input
              placeholder="Enter movie or show name"
              onChange={e => props.handleChange(e)}
              value={props.inputValue}
            />
          </form>
          <Link to="/favorites">
            <button>FAVORITES</button>
          </Link>
          <button onClick={props.handleLogout}>LOGOUT</button>
        </div>
      ) : (
        <div>
          <Link to="/users/register">
            <button>REGISTER</button>
          </Link>
          <Link to="/users/login">
            <button>LOGIN</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Search;
