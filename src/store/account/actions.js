export const TOGGLE_CHECKBOX = 'ACCOUNT::TOGGLE_CHECKBOX';
export const SET_NAME = 'ACCOUNT::SET_NAME';

export const accountActions = {
    type: TOGGLE_CHECKBOX,
}

export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
})