import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <React.StrictMode >
                <BrowserRouter>
                    <App/> 
                </BrowserRouter>
            </React.StrictMode >
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();