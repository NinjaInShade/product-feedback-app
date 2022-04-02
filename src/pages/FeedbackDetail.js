import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProdReqContext } from '../context/ProdReqContext';
import { UserContext } from '../context/UserContext';
import SuggestionCard from '../components/SuggestionCard';
import AddComment from '../components/layout/AddComment';
import GoBack from '../components/GoBack';
import '../styles/feedback-detail.css';

export default function FeedbackDetail() {
  const [prodReqs, setProdReqs] = useContext(ProdReqContext);
  const [currentUser] = useContext(UserContext);
  const { feedbackID } = useParams();

  console.log(prodReqs);

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
        {/* <CommentsList comments={currentProdReq.comments}/> */}
        {/* Just for spacing, havent made commentsList component yet */}
        <div style={{ marginTop: '24px' }}></div>
        <AddComment
          maxChars={255}
          prodReqs={prodReqs}
          setProdReqs={setProdReqs}
          feedbackID={feedbackID}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
}
