import React from 'react';
import GoBack from '../components/GoBack';
import FeedbackForm from '../components/layout/FeedbackForm';
import '../styles/feedback-add.css';

export default function FeedbackEdit() {
  return (
    <div className='feedback-form-outer'>
      <div className='feedback-form-container'>
        <GoBack />
        <FeedbackForm />
      </div>
    </div>
  );
}
