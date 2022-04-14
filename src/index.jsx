import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MYNAME } from './store/CONSTANTS.js';

ReactDOM.render(
    <React.StrictMode >
        <BrowserRouter>
            <App userName = { MYNAME }/> 
        </BrowserRouter>
    </React.StrictMode > ,
    document.getElementById('root')
);

reportWebVitals();