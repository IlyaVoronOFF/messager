import './Chat.style.scss';
import { MessageList } from '../../components/MessageList/MessageList';
import { Form } from '../../components/Form/Form';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectMsgByGrpId } from '../../store/message/selectors';
import { addMsgReply } from '../../store/message/actions';
import { useMemo } from 'react';

export function Chat({ name }) {

    const { id } = useParams();
    const getMsg = useMemo(()=>selectMsgByGrpId(id),[id])
    const messages = useSelector(getMsg);
    const dispatch = useDispatch();

    const addMessage = (newMsg) => {
        dispatch(addMsgReply(newMsg, id, name));
    }

    const sendMessage = (text) => {
        const newMsg = {
                id: messages.length,
                author: name,
                text};

        addMessage(newMsg);
    }

    // useEffect(() => {
    //     let willUnmount;
    //     const lastMessage = messages?.[messages?.length - 1];
    //     const robotMsg = {
    //         id: messages?.length,
    //         author: 'Robot',
    //         text: "Привет, " + name + "! Я добрый бот. Чем могу тебе помочь? 🙂🤖🖖🌞🌞🌞🌞🌞🌞🌞"
    //     }

    //     if (lastMessage?.author === name) {
    //         willUnmount = setTimeout(() => {
    //             addMessage(robotMsg);
    //         }, 1000);
    //     }
    //     return () => {
    //         clearTimeout(willUnmount);
    //     }
    // }, [messages, name]);

    return (
        <div className='frame-msg'>
            {!messages ?
                <h4>Такой группы нет</h4>
                : 
                <>
                    <MessageList msgList={messages} name={ name } />
                    <Form onSubmit={ sendMessage }/>
                </>}
        </div>
        );
    }