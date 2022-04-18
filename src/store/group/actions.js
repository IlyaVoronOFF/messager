export const ADD_GROUP = 'GROUP::ADD_GROUP';
export const DEL_GROUP = 'GROUP::DEL_GROUP';

export const addItemGroup = (newGrp) => ({
    type: ADD_GROUP,
    payload: newGrp,
})

export const delItemGroup = (idGrp) => ({
    type: DEL_GROUP,
    payload: idGrp,
})