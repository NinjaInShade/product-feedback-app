import React from 'react';
import { Link } from 'react-router-dom';
import GoBack from '../components/GoBack.js';
import '../styles/roadmap-page.css';

export default function Roadmap({ roadmapCount, roadmapData }) {
  console.log(roadmapData);

  return (
    <div className='roadmap'>
      <div className='container'>
        <header className='header'>
          <div>
            <GoBack colour='white' />
            <h1>Roadmap</h1>
          </div>
          <Link to='/feedback/add' className='btn btn-primary'>
            + Add Feedback
          </Link>
        </header>
      </div>
    </div>
  );
}
