import { useEffect, useState } from "react";
import axios from 'axios';
import PersonForm from "./components/PersonForm.js";
import Search from "./components/Search";
import Persons from "./components/Persons";


const App=(props)=>{
  const [persons, setNames]=useState([])
  const [newName, setNewName]=useState('')
  const [newPhone, setNewPhone]=useState('')
  const [filter, setFilter]=useState('')
  
  // useEffect(()=>{
  //   console.log('effect')
  //   axios.get('http://localhost:3002/persons').then(response=>{
  //     console.log('promise fulfilled')
  //     setNames(response.data)
  //   })
  // },[])
  // console.log('render', persons.length,'persons')

  // const hook=()=>{
  //   console.log('effect')
  //   axios.get('http://localhost:3002/persons').then(response=>{
  //     console.log('promise fulfilled')
  //     setNames(response.data)
  //   })
  // }
  // useEffect(hook,[])

  useEffect(()=>{
    const eventHandler=response=>{
      console.log('promise fulfilled')
      setNames(response.data)
    }
    const promise=axios.get('http://localhost:3002/persons')
    promise.then(eventHandler)
  },[])
  console.log('render', persons.length,'persons')

  const addName=(event)=>{
    event.preventDefault()
    console.log('button clicked',event.target)
    const personsObject={
      phone:newPhone,
      name:newName,
      id:persons.length+1
    }
    if (persons.some((person) => person.name === personsObject.name)){
      alert(`The ${newName} already exist in the phonebook` )
    }
    else if(persons.some((person) => person.phone === personsObject.phone)){
      alert(`The ${newPhone} already exist in the phonebook` )
    }else{
      setNames(persons.concat(personsObject))
      setNewName('')
    }
    
  }


  const handleNameChange=(event)=>{
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneChange=(event)=>{
    // console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterchange=(event)=>{
    setFilter(event.target.value)
  }
  
  return(
    <div>
         <h2>Phonebook</h2>
      <div>
        <Search filter={filter} onQueryChange={handleFilterchange}/>
      </div>
      <h2>Add a new name or phone number</h2>
      <PersonForm onFormSubmit={addName} name={newName} onNameChange={handleNameChange} onPhoneChange={handlePhoneChange}/>
      {/* <form onSubmit={addName}>
        Name: <input type="text" value={newName} onChange={handleNameChange}/>
        <br/>
        <br/>
        Phone: <input type="text" value={newPhone} onChange={handlePhoneChange}/>
        <br/>
        <br/>
        <button type="submit">Add </button>
      </form> */}
      <h2>Numbers</h2>
      <ul>
      <Persons persons={persons} filter={filter}/>
      </ul>
         
    </div>
  )
}
export default App;
