import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const myName = 'Илья';

ReactDOM.render(
    <React.StrictMode >
        <BrowserRouter>
            <App userName = { myName }/> 
        </BrowserRouter>
    </React.StrictMode > ,
    document.getElementById('root')
);

reportWebVitals();