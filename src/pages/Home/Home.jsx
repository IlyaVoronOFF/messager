import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { auth, logIn, signUp } from '../../services/firebase';
import { setUserDB } from '../../store/account/actions';
import './Home.style.scss';

export function Home({ authed, isSignUp }) {
   const [error, setError] = useState('');
   const dispatch = useDispatch();

   const handleSubmit = async({ login, pass }) => {
      try {
         if (isSignUp) {
            await signUp(login, pass);
            dispatch(setUserDB(auth.currentUser.uid, {
               id: auth.currentUser.uid,
               login,
               pass,
               name: login,
               admin: false,
               showName: true
            }));
         } else {
            await logIn(login, pass);
         }
      } catch (e) {
         setError(e.message);
      }
   }

   useEffect(() => {
      setError('');
   },[isSignUp])

   return (
      <div className='home-page'>
         <div className="home-header">
            <h4>Главная</h4>
            <button>
               <Link to={isSignUp ? '/' : '/signup'} >
                  {isSignUp ? 'Войти' : 'Зарегистрироваться'}
               </Link>
            </button>
         </div>
         <div className="home-hendler">
            {!authed && <h5>Для использования чатов нужно авторизоваться.</h5>}
            {error && <h6>{error}</h6>}
         </div>
         <div className="home-content">
            <LoginForm onSubmit={handleSubmit} isSignUp={isSignUp}/>
         </div>
      </div>
   );
}