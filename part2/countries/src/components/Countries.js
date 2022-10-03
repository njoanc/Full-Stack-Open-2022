import React from 'react'
import Country from './Country'
import CountryName from './CountryName'

const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return (
      <p>Too many matches, add a more specific search</p>
    )
  } else if (countries.length < 10 && countries.length > 1) {
    return (
      <CountryName countries={countries} />
    )
  } else if (countries.length === 1) {
    return (
      <Country country={countries[0]} />
    )
  } else {
    return (
      <p>No countries matching your search</p>
    )
  }
}

export default Countries