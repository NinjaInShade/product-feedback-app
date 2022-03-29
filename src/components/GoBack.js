import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/go-back.css';

export default function GoBack({ colour }) {
  return (
    <Link to='/' className={`go-back ${colour === 'white' ? 'white' : ''}`}>
      <svg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4.33447 9L0.334473 5L4.33447 1' stroke='#4661E6' stroke-width='2' />
      </svg>
      <span>Go Back</span>
    </Link>
  );
}
