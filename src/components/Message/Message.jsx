import './Message.style.scss';

export function Message({ author, text, meName }) {
   return (
      <div className={author !== meName ? 'msg-post-left' : 'msg-post-right'}>
           <span>{ author}</span>
           <p>{ text}</p>
      </div>
   )
}