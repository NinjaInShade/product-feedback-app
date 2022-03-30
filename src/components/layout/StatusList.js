import React from 'react';
import '../../styles/status-list.css';

export default function StatusList({ title, desc, count, data }) {
  console.log([count, data]);
  return (
    <div>
      <div className='status-list-header'>
        <h3>
          {title} ({count})
        </h3>
        <p className='body description'>{desc}</p>
      </div>
      <ul></ul>
    </div>
  );
}
