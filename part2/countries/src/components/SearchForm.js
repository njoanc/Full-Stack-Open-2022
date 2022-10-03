import React from 'react'

const SearchForm = ({ filter, filterChange }) => {
  return (
    <div>
      search for a country by name: <input 
        value={filter}
        onChange={filterChange}
      />
    </div>
  )
}

export default SearchForm