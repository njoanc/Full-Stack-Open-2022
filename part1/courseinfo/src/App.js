import { useState } from "react";
const Display=({counter})=>
    <div>{counter}</div>
  
const Button=({onClick, text})=>
 
<button onClick={onClick}>{text}</button>
   
 
const App=()=>{
  const [counter, setCounter]= useState(0);
  const increasedByOne=()=>{
    setCounter(counter +1)
  }
  const decreasedByOne=()=>{
    setCounter(counter -1)
  }
  const setToZero=()=>{
    setCounter(0)
  }
  return(
    <div>
      <Display counter={counter}/>
      <Button onClick={increasedByOne} text="Plus"/>
      <Button onClick={decreasedByOne} text="minus"/>
      <Button onClick={setToZero} text="Reset"/>
    </div>
    
  )
}

export default App;
