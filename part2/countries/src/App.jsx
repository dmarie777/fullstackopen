import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import CountryList from './components/CountryList'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState({})
  
  const getCountry = (event) => {
    setValue(event.target.value)
  }

  const showInfo = (country) => {
    setCountries([country])
  }
  useEffect ( () => {
    if (value) {
     axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
         .then( response => {
           console.log(response.data)
           const valueString = value.toString().toLowerCase()
           const filterObj = response.data.filter( e => e['name']['common'].toLowerCase().startsWith(value.toLowerCase()) )
           setCountries(filterObj)
         })
         .catch(err => {
          console.log(err);
         })
    }
    if (countries.length === 1 ) {
      const [lat, lng] = countries[0]['latlng']
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${import.meta.env.VITE_SOME_KEY}`)
        
         .then(response => {
           console.log('response',response.data);
           setWeather(response.data);
         })
         .catch(err => {
          console.log(err);
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
      : (countries.length === 1  && weather['main']) ? 
        <Country 
          name = {countries[0]['name']['common']} 
          capital = {countries[0]['capital']} 
          area = {countries[0]['area']}
          languages = {countries[0]['languages']}
          flag = {countries[0]['flags']['png']}
          temperature = {weather['main']['temp']}
          wind = {weather['wind']['speed'] }
          iconURL = {`https://openweathermap.org/img/wn/${weather['weather'][0]['icon']}@2x.png`}          
        />
      : countries.map( country => 
      <CountryList 
        key= {country['name']['common']} 
        name = {country['name']['common']}
        showInfo={ () => showInfo(country)}
      />)}
    </>
  )
}

export default App
