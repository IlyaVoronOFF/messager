import { onChildAdded, onValue, push } from "firebase/database";
import { getMsgRefById, getMsgsListRefById } from "../../services/firebase";

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

export const addItemMsg = (newMsg, id, idMsg) => ({
    type: ADD_MSG,
    payload: {
        newMsg,
        id,
        idMsg,
    }
})

let willUnmount;

export const addMsgReply = (newMsg, id, name) => async(dispatch, getState) => {
        //console.log(getState)
        push(getMsgsListRefById(id), newMsg);

        const robotMsg = {
            id: Date.now(),
            author: 'Robot🤖',
            text: `Привет, ${name} ! Я добрый бот. Чем могу тебе помочь? 🙂🖖🌞🌞🌞🌞🌞🌞🌞`,
        }

        if (newMsg.author === name) {
            clearTimeout(willUnmount);
            willUnmount = setTimeout(() => {
                push(getMsgsListRefById(id), robotMsg);
            }, 1000);
        }
    }
    //firebase=========================================================================
let unsub;

export const initArrMsgTrack = (id) => (dispatch) => {
    const unsubArrMsg = onValue(getMsgRefById(id), (snapshot) => {
        if (snapshot.val() !== null && snapshot.val().exists) {
            dispatch(addArrMsg(snapshot.key));
        } else {
            dispatch(delArrMsg(snapshot.key));
        }
        //console.log(snapshot.val() !== null && snapshot.val().exists)
    });
    const unsubListMsg = onChildAdded(getMsgsListRefById(id), (snapshot) => {
        dispatch(addItemMsg(snapshot.val(), id, snapshot.val().id));
        //console.log(snapshot.val(), id, snapshot.val().id);
    })

    unsub = () => {
        unsubArrMsg();
        unsubListMsg();
    };
}

export const stopArrMsgTrack = () => () => {
    unsub();
}