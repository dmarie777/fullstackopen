import { useState } from 'react'

function App() {
    const anecdotes = [
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      'The only way to go fast, is to go well.'
    ]
    const [selected, setSelected] = useState(0);
    const [vote, setVote] = useState(Array.from({length: anecdotes.length}, x => 0));
  
    const randomNum = () => Math.floor(Math.random() * anecdotes.length );
    const handleSelection = () => {
      setSelected(randomNum());
    }
    const handleVote = () => {
      let copy = [...vote];
      copy[selected] += 1;
      setVote(copy);
    }
    let max = 0;
    let indexMax = '';
    vote.forEach( (e,i)=> {
      if (max < e) {
        max =e;
        indexMax = [i];
      }}
      )

  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>has {vote[selected]} votes</p>
        <button onClick={handleSelection } >next anecdote</button>
        <button onClick={handleVote} >vote</button>

        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[indexMax]}</p>
        <p>has {Math.max(...vote)} votes</p>
      </div>
    </>
  )

}

export default App
