import { SET_NAME, TOGGLE_ADMIN, TOGGLE_CHECKBOX } from "./actions";

const initialState = {}

export function accountReducer(state = initialState, { type, payload }) {
    switch (type) {
        case TOGGLE_CHECKBOX:
            {
                if (state.showName !== payload) {
                    return {
                        ...state,
                        showName: !state.showName,
                    }
                } else {
                    return state;
                }
            }
        case TOGGLE_ADMIN:
            {
                if (state.admin !== payload) {
                    return {
                        ...state,
                        admin: !state.admin,
                    }
                } else {
                    return state;
                }
            }
        case SET_NAME:
            {
                return {
                    ...state,
                    name: payload,
                }
            }
        default:
            return state;
    }
}