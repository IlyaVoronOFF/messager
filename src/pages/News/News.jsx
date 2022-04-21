import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../store/news/actions";
import { selectNews, selectNewsFail, selectNewsStatus } from "../../store/news/selectors";
import { FETCH_STATUSES } from "../../utils/constants";

export function News() {

   const dispatch = useDispatch();
   const news = useSelector(selectNews);
   const error = useSelector(selectNewsFail);
   const status = useSelector(selectNewsStatus);

   const sendRequest = () => {
      dispatch(getNews());
   }

   useEffect(() => {
      sendRequest();
   },[]);

   return (
      <>
         <h4>Новости</h4>
         <button onClick={sendRequest}>Обновить список</button>
         {status === FETCH_STATUSES.REQ && <CircularProgress />}
         {error && <h5>{error}</h5>}
         <div>
            <ul>
               {news.map((e) => (
                  <li key={e.id}>{ e.title }</li>
               ))}
            </ul>
         </div>
      </>
   );
}