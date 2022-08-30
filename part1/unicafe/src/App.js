import { useState } from "react";
const Button=({handleClick, text})=>( 
  <button onClick={handleClick}>{text}
  </button>
  )
 
const Statistics=(props)=>{
  return(
    <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad :{props.bad}</p>
      <p>All: {props.all}</p>
      <p>Average:{(props.good+props.bad+props.neutral)/3}</p>
      <p>Positive: {(props.good+props.bad+props.neutral)*3/100}%</p>
    </div>
  )

}
const App=()=>{
  const [good, setGood]=useState(0)
  const [neutral, setNeutral]=useState(0)
  const [bad, setBad]=useState(0)
  
  
 const handleGood=()=>{
  setGood(good +1)
 }
 const handleNeutral=()=>{
  setNeutral(neutral +1)
 }
 const handleBad=()=>{
  setBad(bad +1)
 }
  return(
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text="Good"/>
      <Button handleClick={handleNeutral} text="Neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <h2>Statistics</h2>
      <Statistics  good= {good} neutral={neutral} bad={bad} all={good+bad+neutral}/>
    </div>
  )

}

export default App
