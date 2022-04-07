import React from 'react';
import '../styles/input.css';

export default function Input({ value, setValue, placeholderText, maxLength, ID, type, error }) {
  return (
    <textarea
      type='text'
      className='body-s input'
      maxLength={maxLength}
      placeholder={placeholderText}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      name={ID}
      id={ID}
    />
  );
}
