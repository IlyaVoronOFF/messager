import ScrollableFeed from 'react-scrollable-feed'
import './MessageList.style.scss';

export function MessageList({ msgList, name }) {

  return (
     <div className='msg-list'>
        <ScrollableFeed>
           {msgList.map((m) =>
           <div className={m.author !== name ? 'msg-post-left' : 'msg-post-right' }>
           <span>{ m.author}</span>
           <p>{ m.text}</p>
           </div>
        )}
        </ScrollableFeed>
     </div>
  )
}