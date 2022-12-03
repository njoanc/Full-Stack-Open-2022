import React, { useEffect, useState, useRef, useMemo } from 'react';
import PersonForm from './components/PersonForm.js';
import Search from './components/Search';
import Persons from './components/Persons';
import personService from './services/persons';
import Notification from './components/Notification.js';
import './index.scss';
import LoginForm from './components/LoginForm.js';
import loginService from './services/login';
import Togglable from './components/Togglable.js';
import Pagination from './components/Pagination';
let PageSize = 10;
const App = () => {
    const [persons, setNames] = useState([]);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [filter, setFilter] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const phoneValidation = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    const [error, setError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const personFormRef = useRef();
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return persons.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value);
    };

    const handleFilterchange = (event) => {
        setFilter(event.target.value);
    };

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onSubmitLoginHandle = async (event) => {
        event.preventDefault();

        try {
            const user = await loginService.login({ username, password });
            window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user));
            personService.setToken(user.token);
            setUser(user);
            setUsername('');
            setPassword('');
        } catch (exception) {
            setErrorMessage('Wrong credentials');
            setTimeout(() => {
                setErrorMessage(null);
            }, 5000);
        }
    };

    const handleLogout = async (event) => {
        event.preventDefault();
        window.localStorage.clear();
    };

    useEffect(() => {
        personService.getAll().then((person) => {
            setNames(person);
        });
    }, []);
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedPhonebookappUser');
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            setUser(user);
            personService.setToken(user.token);
        }
    }, []);

    const addPerson = (event) => {
        event.preventDefault();
        const personsObject = {
            number: newPhone,
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
        if (data && data.name === newName && data.number !== newPhone) {
            if (
                window.confirm(
                    `The ${newName} already has a phone number, replace it with the new one?`
                )
            ) {
                //copy data object and update the phone value
                const copyData = { ...data, number: newPhone };

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
        } else if (data && data.number === newPhone) {
            alert(`${newPhone} exists`);
        } else {
            personFormRef.current.toggleVisibility();
            personService.createNew(personsObject).then((person) => {
                if (persons.some((person) => person.name === personsObject.name)) {
                    alert(`The ${newName} already exist in the phonebook`);
                } else if (persons.some((el) => el.number === personsObject.number)) {
                    alert(`The ${personsObject.number} phone already exist in the phonebook`);
                } else if (personsObject.name === undefined || personsObject.number === undefined) {
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
            <Notification message={errorMessage} errorToggle={error} />
            {!user ? (
                <div>
                    <Togglable buttonLabel="login">
                        <LoginForm
                            username={username}
                            password={password}
                            onChangeUsername={onChangeUsername}
                            onChangePassword={onChangePassword}
                            handleLogin={onSubmitLoginHandle}
                        />
                    </Togglable>
                </div>
            ) : (
                <div>
                    <Togglable buttonLabel="new person" ref={personFormRef}>
                        <p style={{ color: 'green' }}>{user.username} logged-in</p>
                        <button onClick={handleLogout}>Logout</button>
                        <h2>Add a new name or phone number</h2>
                        <PersonForm
                            onFormSubmit={addPerson}
                            name={newName}
                            onNameChange={handleNameChange}
                            onPhoneChange={handlePhoneChange}
                        />
                    </Togglable>
                </div>
            )}

            <br></br>

            <Togglable buttonLabel="List of persons">
                <div>
                    <Search filter={filter} onQueryChange={handleFilterchange} />
                    <h2>Numbers</h2>
                    <ol>
                        <Persons
                            persons={persons}
                            filter={filter}
                            deletePersonById={deletePersonById}
                        />
                    </ol>
                </div>
            </Togglable>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={persons.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
};
export default App;
