import './Chat.style.scss';
import { useEffect, useState } from "react";
import { MessageList } from '../../components/MessageList/MessageList';
import { Form } from '../../components/Form/Form';
import { useParams } from "react-router-dom";

export function Chat({ initMessages, name }) {

    const [msgArr, setMessages] = useState(initMessages);
    const { id } = useParams();

    const addMessage = (newMsg) => {
        setMessages({ ...msgArr, [id]: { [id]: [...msgArr[id][id], newMsg] } });
    }

    const sendMessage = (text) => {
        addMessage({ id: msgArr[id][id].length, author: name, text });
    }

    useEffect(() => {
        let willUnmount;
        const lastMessage = msgArr[id][id]?.[msgArr[id][id]?.length - 1];

        if (lastMessage?.author === name) {
            willUnmount = setTimeout(() => {
                addMessage({ id: msgArr[id][id].length, author: 'Robot', text: "Привет, " + name + "! Я добрый бот. Чем могу тебе помочь? 🙂🤖🖖🌞🌞🌞🌞🌞🌞🌞" });
            }, 1000);
        }
        return () => {
            clearTimeout(willUnmount);
        }
    }, [msgArr, name]);

    return (
        <div className='frame-msg'>
            {!msgArr[id] ?
                <h4>Такой группы нет</h4>
                : 
                <>
                    <MessageList msgList={msgArr[id][id]} name={ name } />
                    <Form onSubmit={ sendMessage }/>
                </>}
            </div>
        );
    }