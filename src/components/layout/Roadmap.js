import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/roadmap.css';

export default function Roadmap({ roadmapCount }) {
  console.log(roadmapCount);

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
          <div className='status-title-container'>
            <div id='orange'></div>
            <p className='body'>Planned</p>
          </div>
          <p className='body status-count'>{roadmapCount.Planned}</p>
        </li>
        <li>
          <div className='status-title-container'>
            <div id='purple'></div>
            <p className='body'>In-Progress</p>
          </div>
          <p className='body status-count'>{roadmapCount['In-Progress']}</p>
        </li>
        <li>
          <div className='status-title-container'>
            <div id='blue'></div>
            <p className='body'>Live</p>
          </div>
          <p className='body status-count'>{roadmapCount.Live}</p>
        </li>
      </ul>
    </div>
  );
}
