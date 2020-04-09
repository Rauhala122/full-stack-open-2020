import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'
import Persons from './components/Persons'
import Weather from './components/Weather'

const App = () => {
  const [countries, setCountries] = useState([])

  const [countryFilter, setCountryFilter] = useState('')

  useEffect(() => {
    console.log('effect')

    const eventHandler = response => {
      console.log('promise fulfilled')
      console.log(response.data)
      setCountries(response.data)
    }

    const promise = axios.get('https://restcountries.eu/rest/v2/all')
    promise.then(eventHandler)
  }, [])

  const filterOnChange = (event) => {

    setCountryFilter(event.target.value)
    console.log(countries)

  }

  const filteredCountries = () => {
    const countriesf = countries.filter(country => country.name.toLowerCase().includes(countryFilter.toLowerCase()))
    if (countriesf.length > 10) {
      return <p>"Too many countries, specify another filter"</p>
    } else if (countriesf.length ===  1) {

      return <div>
      <h1>{countriesf[0].name}</h1>
      <p>Capital: {countriesf[0].capital}</p>
      <p>Population: {countriesf[0].population}</p>
      <h3>Languages</h3>
      <ul>
        {countriesf[0].languages.map(language => <li>{language.name}</li>)}
      </ul>
      <img src={countriesf[0].flag} height="100px" width="150px"/>
      <h3>Weather in {countriesf[0].capital}</h3>
      <Weather city={countriesf[0].capital} />
      </div>
    } else {
      return countriesf.map(country =>
        <div>
          <p>{country.name}     <button onClick={() => setCountryFilter(country.name)}>Show</button></p>
        </div>
      )
    }
  }

  return (
    <div>
      <h1>Search Countries</h1>
      <input onChange={filterOnChange}/>
      {filteredCountries()}
    </div>
  )
}

export default App
