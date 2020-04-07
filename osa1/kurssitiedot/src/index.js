import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

  return (
      <div>
        <h1>{props.header}</h1>
      </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
      <p>
        {props.part1.name} {props.part1.exercises}
      </p>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
      <p>
        {props.part2.name} {props.part2.exercises}
      </p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
      <p>
        {props.part3.name} {props.part3.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part1 part1={props.partarray[0]}/>
      <Part2 part2={props.partarray[1]}/>
      <Part3 part3={props.partarray[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

let coursetotal = () => {
  let total = 0
  course.parts.forEach(value => {
      console.log(value.exercises)
      total += value.exercises
  })
  return total
}

  return (
    <div>
      <Header header={course.name}/>
      <Content partarray={course.parts}/>
      <Total total={coursetotal()}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
