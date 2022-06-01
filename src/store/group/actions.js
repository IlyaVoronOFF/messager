import { onChildAdded, onChildRemoved, remove, set } from "firebase/database";
import { getGroupRefById, getMsgRefById, groupAddRef } from "../../services/firebase";

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

//firebase====================================================

let unsub;

export const initGroupListTrack = () => (dispatch) => {
    const unsubAdd = onChildAdded(groupAddRef, (snapshot) => {
        dispatch(addItemGroup(snapshot.val()));
        //console.log(snapshot.val())
    });
    const unsubDel = onChildRemoved(groupAddRef, (snapshot) => {
        dispatch(delItemGroup(snapshot.val().id));
        //console.log(snapshot.val().id)
    });

    unsub = () => {
        unsubAdd();
        unsubDel();
    };
}

export const stopGroupListTrack = () => () => {
    unsub();
}

export const setGroupDB = (id, value) => () => {
    set(getGroupRefById(id), value);
    set(getMsgRefById(id), { exists: true })
}

export const delGroupDB = (id) => () => {
    remove(getGroupRefById(id));
    remove(getMsgRefById(id));
}