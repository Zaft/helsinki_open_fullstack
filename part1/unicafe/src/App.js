import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  // console.log("Stats ", props)
  return (
    <>
      <h1>statistics</h1>
      <table>
      <tbody>
        { 
          props.showValues ? 
          props.stats.map((stat) => {
            return <StatisticsLine key={stat.text} text={stat.text} value={stat.value} />
          })
          : <tr><td>no feedback given</td></tr>
        }
      </tbody>
      </table>
    </>
  )
}

const StatisticsLine = (props) => {
  return <tr>
      <td>{props.text} </td>
      <td>{props.value} </td>
    </tr>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [anyFeedback, setAnyFeedback] = useState(false);

  const statistics = [
    {
      text: 'good',
      value: good
    },
    {
      text: 'neutral',
      value: neutral
    },
    {
      text: 'bad',
      value: bad
    },
    {
      text: 'all',
      value: all
    },
    {
      text: 'average',
      value: average
    },
    {
      text: 'positive',
      value: positive
    }
  ]

  const handleClick = title => {
    // console.log("handleClick ", title)
    setAll(all+1)
    setAnyFeedback(true);
    let newGood, newBad;
    [newGood, newBad] = [good, bad];
    let newAll = all + 1
    switch(title) {
      case "good":
        setGood(good+1)
        newGood++
        break;
      case "neutral":
        setNeutral(neutral+1)
        break;
      case "bad":
        setBad(bad+1)
        newBad++
        break;
      default:
    }
    console.log("newGood, newBad, newAll", newGood, newBad, newAll);
    let avg =(newGood - newBad) / (newAll);
    setAverage(avg)
    let pos = (newGood / newAll) * 100 + "%";
    setPositive(pos);
    console.log("all: ", {all});
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleClick("good")} text="good"/>
      <Button handleClick={() => handleClick("neutral")} text="neutral"/>
      <Button handleClick={() => handleClick("bad")} text="bad"/>
      <Statistics stats={statistics} showValues={anyFeedback} />
    </div>
  )
}

export default App