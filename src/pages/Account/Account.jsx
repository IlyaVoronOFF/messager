import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Form } from "../../components/Form/Form";
import { auth, logOut } from "../../services/firebase";
import { initAccountTrack, setAdminDB, setNameDB, setShowNameDB, stopAccountTrack } from "../../store/account/actions";
import { selectName, selectRole, selectShowName } from "../../store/account/selectors";
import './Account.style.scss';

export function Account() {
   const userId = auth.currentUser.uid;
   const name = useSelector(selectName);
   const showName = useSelector(selectShowName);
   const admin = useSelector(selectRole);
   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(setShowNameDB(userId, !showName));
   }

   const handleClickAdmin = () => {
      dispatch(setAdminDB(userId, !admin));
   }

   const handleSubmit = (text) => {
      dispatch(setNameDB(userId, text));
   }

   useEffect(() => {
      dispatch(initAccountTrack(userId));

      return () => {
         dispatch(stopAccountTrack());
      }
   },[dispatch, userId])

   return (
      <div className="acc-page">
         <div className="acc-header">
            <h4>Профиль</h4>
            <button onClick={logOut}>Выйти</button>
         </div>
         <div className="acc-content">
            <p>Ваше имя: {showName && <span>{name}</span>}</p>
            <label>Показать/Скрыть имя <input type="checkbox" checked={showName} value={showName} onChange={handleClick} /></label>
            <label>Админ <input type="checkbox" style={{width: 'auto'}} checked={admin} value={admin} onChange={handleClickAdmin} /></label>
            <Form onSubmit={handleSubmit}/>
         </div>
      </div>
   )
}