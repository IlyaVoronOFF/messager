import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Form } from "../../components/Form/Form";
import { accountActions, setName } from "../../store/account/actions";
import { selectName, selectShowName } from "../../store/account/selectors";
import './Account.style.scss';

export function Account() {
   const showName = useSelector(selectShowName);
   const name = useSelector(selectName);
   const dispatch = useDispatch();

   const handleClick = useCallback(() => {
      dispatch(accountActions);
   }, [dispatch])

   const handleSubmit = (text) => {
      dispatch(setName(text));
   }

   return (
      <div className="account">
         <h4>Профиль</h4>
         <p>Ваше имя: {showName && <span>{name}</span>}</p>
         <label>Показать/Скрыть имя <input type="checkbox" checked={showName} value={showName} onChange={handleClick} /></label>
         <Form onSubmit={handleSubmit}/>
      </div>
   )
}