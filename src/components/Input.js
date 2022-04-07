import React from 'react';
import '../styles/input.css';

export default function Input({ value, setValue, placeholderText, maxLength, ID, type, error }) {
  return (
    <>
      {type === 'text' && (
        <input
          type='text'
          className={`body-s input text ${error ? 'error' : ''}`}
          maxLength={maxLength}
          placeholder={placeholderText}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name={ID}
          id={ID}
        />
      )}
      {type === 'textarea' && (
        <textarea
          type='text'
          className={`body-s input ${error ? 'error' : ''}`}
          maxLength={maxLength}
          placeholder={placeholderText}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name={ID}
          id={ID}
        />
      )}
    </>
  );
}
