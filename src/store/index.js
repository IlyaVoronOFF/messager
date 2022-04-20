import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from "redux-persist/es/stateReconciler/hardSet";

import { accountReducer } from "./account/reducer";
import { groupReducer } from "./group/reducer";
import { messageReducer } from "./message/reducer";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['account'],
    stateReconciler: hardSet
}


const rootReducer = combineReducers({
    account: accountReducer,
    group: groupReducer,
    message: messageReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);