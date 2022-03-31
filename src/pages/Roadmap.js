import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import GoBack from '../components/GoBack.js';
import StatusList from '../components/layout/StatusList.js';
import StatusNav from '../components/StatusNav.js';
import { ProdReqContext } from '../context/ProdReqContext';
import '../styles/roadmap-page.css';

export default function Roadmap() {
  const [statusShown, setStatusShown] = useState('in-progress');
  const [prodReqs] = useContext(ProdReqContext);

  const planned = prodReqs.filter((data) => data.status === 'planned');
  const inProgress = prodReqs.filter((data) => data.status === 'in-progress');
  const live = prodReqs.filter((data) => data.status === 'live');

  const statusNavItems = [
    `Planned (${planned.length})`,
    `In-Progress (${inProgress.length})`,
    `Live (${live.length})`,
  ];

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
        <main className='roadmap-status-container mobile'>
          <StatusNav
            statusShown={statusShown}
            setStatusShown={setStatusShown}
            navItems={statusNavItems}
          />
          <div>
            {statusShown === 'planned' && (
              <StatusList data={planned} title='Planned' desc='Ideas prioritized for research' />
            )}
            {statusShown === 'in-progress' && (
              <StatusList data={inProgress} title='In-Progress' desc='Currently being developed' />
            )}
            {statusShown === 'live' && (
              <StatusList data={live} title='Live' desc='Released features' />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
