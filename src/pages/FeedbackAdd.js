import React, { useContext } from 'react';
import GoBack from '../components/GoBack';
import FeedbackForm from '../components/layout/FeedbackForm';
import { ProdReqContext } from '../context/ProdReqContext';
import { UserContext } from '../context/UserContext';
import '../styles/feedback-add.css';

export default function FeedbackAdd() {
  const [prodReqs, setProdReqs] = useContext(ProdReqContext);
  const [currentUser] = useContext(UserContext);

  const addFeedbackHandler = (feedback) => {
    // We get this this obj:
    // { title: "", description: "", category: "" }
    console.log(feedback);
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
