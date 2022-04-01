import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import GoBack from '../components/GoBack';
import SuggestionCard from '../components/SuggestionCard';
import { ProdReqContext } from '../context/ProdReqContext';
import '../styles/feedback-detail.css';

export default function FeedbackDetail() {
  const [prodReqs] = useContext(ProdReqContext);
  const { feedbackID } = useParams();

  const currentProdReq = prodReqs.find((prodReq) => prodReq.id === parseInt(feedbackID));

  return (
    <div className='feedback-detail'>
      <div className='feedback-detail-container'>
        <div className='header'>
          <GoBack />
          <Link to={`/feedback/edit/${feedbackID}`} className='btn btn-secondary'>
            + Add Feedback
          </Link>
        </div>
        <SuggestionCard suggestion={currentProdReq} />
      </div>
    </div>
  );
}
