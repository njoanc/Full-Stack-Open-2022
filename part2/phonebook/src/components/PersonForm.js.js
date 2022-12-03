import React from 'react';

const PersonForm = ({ onFormSubmit, onNameChange, onPhoneChange, name, number }) => {
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div>
                    Name:{' '}
                    <input type="text" value={name} placeholder="name" onChange={onNameChange} />
                    <br />
                    <br />
                    Phone:{' '}
                    <input
                        type="text"
                        placeholder="phone number"
                        value={number}
                        onChange={onPhoneChange}
                    />
                    <br />
                    <br />
                    <button type="submit">Add </button>
                </div>
            </form>
        </div>
    );
};

export default PersonForm;
