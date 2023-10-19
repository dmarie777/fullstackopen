import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  
  const getCountry = (event) => {
    setValue(event.target.value)
  }

  useEffect ( () => {
    if (value) {
      console.log('fetching .....')
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then( response => {
          console.log(response.data)
          const filterObj = response.data.filter( e => e['name']['common'].toLowerCase().startsWith(value) )
          setCountries(filterObj)
        })
    }
  }, [value])

  return (
    <>
      <form >
        find countries: <input value = {value} onChange={getCountry}></input>
      </form>
      { (countries.length >= 10) ? 
        <p>Too many matches, specify another filter </p>
      : (countries.length === 1) ? 
        <Country 
          name = {countries[0]['name']['common']} 
          capital = {countries[0]['capital']} 
          area = {countries[0]['area']}
          languages = {countries[0]['languages']}
          flag = {countries[0]['flags']['svg']}
        />
      : countries.map( country => <p key= {country['name']['common']}>{country['name']['common']}</p>)}
    </>
  )
}

export default App
