import React from 'react';
import { Link } from 'react-router-dom';
import StatusIndicator from './StatusIndicator';
import UpvoteBtn from './UpvoteBtn.js';
import CommentsCount from './CommentsCount';
import Tab from './Tab.js';
import '../styles/status-card.css';

export default function StatusCard({ data }) {
  return (
    <div className={`status-card ${data.status}`}>
      {data.status === 'planned' && <StatusIndicator title='Planned' />}
      {data.status === 'in-progress' && <StatusIndicator title='In-Progress' />}
      {data.status === 'live' && <StatusIndicator title='Live' />}
      <Link className='main' to={`/feedback/detail/${data.id}`}>
        <h3>{data.title}</h3>
        <p className='body'>{data.description}</p>
        <Tab title={data.category} />
      </Link>
      <div className='comments-container'>
        <UpvoteBtn suggestion={data} direction='horizontal' />
        <CommentsCount count={data.comments.length} />
      </div>
    </div>
  );
}
