import React from 'react';
import { Link } from 'react-router-dom';
import StatusIndicator from '../StatusIndicator.js';
import '../../styles/roadmap.css';

export default function RoadmapPanel({ prodReqs }) {
  const planned = prodReqs.filter((data) => data.status === 'planned');
  const inProgress = prodReqs.filter((data) => data.status === 'in-progress');
  const live = prodReqs.filter((data) => data.status === 'live');

  return (
    <div className='roadmap'>
      <header>
        <h3 className='title'>Roadmap</h3>
        <Link to='/roadmap' className='body-xs'>
          View
        </Link>
      </header>
      <ul className='status-list'>
        <li>
          <StatusIndicator title='Planned' />
          <p className='body status-count'>{planned.length}</p>
        </li>
        <li>
          <StatusIndicator title='In-Progress' />
          <p className='body status-count'>{inProgress.length}</p>
        </li>
        <li>
          <StatusIndicator title='Live' />
          <p className='body status-count'>{live.length}</p>
        </li>
      </ul>
    </div>
  );
}
