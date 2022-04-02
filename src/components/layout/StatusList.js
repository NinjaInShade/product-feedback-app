import React from 'react';
import StatusCard from '../StatusCard.js';
import '../../styles/status-list.css';

export default function StatusList({ title, desc, data }) {
  return (
    <div>
      <div className='status-list-header'>
        <h3>
          {title} ({data.length})
        </h3>
        <p className='body description'>{desc}</p>
      </div>
      <ul className='status-card-list'>
        {data
          .sort((a, b) => b.upvotes - a.upvotes)
          .map((statusData) => {
            return (
              <li key={statusData.id}>
                <StatusCard data={statusData} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
