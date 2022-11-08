import React, { useEffect, useState } from 'react';
// import axios from "axios";
import PersonForm from './components/PersonForm.js';
import Search from './components/Search';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
    const [persons, setNames] = useState([]);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [filter, setFilter] = useState('');

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value);
    };

    const handleFilterchange = (event) => {
        setFilter(event.target.value);
    };

    useEffect(() => {
        personService.getAll().then((person) => {
            setNames(person);
        });
    }, []);

    const addPerson = (event) => {
        event.preventDefault();
        const personsObject = {
            phone: newPhone,
            name: newName
        };

        if (!newName || !newPhone) {
            alert(`${newPhone} or ${newName} fields are required`);
            return;
        }
        //check if the name is in the database
        const data = persons.find(
            (person) => person.name.toLowerCase() === newName.toLocaleLowerCase()
        );
        if (data && data.name === newName && data.phone !== newPhone) {
            if (
                window.confirm(
                    `The ${newName} already has a phone number, replace it with the new one?`
                )
            ) {
                //copy data object and update the phone value
                const copyData = { ...data, phone: newPhone };

                personService.updateOne(data.id, copyData).then((item) => {
                    setNames(persons.map((person) => (person.id === data.id ? person : item)));
                    setNewName('');
                    setNewPhone('');
                });
            }
        } else if (data && data.name === newName) {
            alert(`${newName} exists in the field. it should be unique`);
        } else if (data && data.phone === newPhone) {
            alert(`${newPhone} exists`);
        } else {
            personService.createNew(personsObject).then((person) => {
                if (persons.some((person) => person.name === personsObject.name)) {
                    alert(`The ${newName} already exist in the phonebook`);
                } else if (persons.some((el) => el.phone === personsObject.phone)) {
                    alert(`The ${personsObject.phone} phone already exist in the phonebook`);
                } else if (personsObject.name === undefined || personsObject.phone === undefined) {
                    alert('The name or phone are required');
                } else {
                    setNames(persons.concat(person));
                    setNewName('');
                }
            });
        }
    };

    const deletePersonById = (element) => {
        if (window.confirm(`Delete ${element.name}?`)) {
            personService
                .deleteOne(element.id)
                .then(() => {
                    setNames(persons.filter((el) => el.id !== element.id));
                    alert(`${element.name} has been deleted successfully!`);
                })
                .catch((error) => {
                    alert(`${element.name} does not exist`);
                });
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                <Search filter={filter} onQueryChange={handleFilterchange} />
            </div>
            <h2>Add a new name or phone number</h2>
            <PersonForm
                onFormSubmit={addPerson}
                name={newName}
                onNameChange={handleNameChange}
                onPhoneChange={handlePhoneChange}
            />

            <h2>Numbers</h2>
            <ol>
                <Persons persons={persons} filter={filter} deletePersonById={deletePersonById} />
            </ol>
        </div>
    );
};
export default App;
