import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MYNAME } from './store/constants.js';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode >
            <BrowserRouter>
                <App userName = { MYNAME }/> 
            </BrowserRouter>
        </React.StrictMode > 
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();