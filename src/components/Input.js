import React, { useState } from 'react';
import '../styles/input.css';

export default function Input({
  value,
  setValue,
  placeholderText,
  maxLength,
  ID,
  type,
  error,
  dropdownSelections,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();

    setDropdownOpen(!dropdownOpen);
  };

  const setValueHandler = (value) => {
    setValue(value);

    setTimeout(() => {
      setDropdownOpen(false);
    }, 500);
  };

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
      {type === 'dropdown' && (
        <div className='dropdown-outer'>
          <button className='body-s dropdown-btn' onClick={(e) => toggleDropdown(e)}>
            {value || dropdownSelections[0]}
            <svg
              className={dropdownOpen ? 'active' : undefined}
              width='10'
              height='7'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 1l4 4 4-4'
                stroke='#4661E6'
                strokeWidth='2'
                fill='none'
                fillRule='evenodd'
              />
            </svg>
          </button>
          <ul className={`dropdown ${dropdownOpen ? 'active' : undefined}`} tabIndex='0'>
            {dropdownSelections.map((selection) => {
              return (
                <li key={selection}>
                  <button
                    className={`body ${
                      value.toLowerCase() === selection.toLowerCase() ? 'active' : undefined
                    }`}
                    onClick={() => setValueHandler(selection)}
                    type='button'
                  >
                    {selection}{' '}
                    <svg xmlns='http://www.w3.org/2000/svg' width='13' height='11'>
                      <path
                        fill='none'
                        stroke='#AD1FEA'
                        strokeWidth='2'
                        d='M1 5.233L4.522 9 12 1'
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
