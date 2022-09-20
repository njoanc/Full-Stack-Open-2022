import React from 'react';
import Name from './Name';

const Persons = ({ persons, filter }) => {
  let filteredPersons = persons
  if (filter) {
    filteredPersons = persons.filter(person => new RegExp(filter, "i").test(person.name));
  }
  return filteredPersons.map(person => <Name key={person.name} name={person.name} phone={person.phone}/>)
}

export default Persons;