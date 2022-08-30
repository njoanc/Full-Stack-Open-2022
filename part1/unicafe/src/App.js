import { useState } from "react";
const Button=({handleClick, text})=>( 
  <button onClick={handleClick}>{text}
  </button>
  )
 
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
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad :{bad}</p>
      <p>All: {good+bad+neutral}</p>
      <p>Average:{(good+bad+neutral)/3}</p>
      <p>Positive: {(good+bad+neutral)*3/100}%</p>
    </div>
  )

}

export default App
