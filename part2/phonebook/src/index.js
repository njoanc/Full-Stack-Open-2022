import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import persons from './data/data';


ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons}/>);
