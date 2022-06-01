import { onValue, set } from "firebase/database";
import { getUserNameRefById, getUserRefById, getUserRoleRefById, getUserShowNameRefById } from "../../services/firebase";

export const TOGGLE_CHECKBOX = 'ACCOUNT::TOGGLE_CHECKBOX';
export const TOGGLE_ADMIN = 'ACCOUNT::TOGGLE_ADMIN';
export const SET_NAME = 'ACCOUNT::SET_NAME';

export const accountActions = (value) => ({
    type: TOGGLE_CHECKBOX,
    payload: value,
})

export const setAdmin = (value) => ({
    type: TOGGLE_ADMIN,
    payload: value,
})

export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
})

//firebase============================================================================

let unsub;

export const initAccountTrack = (id) => (dispatch) => {
    const unsubName = onValue(getUserNameRefById(id), (snapshot) => {
        dispatch(setName(snapshot.val()));
    });
    const unsubShowName = onValue(getUserShowNameRefById(id), (snapshot) => {
        dispatch(accountActions(snapshot.val()));
    });
    const unsubRole = onValue(getUserRoleRefById(id), (snapshot) => {
        dispatch(setAdmin(snapshot.val()));
    });

    unsub = () => {
        unsubName();
        unsubShowName();
        unsubRole();
    }
}

export const stopAccountTrack = () => () => {
    unsub();
}

export const setUserDB = (id, value) => () => {
    set(getUserRefById(id), value);
}

export const setNameDB = (id, text) => () => {
    set(getUserNameRefById(id), text);
}

export const setShowNameDB = (id, value) => () => {
    set(getUserShowNameRefById(id), value);
}

export const setAdminDB = (id, value) => () => {
    set(getUserRoleRefById(id), value);
}