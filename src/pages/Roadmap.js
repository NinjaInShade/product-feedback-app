import React from 'react';
import { Link } from 'react-router-dom';
import GoBack from '../components/GoBack.js';
import StatusList from '../components/layout/StatusList.js';
import '../styles/roadmap-page.css';

export default function Roadmap({ roadmapCount, roadmapData }) {
  const planned = roadmapData.filter((data) => data.status === 'planned');
  const inProgress = roadmapData.filter((data) => data.status === 'in-progress');
  const live = roadmapData.filter((data) => data.status === 'live');

  return (
    <div className='roadmap-page'>
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
        <main className='roadmap-status-container desktop'>
          <StatusList count={roadmapCount.Planned} data={planned} />
          <StatusList count={roadmapCount['In-Progress']} data={inProgress} />
          <StatusList count={roadmapCount.Live} data={live} />
        </main>
        <main className='roadmap-status-container mobile'></main>
      </div>
    </div>
  );
}
