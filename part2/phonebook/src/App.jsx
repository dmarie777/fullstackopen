import { useState, useEffect } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import Persons from './components/Persons'
import phoneService from './services/phone'
import Notification from './components/Notification'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [letterToFilter, setLetterToFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    phoneService
        .getAll()
        .then(response => {
          setPersons(response)
        })
        .catch(err => {
          console.log(err);
        })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const obj = {
      name: newName,
      number: newNumber,
    }
    let namesArray = persons.map(person => person.name.toLowerCase())

    if (!namesArray.includes(newName.toLowerCase())) {
      phoneService
        .create(obj)
        .then(response => {
          setPersons(persons.concat(response))
          setSuccessMessage(`Added ${response.name}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 3000)
        })
        .catch(error => {
          setErrorMessage(error.response.data.error.message)
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
    } else {
      let id = persons.find(person => person.name.toLowerCase() === newName.toLowerCase()).id
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        phoneService
        .update(id, obj )
        .then(newObj => {
          setPersons(persons.map( person => person.id === id? newObj : person))
          setSuccessMessage(`Added ${newObj.name}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 3000)
        })
        .catch ((err) => {
          setErrorMessage(`Imformation of ${newName} has already been removed from server`)
        })
      }
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
          if (confirm(`Delete ${obj.name}? `)) {
            setPersons(persons.filter(e => e.id !== id))
          }
        })
 }
 
  const filterNames = persons.filter(person => person.name.charAt(0).toLowerCase() === letterToFilter.toLowerCase())

  return (
    <>
      <div>
        <h2>Phonebook</h2>
          <Filter letterToFilter= {letterToFilter} filterName = {filterName} />
        <h2>add a new</h2>
        <Notification message = {successMessage} classN = 'success'/>
        <Notification message = {errorMessage} classN = 'error'/>
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
