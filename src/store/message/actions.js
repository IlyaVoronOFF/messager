export const ADD_ARR_MSG = 'MESSAGE::ADD_ARR_MSG';
export const DEL_ARR_MSG = 'MESSAGE::DEL_ARR_MSG';
export const ADD_MSG = 'MESSAGE::ADD_MSG';

export const addArrMsg = (id) => ({
    type: ADD_ARR_MSG,
    payload: id,
})

export const delArrMsg = (id) => ({
    type: DEL_ARR_MSG,
    payload: id,
})

export const addItemMsg = (newMsg, id) => ({
    type: ADD_MSG,
    payload: {
        newMsg,
        id
    }
})