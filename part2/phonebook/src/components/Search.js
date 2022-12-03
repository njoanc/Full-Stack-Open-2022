import React from 'react';
const propTypes = {};
const defaultProps = {};

const Search = ({ query, onQueryChange }) => {
    return (
        <div>
            <input type="text" placeholder="Search name" value={query} onChange={onQueryChange} />
        </div>
    );
};

//input validation
Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
