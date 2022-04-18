import { ADD_ARR_MSG, ADD_MSG, DEL_ARR_MSG } from "./actions";

const initialMsg = {
    0: [{
        id: 0,
        author: 'Messenger',
        text: 'Илья, добро пожаловать в чат!'
    }],
    1: [],
    2: [],
    3: [],
};

export function messageReducer(state = initialMsg, { type, payload }) {
    switch (type) {
        case ADD_MSG:
            {
                return {...state, [payload.id]: [...state[payload.id], payload.newMsg] }
            }
        case ADD_ARR_MSG:
            {
                return {...state, [payload]: [] }
            }
        case DEL_ARR_MSG:
            {
                const obj = {...state };
                delete obj[payload];
                return obj
            }
        default:
            return state;
    }
}