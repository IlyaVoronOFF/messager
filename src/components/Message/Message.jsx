import React from 'react';
import './Message.style.scss';

export class Message extends React.Component {
  constructor(props) {
     super(props);
     this.placeholder = this.props.placeholder;
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Отправленный email: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email<span>*</span>:
          </label>
          <input type="email" placeholder={this.placeholder} value={this.state.value} onChange={this.handleChange} required/>
        <button type="submit" >Отправить</button>
      </form>
    );
  }
}