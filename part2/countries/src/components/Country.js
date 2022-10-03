import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Country = ({ country }) => {
    const [ weather, setWeather ] = useState()
    // const value=weather.weather[0]
    const api_key=process.env.REACT_APP_API_KEY
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`
    // const imageUrl=`https://api.openweathermap.org/img/${value?value[0].icon:null}.png`
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setWeather(response.data)
      })
  }, [url])

  const data= Object.values(country.languages)
  console.log(data)

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h2>Languages Spoken:</h2>
      <ul>
        {data.map(language => {
          return (
            <li key={language}>{language}</li>
          )
        })}
      </ul>
      <img src={country.flags.png} alt={country.name.common}/>
      {weather &&
        <div>
          <h2>Weather in {country.capital}</h2>
          <p>Humidity {weather.main.humidity}</p>
          <p>Temp: {weather.main.temp}</p>
          <img src={weather.weather[0].icon} width="120" height="100" alt='Weather icon'/>
          <p>wind: {weather.wind.speed} speed</p>
        </div>
      }
    </div>
  )
}

export default Country