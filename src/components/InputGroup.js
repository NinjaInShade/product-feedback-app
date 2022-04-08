import React from 'react';
import '../styles/input-group.css';
import Input from './Input';

export default function InputGroup({
  label,
  description,
  ID,
  value,
  setValue,
  placeholderText,
  maxLength,
  type,
  error,
  dropdownSelections,
}) {
  return (
    <div className='input-group'>
      <label htmlFor={ID} className='label'>
        {label}
      </label>
      <p className='description'>{description}</p>
      <Input
        value={value}
        setValue={setValue}
        placeholderText={placeholderText}
        maxLength={maxLength}
        type={type}
        name={ID}
        ID={ID}
        error={error}
        dropdownSelections={dropdownSelections}
      />
      {error && <small className='error'>{error}</small>}
    </div>
  );
}
