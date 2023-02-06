import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = title => {
    console.log("handleClick ", title)
    switch(title) {
      case "good":
        setGood(good+1)
        break;
      case "neutral":
        setNeutral(neutral+1)
        break;
      case "bad":
        setBad(bad+1)
        break;
      default:
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleClick("good")} text="good"/>
      <Button handleClick={() => handleClick("neutral")} text="neutral"/>
      <Button handleClick={() => handleClick("bad")} text="bad"/>
      <h1>statistics</h1>
      <div>good <span>{good}</span></div>
      <div>neutral <span>{neutral}</span></div>
      <div>bad <span>{bad}</span></div>
    </div>
  )
}

export default App