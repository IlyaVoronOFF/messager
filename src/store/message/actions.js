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

let willUnmount;

export const addMsgReply = (newMsg, id, name) => (dispatch, getState) => {
    // const state = getState();
    // console.log(state)

    dispatch(addItemMsg(newMsg, id));

    const robotMsg = {
        id: Date.now(),
        author: 'Robot',
        text: "Привет, " + name + "! Я добрый бот. Чем могу тебе помочь? 🙂🤖🖖🌞🌞🌞🌞🌞🌞🌞"
    }

    if (newMsg.author === name) {
        clearTimeout(willUnmount);
        willUnmount = setTimeout(() => {
            dispatch(addItemMsg(robotMsg, id));
        }, 1000);
    }
}