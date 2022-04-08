import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import IconNewFeedback from '../../assets/shared/icon-new-feedback.svg';
import IconEditFeedback from '../../assets/shared/icon-edit-feedback.svg';
import InputGroup from '../InputGroup';
import '../../styles/feedback-form.css';

const categorySelections = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];
const statusSelections = ['Suggestion', 'Planned', 'In-Progress', 'Live'];

export default function FeedbackForm({ edit, feedback, onDelete, onSubmit }) {
  const [feedbackTitle, setFeedbackTitle] = useState(feedback ? feedback.title : '');
  const [feedbackTitleError, setFeedbackTitleError] = useState('');

  const [feedbackDetail, setFeedbackDetail] = useState(feedback ? feedback.description : '');
  const [feedbackDetailError, setFeedbackDetailError] = useState('');

  const [feedbackCategory, setFeedbackCategory] = useState(
    feedback ? feedback.category : categorySelections[0]
  );
  const [feedbackStatus, setFeedbackStatus] = useState(feedback ? feedback.status : 'suggestion');

  let history = useHistory();

  const navigateBack = (e) => {
    e.preventDefault();

    history.goBack();
  };

  const validateEmpty = (value) => {
    return !value || value.length < 1;
  };

  const validateFeedbackTitle = (value) => {
    setFeedbackTitleError('');

    if (validateEmpty(value)) setFeedbackTitleError("Can't be empty");

    setFeedbackTitle(value);
  };

  const validateFeedbackDetail = (value) => {
    setFeedbackDetailError('');

    if (validateEmpty(value)) setFeedbackDetailError("Can't be empty");

    setFeedbackDetail(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (validateEmpty(feedbackTitle)) {
      return setFeedbackTitleError("Can't be empty");
    }
    if (validateEmpty(feedbackDetail)) {
      return setFeedbackDetailError("Can't be empty");
    }

    onSubmit({
      title: feedbackTitle,
      description: feedbackDetail,
      category: feedbackCategory.toLowerCase(),
      status: feedbackStatus.toLowerCase(),
    });
  };

  // IMPLEMENT DELETE FEEDBACK
  // IMPLEMENT EDIT FEEDBACK

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
      <InputGroup
        label='Feedback Title'
        description='Add a short, descriptive headline'
        ID='feedback-title'
        value={feedbackTitle}
        setValue={validateFeedbackTitle}
        maxLength={255}
        type='text'
        error={feedbackTitleError}
      />
      <InputGroup
        label='Category'
        description='Choose a category for your feedback'
        ID='feedback-category'
        value={feedbackCategory}
        setValue={setFeedbackCategory}
        type='dropdown'
        dropdownSelections={categorySelections}
      />
      {edit && (
        <InputGroup
          label='Update Status'
          description='Change feature state'
          ID='feedback-status'
          value={feedbackStatus}
          setValue={setFeedbackStatus}
          type='dropdown'
          dropdownSelections={statusSelections}
        />
      )}
      <InputGroup
        label='Feedback Detail'
        description='Include any specific comments on what should be improved, added, etc.'
        ID='feedback-detail'
        value={feedbackDetail}
        setValue={validateFeedbackDetail}
        maxLength={255}
        type='textarea'
        error={feedbackDetailError}
      />

      <div className='buttons'>
        {edit && (
          <button className='btn btn-danger' onClick={() => onDelete()} type='button'>
            Delete
          </button>
        )}
        <div>
          <button className='btn btn-tertiary' onClick={(e) => navigateBack(e)}>
            Cancel
          </button>
          <button className='btn btn-primary' onClick={(e) => onSubmitHandler(e)}>
            {edit ? 'Save Changes' : 'Add Feedback'}
          </button>
        </div>
      </div>
    </form>
  );
}
