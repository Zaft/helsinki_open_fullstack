import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ])
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  useEffect(() => {
    console.log("use effect")
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log("promise fulfilled")
        setPersons(response.data)
      })
  }, [])

  const peopleToShow = filter.length 
    ? persons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    : persons;

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate name does not already exist
    let nameExists = persons.find(person => person.name === newName);
    console.log("handleSubmit, nameExists", nameExists);
    if (!nameExists) {
      const newPersonObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPersonObject))
      setNewName('')
      setNewNumber('')
    }
    else alert(`${newName} is already added to playbook`);

    console.log("handleSubmit", event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm 
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleFilterChange={handleFilterChange}
      ></PersonForm>
      <h3>Numbers</h3>
      <Persons peopleToShow={peopleToShow} />
    </div>
  )
}

export default App