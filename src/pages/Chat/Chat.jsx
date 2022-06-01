import './Chat.style.scss';
import { MessageList } from '../../components/MessageList/MessageList';
import { Form } from '../../components/Form/Form';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectGrpNameByGrpId, selectMsgByGrpId } from '../../store/message/selectors';
import { addMsgReply, initArrMsgTrack, stopArrMsgTrack } from '../../store/message/actions';
import { useEffect, useMemo } from 'react';
import { selectName } from '../../store/account/selectors';
import { auth } from '../../services/firebase';

export function Chat() {

    const { id } = useParams();
    const getGrp = useMemo(() => selectGrpNameByGrpId(id), [id])
    const getGrpName = useSelector(getGrp);
    const getMsg = useMemo(()=>selectMsgByGrpId(id),[id])
    const messages = useSelector(getMsg);
    const user = useSelector(selectName);
    const dispatch = useDispatch();

    const addMessage = (newMsg) => {
        dispatch(addMsgReply(newMsg, id, user));
    }

    const sendMessage = (text) => {
        const newMsg = {
                id: Date.now(),
                author: user,
                text};
        addMessage(newMsg);
    }

    useEffect(() => {
        dispatch(initArrMsgTrack(id));

        return () => {
            dispatch(stopArrMsgTrack());
        }
    },[dispatch, id])

    return (
        <div className='frame-msg'>
            {!messages ?
                <h4>Такой группы нет</h4>
                : 
                <>
                    <div className="head-name-grp">
                        <h5>{getGrpName?.grpName}</h5>
                    </div>
                    <MessageList msgList={messages} name={ user.name } />
                    {auth?.currentUser?.uid && <Form onSubmit={sendMessage} />}
                </>}
        </div>
        );
    }