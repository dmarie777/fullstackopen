import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
  }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
  }
  const changeName = (event) => {
    setNewName(event.target.value)
  }
  const changeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <>
      <div>
        <h2>Phonebook</h2>
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
        {persons.map(person => <li key={person.name}> {person.name} {person.number }</li>)}
      </div>
    </>
  )
}

export default App
