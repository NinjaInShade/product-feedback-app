import React from 'react';
import '../styles/status-indicator.css';

export default function StatusIndicator({ title }) {
  return (
    <div className={`status-indicator ${title.toLowerCase()}`}>
      <div className='circle'></div>
      <p className='body title'>{title}</p>
    </div>
  );
}
