import React from 'react'

const PersonForm = ({newName, handleNameChange, newNumber, handleNumberChange, addNewPerson}) => {
return (
  <div>
    <h2>Add a New </h2>
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange}/>
        number: <input value={newNumber} onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit" onClick={addNewPerson}>add</button>
      </div>
    </form>
  </div>
)
}

export default PersonForm
