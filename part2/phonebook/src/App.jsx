import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Filter from './components/Filter'
import Persons from './components/Persons'
import phoneService from './services/phone'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [letterToFilter, setLetterToFilter] = useState('')

  useEffect(() => {
    
    phoneService
        .getAll()
        .then(response => {
          setPersons(response)
        })
  }, [])
  const addName = (event) => {
    event.preventDefault()
    const obj = {
      name: newName,
      number: newNumber
    }
    let namesArray = persons.map(person => person.name.toLowerCase())

    if (!namesArray.includes(newName.toLowerCase())) {
      phoneService
        .create(obj)
        .then(response => {
          setPersons(persons.concat(response))
        })
    } else {
      alert(`${newName} is already added to phonebook`)
    } 
    setNewName('')
    setNewNumber('')
  }
  const changeName = (event) => {
    setNewName(event.target.value)
  }
  const changeNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const filterName = (event) => {
    setLetterToFilter(event.target.value)
  }

  return (
    <>
      <div>
        <h2>Phonebook</h2>
          <Filter letterToFilter= {letterToFilter} filterName = {filterName} />
        <h2>add a new</h2>
        <Form 
          newName = {newName}
          newNumber = {newNumber}
          addName = {addName}
          changeName = {changeName}
          changeNumber = {changeNumber}
        />
        <h2>Numbers</h2>
        <Persons persons = {persons} letterToFilter = {letterToFilter} />
      </div>
    </>
  )
}

export default App
