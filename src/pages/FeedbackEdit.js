import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import GoBack from '../components/GoBack';
import FeedbackForm from '../components/layout/FeedbackForm';
import { ProdReqContext } from '../context/ProdReqContext';
import '../styles/feedback-add.css';

export default function FeedbackEdit() {
  const [prodReqs] = useContext(ProdReqContext);

  const { feedbackID } = useParams();

  const currentFeedback = prodReqs.find((prodReq) => prodReq.id === parseInt(feedbackID));

  return (
    <div className='feedback-form-outer'>
      <div className='feedback-form-container'>
        <GoBack />
        <FeedbackForm edit={true} feedback={currentFeedback} />
      </div>
    </div>
  );
}
