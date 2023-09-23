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
  const StatisticLine = ({ text, value }) => {
    return (
      <>
      <p>{text} {value}</p>
      </>
    )
  }
  const Statistic = () => {
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
          <StatisticLine text = "Good" value = {good} />
          <StatisticLine text = "Neutral" value = {neutral} />
          <StatisticLine text = "Bad" value = {bad} />
          <StatisticLine text = "All" value = {good + neutral + bad} />
          <StatisticLine text = "Average" value = {good + neutral + bad/3} />
          <StatisticLine text = "positive" value = {`${good/(good + neutral + bad)*100} %`} />
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
        <Statistic  />
      </div>
    </>
  )
}

export default App
