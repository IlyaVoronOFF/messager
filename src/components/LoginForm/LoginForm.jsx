import { useState } from "react";
import './LoginForm.style.scss';

export const LoginForm = ({onSubmit, isSignUp}) => {
   const [login, setLogin] = useState('');
   const [pass, setPass] = useState('');

   const handleChangeLogin = (e) => {
      setLogin(e.target.value);
   }

   const handleChangePass = (e) => {
      setPass(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ login, pass });
      setLogin('');
      setPass('');
   }

   const handleReset = () => {
      setLogin('');
      setPass('');
   }

   return (
      <form className="login-form" onSubmit={handleSubmit} onReset={handleReset}>
         <div className="content">
            <input type="email" value={login} onChange={handleChangeLogin} placeholder='Email' required/>
            <input type="password" value={pass} onChange={handleChangePass} placeholder='Пароль'required/>
            <div className="btn-loginform">
               <button type="reset">Отмена</button>
               <button type="submit">{isSignUp ? 'Регистрация':'Вход'}</button>
            </div>
         </div>
      </form>
   );
}