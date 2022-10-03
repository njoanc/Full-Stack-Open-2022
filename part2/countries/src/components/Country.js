import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Country = ({ country }) => {
    const [ weather, setWeather ] = useState()
    const api_key=process.env.REACT_APP_API_KEY
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`
   
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
          <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} width="150" height="150" alt="weather icon"/>
          <p>wind: {weather.wind.speed} speed</p>
        </div>
      }
    </div>
  )
}

export default Country