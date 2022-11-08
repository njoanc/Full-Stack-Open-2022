import React from "react";

const Search = ({ query, onQueryChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search name"
        value={query}
        onChange={onQueryChange}
      />
    </div>
  );
};

export default Search;
