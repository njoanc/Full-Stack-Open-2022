import { useState } from 'react'
import Country from './Country'

const CountryName = ({ countries }) => {
  const [ data, setDataDetails] = useState([])

  const response = (country) => {
    data.includes(country.name.common)?
    setDataDetails(data.filter(details => details !== country.name.common)):
    setDataDetails([...data].concat(country.name.common))
  }

  return (
    <ul>
      {countries.map(country => {
        return (
          <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => response(country)}>show/hide details</button>
            {data.includes(country.name.common) && 
              <Country country={country} />
            }
          </li>
        )
      })}
    </ul>
  )
}

export default CountryName