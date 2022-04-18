import { ADD_GROUP, DEL_GROUP } from "./actions";

const initialGroup = [{
        id: 0,
        grpName: 'Группа 1',
    },
    {
        id: 1,
        grpName: 'Группа 2',
    },
    {
        id: 2,
        grpName: 'Группа 3',
    },
    {
        id: 3,
        grpName: 'Группа 4',
    }
];

export function groupReducer(state = initialGroup, { type, payload }) {
    switch (type) {
        case ADD_GROUP:
            {
                return [...state, payload]
            }
        case DEL_GROUP:
            {
                return state.filter(({ id }) => id !== payload)
            }
        default:
            return state;
    }
}