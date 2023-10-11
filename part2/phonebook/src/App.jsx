import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const obj = {
      name: newName
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
  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addName}>
          <div>
            name: <input value={newName} onChange={changeName}/>
          </div>
          <div>
            <button type = "submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        {persons.map(person => <li key={person.name}> {person.name}</li>)}
      </div>
    </>
  )
}

export default App
