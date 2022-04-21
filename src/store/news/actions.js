import { apiUrl } from "../../utils/constants";

export const GET_NEWS_REQ = 'NEWS::GET_NEWS_REQ';
export const GET_NEWS_SUCC = 'NEWS::GET_NEWS_SUCC';
export const GET_NEWS_FAIL = 'NEWS::GET_NEWS_FAIL';

export const getNewsReq = () => ({
    type: GET_NEWS_REQ,
})

export const getNewsSucc = (data) => ({
    type: GET_NEWS_SUCC,
    payload: data,
})

export const getNewsFail = (error) => ({
    type: GET_NEWS_FAIL,
    payload: error
})

export const getNews = () => async(dispatch) => {
    try {
        dispatch(getNewsReq());

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Запрос не удался. Ошибка ${response.status}`);
        }
        const result = await response.json();

        dispatch(getNewsSucc(result))
    } catch (e) {
        console.log(e);
        dispatch(getNewsFail(e.message));
    }
}