import React from 'react';
import { Link } from 'react-router-dom';
import StatusIndicator from '../StatusIndicator.js';
import '../../styles/roadmap.css';

export default function Roadmap({ roadmapCount }) {
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
          <p className='body status-count'>{roadmapCount.Planned}</p>
        </li>
        <li>
          <StatusIndicator title='In-Progress' />
          <p className='body status-count'>{roadmapCount['In-Progress']}</p>
        </li>
        <li>
          <StatusIndicator title='Live' />
          <p className='body status-count'>{roadmapCount.Live}</p>
        </li>
      </ul>
    </div>
  );
}
