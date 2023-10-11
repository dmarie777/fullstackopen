import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567',
      id:1
    },
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
    let namesArray = persons.map(person => person.name)
    if (!namesArray.includes(newName)) {
      setPersons(persons.concat(obj))
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
  
  const filterNames = persons.filter(person => person.name.charAt(0).toLowerCase() === letterToFilter.toLowerCase())

  return (
    <>
      <div>
        <h2>Phonebook</h2>
          <div>
            filter shown with: <input value={letterToFilter} onChange={filterName}/>
          </div>
        <h2>add a new</h2>
        <form onSubmit={addName}>
          <div>
            name: <input value={newName} onChange={changeName}/>
          </div>
          <div>
          number: <input value={newNumber} onChange={changeNumber}/>
          </div>
          <div>
            <button type = "submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        { letterToFilter? 
          filterNames.map(person => <li key={person.name}> {person.name} {person.number }</li>):
          persons.map(person => <li key={person.name}> {person.name} {person.number }</li>)
        }
      </div>
    </>
  )
}

export default App
