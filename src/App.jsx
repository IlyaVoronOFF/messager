import logo from './logo.svg';
import './App.css';
import { FormControlLabel, ThemeProvider } from '@mui/material';
import { MaterialUISwitch } from './components/SwitchTheme/SwitchTheme';
import { useEffect, useState } from 'react';
import { theme } from './components/Theme/Theme';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Account } from './pages/Account/Account';
import { Home } from './pages/Home/Home';
import { Chat } from './pages/Chat/Chat';
import { GroupList } from './components/GroupList/GroupList';
import { Route404 } from './pages/Route404/Route404';
import { News } from './pages/News/News';
import { classActive } from './utils/constants';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';
import { PrivateRoutePage } from './pages/PrivateRoutePage/PrivateRoutePage';

export default function App() {
    
    const [styleTheme, setStyleTheme] = useState({ id: 0, style: theme.palette.primary.main });
    const [authed, setAuthed] = useState(false);

    const toggleTheme = () => {
        if (styleTheme.id === 0) {
            setStyleTheme({ id: 1, style: theme.palette.secondary.main });
        } else {
            setStyleTheme({ id: 0, style: theme.palette.primary.main });
        }
    }

    const handleAuth = () => {
        setAuthed(true);
    }

    const handleLogout = () => {
        setAuthed(false);
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                handleAuth();
            } else {
                handleLogout();
            }
        });

        return unsub;
    },[])

    return (
            <div className="app" >
            <header className = "app-header" >
                <img src={logo} className="app-logo" alt="logo" />
                <ThemeProvider theme={theme}>
                    <div className='content-wrapper' style={{ backgroundColor: styleTheme.style }}>
                        <div className="content">
                            <FormControlLabel id='switchTheme' control={<MaterialUISwitch sx={{ m: 1 }} />} onClick={ toggleTheme}/>
                            <div className="head">
                                <h2 className='title'>MESSENGER</h2>
                            </div>
                            <div className="nav">
                                <ul>
                                    <li>
                                        <NavLink to='/' className={classActive}>
                                            Главная
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/chat' >
                                            Чаты
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/news' >
                                            Новости
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/account' >
                                            Профиль
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="container">
                                <Routes>
                                    <Route path='/' element={<PublicRoute authed={authed}/>}>
                                        <Route path='' element={<Home authed={authed} />} />
                                        <Route path='signup' element={<Home authed={authed} isSignUp/>} />
                                    </Route>
                                    <Route path='/chat' element={<GroupList />}>
                                        <Route path=':id' element={<Chat />} />
                                    </Route>
                                    <Route path='/news' element={<News />} />
                                    <Route path='/account' element={<PrivateRoute authed={authed }/>}>
                                        <Route path='' element={<Account/>}/>
                                    </Route>
                                    <Route path='/private' element={<PrivateRoutePage/>}/>
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