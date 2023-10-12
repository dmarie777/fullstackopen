import { useState } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import Persons from './components/Persons'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [letterToFilter, setLetterToFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const obj = {
      name: newName,
      number: newNumber
    }
    let namesArray = persons.map(person => person.name.toLowerCase())
    !namesArray.includes(newName.toLowerCase())? setPersons(persons.concat(obj)) : alert(`${newName} is already added to phonebook`)
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
