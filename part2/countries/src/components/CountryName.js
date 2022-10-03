import { useState } from 'react'
import Country from './Country'

const CountryName = ({ countries }) => {
  const [ data, setDataDetails] = useState([])

  const toggledata = (country) => {
    if (data.includes(country.name.common)) {
      setDataDetails(data.filter(details => details !== country.name.common))
    } else {
      let detailsCopy = [...data]
      setDataDetails(detailsCopy.concat(country.name.common))
    }
  }

  return (
    <ul>
      {countries.map(country => {
        return (
          <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => toggledata(country)}>show/hide details</button>
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