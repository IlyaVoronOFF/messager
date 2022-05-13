import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../store/news/actions";
import { selectNews, selectNewsFail, selectNewsStatus } from "../../store/news/selectors";
import { FETCH_STATUSES } from "../../utils/constants";
import './News.style.scss';

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
      <div className="news-page">
         <div className="news-header">
            <h4>Тип крипты</h4>
            <button onClick={sendRequest}>Обновить список</button>
         </div>
         <div className="news-hendler">
            {status === FETCH_STATUSES.REQ && <CircularProgress style={{color: '#62dafb'}}/>}
            {error && <h5>{error}</h5>}
         </div>
         <div className="news-content">
            <ol>
               {news.slice(0,20).map((e) => (
                  <li key={e.id}>{ e.name + ' (' + e.symbol + '): ' + e.type}</li>
               ))}
            </ol>
         </div>
      </div>
   );
}