import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './components/SearchForm';
import Countries from './components/Countries';

const App = () => {
  const [ countryData, setCountryData ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountryData(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const countries = () => {
    const data=countryData.filter(country=>country.name.common.toLowerCase().includes(newFilter))
    // console.log(data)
    return data
  }

  return (
    <div>
      <SearchForm 
        filter={newFilter}
        filterChange={handleFilterChange}
      />
      <Countries 
        countries={countries()}
      />

    </div>
  )
  
}

export default App;