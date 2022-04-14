import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { accountActions } from "../../store/account/actions";
import './Account.style.scss';

export function Account() {
   const { showName, name } = useSelector((state) => state);
   const dispatch = useDispatch();

   const handleClick = useCallback(() => {
      dispatch(accountActions);
   }, [dispatch])

   return (
      <div className="account">
         <h4>Профиль</h4>
         <p>Ваше имя: {showName && <span>{name}</span>}</p>
         <label>Показать/Скрыть имя <input type="checkbox" checked={showName} value={showName} onChange={handleClick}/></label>
      </div>
   )
}