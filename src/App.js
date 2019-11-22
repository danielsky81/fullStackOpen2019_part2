import React, { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
      event.preventDefault()
      const nameObj = {
          name: newName
      }
      setPersons(persons.concat(nameObj))
      setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const numbers = () => persons.map(person =>
    <Numbers 
        key={person.name}
        person={person.name} />
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {numbers()}
    </div>
  )
}

export default App