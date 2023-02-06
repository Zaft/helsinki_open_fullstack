import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
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
  // let in = new Array(anecdotes.length).fill(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [highestVoted, setHighestVoted] = useState("");

  const handleClick = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    // console.log("handleClick random", random);
    setSelected(random);
  }

  const handleVoteClick = () => {
    // console.log("points before", points)
    const copy = [...points]
    // console.log("copy", copy);
    // increment the value in position 2 by one
    copy[selected] += 1
    setPoints(copy)

    // set anecdote with the highest number of votes
    let max = Math.max(...points)
    let index = points.indexOf(max);
    if (index > -1)
      setHighestVoted(anecdotes[index]);
      // console.log("highes voted ", anecdotes[index])
      // console.log("max ", max)
  }
   
  const [selected, setSelected] = useState(0)

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        <Button text="vote" handleClick={handleVoteClick}></Button>
        <Button text="next anecdote" handleClick={handleClick} />
      </div>
      <h1>Anecdote with the most votes</h1>
      <div>{highestVoted}</div>
      {/* <div>Num Votes: {Math.max(...points)}</div> */}
    </>
  )
}

export default App