import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GoBack from '../components/GoBack.js';
import StatusList from '../components/layout/StatusList.js';
import { ProdReqContext } from '../context/ProdReqContext';
import '../styles/roadmap-page.css';

export default function Roadmap() {
  const [prodReqs] = useContext(ProdReqContext);

  const planned = prodReqs.filter((data) => data.status === 'planned');
  const inProgress = prodReqs.filter((data) => data.status === 'in-progress');
  const live = prodReqs.filter((data) => data.status === 'live');

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
          <StatusList data={planned} title='Planned' desc='Ideas prioritized for research' />
          <StatusList data={inProgress} title='In-Progress' desc='Currently being developed' />
          <StatusList data={live} title='Live' desc='Released features' />
        </main>
        <main className='roadmap-status-container mobile'></main>
      </div>
    </div>
  );
}
