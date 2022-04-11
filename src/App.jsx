import logo from './logo.svg';
import './App.css';
import { FormControlLabel, ThemeProvider } from '@mui/material';
import { MaterialUISwitch } from './components/SwitchTheme/SwitchTheme';
import { useState } from 'react';
import { theme } from './components/Theme/Theme';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { Account } from './pages/Account/Account';
import { Home } from './pages/Home/Home';
import { Chat } from './pages/Chat/Chat';
import { GroupList } from './components/GroupList/GroupList';
import { Route404 } from './pages/Route404/Route404';

export default function App({ userName }) {

    const listGrpMsg = [{
            id: 0,
            grpName: 'Группа 1',
            0: [{
                id: 0,
                author: 'Messenger',
                text: userName + ', добро пожаловать в чат!'
            }]
        },
        {
            id: 1,
            grpName: 'Группа 2',
            1: [],
        },
        {
            id: 2,
            grpName: 'Группа 3',
            2: [],
        },
        {
            id: 3,
            grpName: 'Группа 4',
            3: [],
        },
   ];
    
    const [styleTheme, setStyleTheme] = useState({ id: 0, style: theme.palette.primary.main });
    const [arrGroups, setGroups] = useState(listGrpMsg);
    const { id } = useParams();
   
    const addItem = () => {
        setGroups([...arrGroups, { id: arrGroups.length, grpName: `Группа ${++arrGroups.length}`, [arrGroups.length - 1]: [] }])
       console.log(arrGroups)
    }
    
    const delItem = () => {
        setGroups([...arrGroups.slice(0, [id]), ...arrGroups.slice([id] + 1)]);
        console.log(arrGroups)
    }

    const toggleTheme = () => {
        if (styleTheme.id === 0) {
            setStyleTheme({ id: 1, style: theme.palette.secondary.main });
        } else {
            setStyleTheme({ id: 0, style: theme.palette.primary.main });
        }
    }

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
                            <div className="nav">
                                <ul>
                                    <li>
                                        <NavLink to='/' style={({isActive})=>({color: isActive ? 'green' : 'blue'})}>
                                            Главная
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/chat' style={({isActive})=>({color: isActive ? 'green' : 'blue'})}>
                                            Чаты
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/account' style={({isActive})=>({color: isActive ? 'green' : 'blue'})}>
                                            Профиль
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="container">
                                <Routes>
                                    <Route path='/' element={<Home />} />
                                    <Route path='/chat' element={<GroupList grpList={arrGroups} addItem={addItem} delItem={ delItem}/>}>
                                        <Route path=':id' element={<Chat initMessages={arrGroups} name={userName} />} />
                                    </Route>
                                    <Route path='/account' element={<Account />} />
                                    <Route path='*' element={<Route404/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </ThemeProvider>
            </header>
        </div>
    );
}