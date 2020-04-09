import React from 'react'

const Filter = ({filterPersons}) => {

  return (
    <div>
      Filter show with <input onChange={filterPersons}/>
    </div>
  )
}

export default Filter
