import React from 'react';
import PropTypes from 'prop-types';

const Persons = ({ persons, filter, deletePersonById }) => {
    let filteredPersons = persons;
    if (filter) {
        filteredPersons = persons.filter((person) => new RegExp(filter, 'i').test(person.name));
    }
    return filteredPersons.map((person, id) => (
        <div key={person.id}>
            <br />
            Name:{person.name} <br />
            Phone:{person.number}
            <br />
            <button onClick={() => deletePersonById(person)}>Delete</button>
        </div>
    ));
};
Persons.propTypes = {
    persons: PropTypes.array.isRequired
};
export default Persons;
