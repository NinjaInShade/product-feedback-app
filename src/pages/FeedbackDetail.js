import React, { useContext, useEffect } from 'react';
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

  useEffect(() => {
    console.log(prodReqs);
  }, [prodReqs]);

  const addComment = (comment) => {
    setProdReqs(
      prodReqs.map((prodReq) =>
        prodReq.id === parseInt(feedbackID)
          ? {
              ...prodReq,
              comments: [
                ...prodReq.comments,
                {
                  id: prodReq.comments.length,
                  content: comment,
                  user: currentUser,
                },
              ],
            }
          : prodReq
      )
    );
  };

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
        <AddComment maxChars={255} postCommentHandler={addComment} />
      </div>
    </div>
  );
}
