import logo from './logo.svg';
import './App.css';
import { theme } from "./components/Theme/Theme";
import { Form } from './components/Form/Form';
import { MessageList } from "./components/MessageList/MessageList";
import { useEffect, useState } from 'react';
import { GroupList } from './components/GroupList/GroupList';
import { FormControlLabel, ThemeProvider } from '@mui/material';
import { MaterialUISwitch } from './components/SwitchTheme/SwitchTheme';

export default function App({ name }) {

    const msgList = [
        {
            id: 0,
            author: 'Messenger',
            text: name + ', добро пожаловать в чат!'
        }
    ];

    const grpArr = [
        {
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
        },
    ];
    
    const [msgArr, setMessages] = useState(msgList);
    const [styleTheme, setStyleTheme] = useState({ id: 0, style: theme.palette.primary.main });

    const addMessage = (text) => {
        setMessages([...msgArr, { id: msgArr.length, author: name, text: text }]);
    }

    const toggleTheme = () => {
        if (styleTheme.id === 0) {
            setStyleTheme({ id: 1, style: theme.palette.secondary.main });
        } else {
            setStyleTheme({ id: 0, style: theme.palette.primary.main });
        }
    }

    useEffect(() => {
        let willUnmount;

        if (msgArr.length && msgArr[msgArr.length - 1].author === name) {
            willUnmount = setTimeout(() => {
                setMessages([...msgArr, {id: msgArr.length, author: 'Robot', text: "Привет, " + name + "! Я добрый бот. Чем могу тебе помочь? 🙂🤖🖖🌞🌞🌞🌞🌞🌞🌞"}]);
            }, 1000);
        }
        return () => {
            clearTimeout(willUnmount);
        }
    }, [msgArr, name]);
    
    return (
        <div className="App" >
            <header className = "App-header" >
                <img src={logo} className="App-logo" alt="logo" />
                <ThemeProvider theme={theme}>
                    <div className='content-wrapper' style={{ backgroundColor: styleTheme.style }}>
                        <div className="content">
                            <div className="head">
                                <h3>MESSENGER</h3>
                                <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} />} onClick={ toggleTheme}/>
                            </div>
                        <div className="container">
                            <div className="group-container">
                                <GroupList grpList={ grpArr}/>
                            </div>
                            <div className='frame-msg'>
                                <MessageList msgList={msgArr} name={ name } />
                                <Form onSubmit={ addMessage }/>
                            </div>
                        </div>
                    </div>
                </div>
                </ThemeProvider>
            </header>
        </div>
    );
}