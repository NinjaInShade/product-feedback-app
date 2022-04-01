import React from 'react';
import { Link } from 'react-router-dom';
import GoBack from '../components/GoBack';
import '../styles/feedback-detail.css';

export default function FeedbackDetail() {
  const ID = 2;

  return (
    <div className='feedback-detail'>
      <div className='feedback-detail-container'>
        <div className='header'>
          <GoBack />
          <Link to={`/feedback/edit/${ID}`} className='btn btn-secondary'>
            + Add Feedback
          </Link>
        </div>
      </div>
    </div>
  );
}
