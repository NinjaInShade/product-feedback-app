import React from 'react';
import StatusIndicator from './StatusIndicator';
import '../styles/status-card.css';

export default function StatusCard({ data }) {
  return (
    <div className={`status-card ${data.status}`}>
      {data.status === 'planned' && <StatusIndicator title='Planned' />}
      {data.status === 'in-progress' && <StatusIndicator title='In-Progress' />}
      {data.status === 'live' && <StatusIndicator title='Live' />}
    </div>
  );
}
