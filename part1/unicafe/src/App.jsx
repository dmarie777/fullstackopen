import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function Button ({handleClick, text}) {
    return (
      <button onClick = {handleClick} > {text}</button>
    )
  }
  const Statistic = ({ good, neutral, bad }) => {
    if (good ===0 && neutral === 0 && bad === 0) {
      return (
        <>
        <p>No feedback given</p>
        </>
      )
    } else {
      return (
        <>
          <h2>Statistics</h2>
          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
          <p>All {good + neutral + bad}</p>
          <p>Average {(good + neutral + bad/3)}</p>
          <p>positive {good/(good + neutral + bad)*100} %</p>
        </>
      )
    }
  }

  const addPoint = (state, setState) => {
    return () => setState(state + 1)
  }

  return (
    <>
      <div>
        <h2>Give feedback</h2>
        <Button handleClick={addPoint(good, setGood)} text='good' /> 
        <Button handleClick={addPoint(neutral, setNeutral)} text='neutral' />
        <Button handleClick={addPoint(bad, setBad)} text='bad' />
      </div>
      <div>
        <Statistic good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  )
}

export default App
