import React, { useEffect, useRef, useState } from 'react';
import './Form.style.scss';

export function Form({ onSubmit }) {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  },[]);

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
        <input type='text' placeholder='Введите текст сообщения...' value={value} onChange={handleChange} ref={inputRef} required></input>
      <button type="submit">Отправить</button>
    </form>
  )
}