import { useState } from "react";

const Heading=({text})=>{
  return(
    <div>
     <h1>{text}</h1>
    </div>
  )
}
const Button=({handleClick, text})=>( 
  <button onClick={handleClick}>{text}
  </button>
  )
 
const StatisticLine=props=>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
    ) 
}
const Statistics=(props)=>{
  console.log(props)
  if(props.good===0&&props.neutral===0&&props.bad===0){
    return <p>No feedback given</p>
  }
  return(
    <div>
      <Heading text="Statistics"/>
      <table>
        <tb>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={props.positive}/>
        </tb>
      
      </table>
     

    </div>
  )

}
const App=()=>{
  const [good, setGood]=useState(0)
  const [neutral, setNeutral]=useState(0)
  const [bad, setBad]=useState(0)
  const total=good+bad+neutral
  const average=total/3
  const positive=average/100
  
  
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
      <Heading text="Give feedback"/>
      <Button handleClick={handleGood} text="Good"/>
      <Button handleClick={handleNeutral} text="Neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <Statistics  good= {good} neutral={neutral} bad={bad} all={total} average={average} positive={positive}/>
    </div>
  )

}

export default App
