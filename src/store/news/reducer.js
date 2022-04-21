import { FETCH_STATUSES } from "../../utils/constants";
import { GET_NEWS_FAIL, GET_NEWS_REQ, GET_NEWS_SUCC } from "./actions";

const initialNews = {
    data: [],
    status: FETCH_STATUSES.IDLE,
    error: null,
};

export function newsReducer(state = initialNews, { type, payload }) {
    switch (type) {
        case GET_NEWS_REQ:
            {
                return {...state, status: FETCH_STATUSES.REQ, error: null }
            }
        case GET_NEWS_SUCC:
            {
                return {...state, status: FETCH_STATUSES.SUCC, data: payload }
            }
        case GET_NEWS_FAIL:
            {
                return {...state, status: FETCH_STATUSES.FAIL, error: payload }
            }
        default:
            return state;
    }
}