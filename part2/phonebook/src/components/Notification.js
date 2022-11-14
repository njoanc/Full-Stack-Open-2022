import React from 'react';

const Notification = ({ message, errorToggle }) => {
    if (message) {
        return <div className={errorToggle ? 'error notice' : 'success notice'}>{message}</div>;
    } else {
        return null;
    }
};

export default Notification;
