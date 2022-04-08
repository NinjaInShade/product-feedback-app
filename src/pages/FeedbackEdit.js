import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import GoBack from '../components/GoBack';
import FeedbackForm from '../components/layout/FeedbackForm';
import { ProdReqContext } from '../context/ProdReqContext';
import '../styles/feedback-add.css';

export default function FeedbackEdit() {
  let history = useHistory();

  const [prodReqs, setProdReqs] = useContext(ProdReqContext);

  const { feedbackID } = useParams();

  const currentFeedback = prodReqs.find((prodReq) => prodReq.id === parseInt(feedbackID));

  const deleteFeedbackHandler = () => {
    setProdReqs(prodReqs.filter((prodReq) => prodReq.id !== parseInt(feedbackID)));

    history.push('/');
  };

  const editFeedbackHandler = (updatedFeedback) => {
    console.log(updatedFeedback);
    setProdReqs(
      prodReqs.map((prodReq) =>
        prodReq.id === parseInt(feedbackID)
          ? {
              ...prodReq,
              title: updatedFeedback.title,
              category: updatedFeedback.category,
              status: updatedFeedback.status,
              description: updatedFeedback.description,
            }
          : prodReq
      )
    );

    history.goBack();
  };

  return (
    <div className='feedback-form-outer'>
      <div className='feedback-form-container'>
        <GoBack />
        <FeedbackForm
          edit={true}
          feedback={currentFeedback}
          onDelete={deleteFeedbackHandler}
          onSubmit={editFeedbackHandler}
        />
      </div>
    </div>
  );
}
