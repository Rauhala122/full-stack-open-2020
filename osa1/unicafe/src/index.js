import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => {
  return (
    <div>
      <h1>{header} </h1>
    </div>
  )
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({title, total}) => {
  return (
      <tr>
        <td>{title}:</td>
        <td>{total}</td>
      </tr>
  )
}

const Statistics = ({good, neutral, bad, countAll, countAverage, countPositive}) => {
  if (countAll > 0) {
    return (
      <div>
        <table>
          <tr>
            <Header header="Statistics"/>
          </tr>
            <StatisticLine title="good" total={good}/>
            <StatisticLine title="neutral" total={neutral}/>
            <StatisticLine title="bad" total={bad}/>
          <tr>
            <td>All:</td>
            <td>{countAll}</td>
          </tr>
          <tr>
            <td>Average:</td>
            <td>{countAverage} %</td>
          </tr>
          <tr>
            <td>Positive:</td>
            <td>{countPositive} %</td>
          </tr>
        </table>
      </div>
    )
  } else {
    return (
      <p>No feedback given </p>
    )
  }

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  const countAll = () => good+neutral+bad
  const countAverage = () => {
    return ( 1*good + 0*neutral + -1*bad) / countAll()
  }

  const countPositive = () => {
    return good/countAll()
  }

  return (
    <div>
      <Header header="Give feedback"/>
      <Button text="good" onClick={addGood}/>
      <Button text="neutral" onClick={addNeutral}/>
      <Button text="bad" onClick={addBad}/>

      <Statistics good={good} neutral={neutral} bad={bad} countAll={countAll()} countAverage={countAverage()} countPositive={countPositive()}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
