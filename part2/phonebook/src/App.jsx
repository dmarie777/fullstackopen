import { useState, useEffect } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import Persons from './components/Persons'
import phoneService from './services/phone'
import axios from 'axios'

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

  const handleDeletion = ( id) => {
    const obj = persons.find(e => e.id === id)
    phoneService
        .deletePerson(id, obj)
        .then( res => {
          confirm(`Delete ${obj.name}? `)
          setPersons(persons.filter(e => e.id !== id))
        })
 }
 
  const filterNames = persons.filter(person => person.name.charAt(0).toLowerCase() === letterToFilter.toLowerCase())

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
        {
          letterToFilter?  
          filterNames.map(person => 
            <Persons  
            key={person.name} 
            person = {person}
            handleDeletion= {() => handleDeletion(person.id)} 
            />)
          : 
          persons.map(person => 
            <Persons  
            key={person.name} 
            person = {person} 
            handleDeletion= {() => handleDeletion(person.id)}
            />)  
        }
      </div>
    </>
  )
}

export default App
