import ScrollableFeed from 'react-scrollable-feed'
import { Message } from '../Message/Message';
import './MessageList.style.scss';

export function MessageList({ msgList, name }) {

  return (
     <div className='msg-list'>
        <ScrollableFeed>
           {msgList.map((m) =>
              <Message key={m.id} author={m.author} text={m.text} meName={name}/>
        )}
        </ScrollableFeed>
     </div>
  )
}