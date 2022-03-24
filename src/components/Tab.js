import React from 'react';
import '../styles/tab.css';

export default function Tab({ title, active }) {
  return active !== undefined ? (
    <button className={`tab tab-btn body-xs ${active ? 'active' : ''}`}>{title}</button>
  ) : (
    <div className='tab body-xs'>{title}</div>
  );
}
