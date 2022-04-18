import { combineReducers, createStore } from "redux";
import { accountReducer } from "./account/reducer";
import { groupReducer } from "./group/reducer";
import { messageReducer } from "./message/reducer";

const rootReducer = combineReducers({
    account: accountReducer,
    group: groupReducer,
    message: messageReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());