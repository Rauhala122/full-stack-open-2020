import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'
import Persons from './components/Persons'
import noteService from './services/persons'

const Notification = ({ message, messageClass }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={messageClass}>
      {message}
    </div>
  )
}

const App = () => {

  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState([])
  const [message, setMessage] = useState(null)
  const [messageClass, setMessageClass] = useState(null)

  useEffect(() => {
    console.log('effect')

    noteService.getAll().then(initialPersons => {
      console.log('promise fulfilled')
      console.log(initialPersons)
      setPersons(initialPersons)
    })

  }, [])

  const deletePerson = id => {
    noteService.deletePerson(id)
    setPersons(persons.filter(person => person.id !== id))
    setMessage("Deleted " + persons.find(person => person.id === id).name)
    setMessageClass("success")
    setTimeout(() => {
      setMessage(null)
      setMessageClass(null)
    }, 5000)
  }

  const replaceNumber = id => {
    const person = persons.find(person => person.id === id)
    const changedPerson = {...person, number: newNumber}
    noteService.replaceNumber(id, changedPerson).then(returnedPerson => {
      setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
    })
    .catch(error => {
      setMessage(person.name + " is already removed")
      setMessageClass("error")
      setTimeout(() => {
        setMessage(null)
        setMessageClass(null)
      }, 5000)
    })
    setMessage(person.name + "'s number changed")
    setMessageClass("success")
    setTimeout(() => {
      setMessage(null)
      setMessageClass(null)
    }, 5000)
  }

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    if (persons.some(o => o.name == newName)) {
      let changeNumber = window.confirm(`${newName} is already added to phonebook, do you want to change the number?`)
      if (changeNumber == true) {
        const person = persons.find(person => person.name === newName)
        replaceNumber(person.id)
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      noteService.create(personObject).then(initialPersons => {
        setPersons(persons.concat(initialPersons))
        setMessage("Added " + newName)
        setMessageClass("success")
        setTimeout(() => {
          setMessage(null)
          setMessageClass(null)
        }, 5000)
        setNewName('')
        setNewNumber('')
      })
      event.target.value = ''
    }
  }

  const filterPersons = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  const handleNameChange = (e) => setNewName(e.target.value)
  const handleNumberChange = (e) => setNewNumber(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageClass={messageClass}/>
      <Filter filterPersons={filterPersons}/>
      <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addNewPerson={addNewPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deletePerson={deletePerson}/>
    </div>
  )

}

export default App
