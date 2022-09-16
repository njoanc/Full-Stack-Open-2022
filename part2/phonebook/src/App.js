// import {useState} from "react"
import { useState } from "react";
import Phonebook from "./components/Phonebook";



const App=(props)=>{
  const [names, setNames]=useState(props.names)
  const [newName, setNewName]=useState('')

  const addName=(event)=>{
    event.preventDefault()
    console.log('button clicked',event.target)
    const namesObject={
      name:newName,
      id:names.length+1
    }
    if (names.some((person) => person.name === namesObject.name)){
      alert(`${newName} The name already exists in the phonebook` )
    }else{
      setNames(names.concat(namesObject))
      setNewName('')
    }
    
  }

  const handleNameChange=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        name: <input type="text" value={newName} onChange={handleNameChange}/>
        <button type="submit">Add </button>
      </form>
      <h2>Names</h2>
      <ul>
      {names.map((name) => <Phonebook key={name.id} name={name} />)}
      </ul>
         
    </div>
  )
}
export default App;
