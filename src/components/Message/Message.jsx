import './Message.style.scss';

export function Message({ author, text }) {
   return (
      <div className={author === 'Robot🤖' ? 'msg-post-left' : 'msg-post-right'}>
           <span>{ author}</span>
           <p>{ text}</p>
      </div>
   )
}