import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GoBack from '../components/GoBack';
import FeedbackForm from '../components/layout/FeedbackForm';
import { ProdReqContext } from '../context/ProdReqContext';
import '../styles/feedback-add.css';

export default function FeedbackAdd() {
  const [prodReqs, setProdReqs] = useContext(ProdReqContext);

  let history = useHistory();

  const addFeedbackHandler = (feedback) => {
    // We get this this obj:
    // { title: "", description: "", category: "" }
    setProdReqs([
      ...prodReqs,
      {
        id: prodReqs.length + 1,
        title: feedback.title,
        category: feedback.category.toLowerCase(),
        upvotes: 0,
        upvoted: false,
        status: 'suggestion',
        description: feedback.description,
        comments: [],
      },
    ]);

    history.goBack();
  };

  return (
    <div className='feedback-form-outer'>
      <div className='feedback-form-container'>
        <GoBack />
        <FeedbackForm onSubmit={addFeedbackHandler} />
      </div>
    </div>
  );
}
