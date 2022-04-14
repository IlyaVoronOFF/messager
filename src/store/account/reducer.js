import { MYNAME } from "../CONSTANTS";
import { TOGGLE_CHECKBOX } from "./actions";

const initialState = {
    showName: false,
    name: MYNAME,
}

export function accountReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_CHECKBOX:
            {
                return {
                    ...state,
                    showName: !state.showName,
                }
            }
        default:
            return state;
    }
}