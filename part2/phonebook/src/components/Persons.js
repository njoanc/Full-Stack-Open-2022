import React from 'react';

const Persons = ({ persons, filter, deletePersonById }) => {
    let filteredPersons = persons;
    if (filter) {
        filteredPersons = persons.filter((person) => new RegExp(filter, 'i').test(person.name));
    }
    return filteredPersons.map((person) => (
        <li key={person.name}>
            <br />
            Name:{person.name} <br />
            Phone:{person.phone}
            <br />
            <button onClick={() => deletePersonById(person)}>Delete</button>
        </li>
    ));
};

export default Persons;
