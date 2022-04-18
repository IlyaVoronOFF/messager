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

export function messageReducer(state = initialMsg, { type, payload, idGrp }) {
    switch (type) {
        case ADD_MSG:
            {
                return {...state, [idGrp]: [...state[idGrp], payload] }
            }
        case ADD_ARR_MSG:
            {
                return {...state, [idGrp]: [] }
            }
        case DEL_ARR_MSG:
            {
                delete state[idGrp];
                return state
            }
        default:
            return state;
    }
}