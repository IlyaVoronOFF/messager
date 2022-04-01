import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form/Form';
import { MessageList } from "./components/MessageList/MessageList";
import { useEffect, useState } from 'react';

export default function App({ name }) {

    const msgList = [
        {
            author: 'Messenger',
            text: name + ', добро пожаловать в чат!'
        }
    ];
    
    const [msgArr, setMessages] = useState(msgList);

    const addMessage = (text) => {
        setMessages([...msgArr, {author: name, text: text}]);
    }

    useEffect(() => {
        let willUnmount;

        if (msgArr.length && msgArr[msgArr.length - 1].author === name) {
            willUnmount = setTimeout(() => {
                setMessages([...msgArr, {author: 'Robot', text: "Привет, " + name + "! Я добрый бот. Чем могу тебе помочь? 🙂🤖🖖🌞🌞🌞🌞🌞🌞🌞"}]);
            }, 1000);
        }
        return () => {
            clearTimeout(willUnmount);
        }
    },[msgArr, name]);
    
    return (
        <div className="App" >
            <header className = "App-header" >
                <img src={logo} className="App-logo" alt="logo" />
                <div className='content-wrapper'>
                    <div className="content">
                        <h3>MESSENGER</h3>
                        <div className='frame-msg'>
                            <MessageList msgList={msgArr} name={ name }/>
                            <Form onSubmit={ addMessage }/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}