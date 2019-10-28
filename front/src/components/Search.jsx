import React from "react";

const Search = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        placeholder="Enter movie or show name"
        onChange={e => props.handleChange(e)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
