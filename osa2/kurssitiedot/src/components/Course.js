import React from 'react'

const Course = ({courses}) => {

  const exercisesTotal = (parts) => {
    const exercises = parts.map(part => part.exercises)
    const total = exercises.reduce((a, b) => a + b)
    return total
  }

  return (
    <div>
      {courses.map(course =>
        <div>
          <h1>{course.name}</h1>
          {course.parts.map(part =>
            <li key={part.id}> {part.name} {part.exercises} </li>
          )}
          <strong>Total of {exercisesTotal(course.parts)} exercises </strong>
        </div>
      )}

    </div>
  )
}

export default Course
