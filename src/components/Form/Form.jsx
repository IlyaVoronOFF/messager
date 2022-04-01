import React, { useState } from 'react';
import './Form.style.scss';

export function Form({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Введите текст сообщения...' value={value} onChange={handleChange} required></input>
      <button type="submit">Отправить</button>
    </form>
  )
}

// export class Message extends React.Component {
//   constructor(props) {
//      super(props);
//      this.placeholder = this.props.placeholder;
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Отправленный email: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Email<span>*</span>:
//           </label>
//           <input type="email" placeholder={this.placeholder} value={this.state.value} onChange={this.handleChange} required/>
//         <button type="submit" >Отправить</button>
//       </form>
//     );
//   }
// }