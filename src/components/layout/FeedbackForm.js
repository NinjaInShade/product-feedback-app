import React from 'react';
import { useHistory } from 'react-router-dom';
import IconNewFeedback from '../../assets/shared/icon-new-feedback.svg';
import IconEditFeedback from '../../assets/shared/icon-edit-feedback.svg';
import '../../styles/feedback-form.css';

export default function FeedbackForm({ edit, feedback, onDelete, onSubmit }) {
  let history = useHistory();

  const navigateBack = (e) => {
    e.preventDefault();

    history.goBack();
  };

  return (
    <form className={`feedback-form ${edit ? 'edit' : ''}`}>
      {edit ? (
        <img src={IconEditFeedback} alt='Pen icon to indicate edit feedback' className='icon' />
      ) : (
        <img src={IconNewFeedback} alt='Plus icon to indicate new feedback' className='icon' />
      )}

      {edit ? (
        <h1 className='title'>Editing '{feedback.title}'</h1>
      ) : (
        <h1 className='title'>Create New Feedback</h1>
      )}
      {/* INPUTS */}

      <div className='buttons'>
        {edit && (
          <button className='btn btn-danger' onClick={(e) => onDelete(e)}>
            Delete
          </button>
        )}
        <div>
          <button className='btn btn-tertiary' onClick={(e) => navigateBack(e)}>
            Cancel
          </button>
          <button className='btn btn-primary' onClick={(e) => onSubmit(e)}>
            {edit ? 'Save Changes' : 'Add Feedback'}
          </button>
        </div>
      </div>
    </form>
  );
}
