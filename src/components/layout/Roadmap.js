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
    </div>
  );
}
