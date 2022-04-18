import './Chat.style.scss';
import { MessageList } from '../../components/MessageList/MessageList';
import { Form } from '../../components/Form/Form';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectMsg } from '../../store/message/selectors';
import { addItemMsg } from '../../store/message/actions';
import { useEffect } from 'react';

export function Chat({ name }) {

    const { id } = useParams();
    const messages = useSelector(selectMsg);
    const dispatch = useDispatch();

    const addMessage = (newMsg) => {
        dispatch(addItemMsg(newMsg, id));
    }

    const sendMessage = (text) => {
        const newMsg = {
                id: messages[id].length,
                author: name,
                text};

        addMessage(newMsg);
    }

    useEffect(() => {
        let willUnmount;
        const lastMessage = messages[id]?.[messages[id]?.length - 1];
        const robotMsg = {
            id: messages[id]?.length,
            author: 'Robot',
            text: "Привет, " + name + "! Я добрый бот. Чем могу тебе помочь? 🙂🤖🖖🌞🌞🌞🌞🌞🌞🌞"
        }

        if (lastMessage?.author === name) {
            willUnmount = setTimeout(() => {
                addMessage(robotMsg);
            }, 1000);
        }
        return () => {
            clearTimeout(willUnmount);
        }
    }, [messages, name]);

    return (
        <div className='frame-msg'>
            {!messages[id] ?
                <h4>Такой группы нет</h4>
                : 
                <>
                    <MessageList msgList={messages[id]} name={ name } />
                    <Form onSubmit={ sendMessage }/>
                </>}
        </div>
        );
    }