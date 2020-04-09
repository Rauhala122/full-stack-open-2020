import React, { useState, useEffect } from 'react'
import noteService from '../services/persons'

const Persons = (props) => {
  let filtered = props.persons
  console.log(filtered)
  const filteredPersons = filtered.filter(person => person.name.toLowerCase().includes(props.filter))

  return (
    <div>
      {
      filteredPersons.map((person, i) =>
        <p key={i}>{person.name} {person.number} <button onClick={() => props.deletePerson(person.id)}>Delete</button></p>
      )}
    </div>
  )
}
export default Persons
