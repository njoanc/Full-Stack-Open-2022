import React, { useEffect, useState } from 'react';
// import axios from "axios";
import PersonForm from './components/PersonForm.js';
import Search from './components/Search';
import Persons from './components/Persons';
import personService from './services/persons';
import Notification from './components/Notification.js';
import './index.css';

const App = () => {
    const [persons, setNames] = useState([]);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [filter, setFilter] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const phoneValidation = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    const [error, setError] = useState(false);

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
            alert(` The name and phone number fields are required`);
            return;
        }
        if (!phoneValidation.test(newPhone)) {
            alert(
                ` phone number should be valid like: (123) 456-7890,(123)456-7890,123-456-7890,1234567890, `
            );
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

                personService
                    .updateOne(data.id, copyData)
                    .then((item) => {
                        setNames(persons.map((person) => (person.id === data.id ? person : item)));
                        setNewName('');
                        setNewPhone('');
                    })
                    .then((message) => {
                        setErrorMessage(`${newName}'s phone number  has  been updated`);
                        setTimeout(() => {
                            setErrorMessage(null);
                        }, 5000);
                    })
                    .catch((error) => {
                        setError(true);
                        setErrorMessage(`${newName} does not exist`);
                        setTimeout(() => {
                            setErrorMessage(null);
                            setError(false);
                        }, 5000);
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
                    setNewPhone('');
                    setErrorMessage(
                        `The ${newName} and ${newPhone} has been added in the phonebook`
                    );
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
                    setErrorMessage(`${element.name} has been deleted successfully!`);
                })
                .catch((error) => {
                    setErrorMessage(
                        `Information of ${element.name} has already been removed from server`
                    );
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
            <Notification message={errorMessage} errorToggle={error} />

            <h2>Numbers</h2>
            <ol>
                <Persons persons={persons} filter={filter} deletePersonById={deletePersonById} />
            </ol>
        </div>
    );
};
export default App;
