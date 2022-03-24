import React from 'react';
import '../styles/tab.css';

export default function Tab({ title, active, onClick }) {
  return active !== undefined ? (
    <button className={`tab tab-btn body-xs ${active ? 'active' : ''}`} onClick={onClick}>
      {title}
    </button>
  ) : (
    <div className='tab body-xs'>{title}</div>
  );
}
