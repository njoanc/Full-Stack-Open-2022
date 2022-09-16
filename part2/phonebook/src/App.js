// import {useState} from "react"
import { useState } from "react";
// import Phonebook from "./components/Phonebook";
import Name from "./components/Name";



const App=(props)=>{
  const [names, setNames]=useState(props.names)
  const [newName, setNewName]=useState('')
  const [newPhone, setNewPhone]=useState('')

  const addName=(event)=>{
    event.preventDefault()
    console.log('button clicked',event.target)
    const namesObject={
      phone:newPhone,
      name:newName,
      id:names.length+1
    }
    if (names.some((person) => person.name === namesObject.name)){
      alert(`The ${newName} already exist in the phonebook` )
    }
    else if(names.some((person) => person.phone === namesObject.phone)){
      alert(`The ${newPhone} already exist in the phonebook` )
    }else{
      setNames(names.concat(namesObject))
      setNewName('')
    }
    
  }


  const handleNameChange=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneChange=(event)=>{
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }
  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        Name: <input type="text" value={newName} onChange={handleNameChange}/>
        Phone: <input type="text" value={newPhone} onChange={handlePhoneChange}/>
        <button type="submit">Add </button>
      </form>
      <h2>Names</h2>
      <ul>
      {names.map((item) => <Name key={item.id} name={item.name} phone={item.phone}/>)}
      </ul>
         
    </div>
  )
}
export default App;
