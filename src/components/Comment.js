import React, { useState, useContext } from 'react';
import { ProdReqContext } from '../context/ProdReqContext';
import { UserContext } from '../context/UserContext';
import ReplyBox from './ReplyBox';
import '../styles/comment.css';

export default function Comment({ comment, feedbackID }) {
  const [prodReqs, setProdReqs] = useContext(ProdReqContext);
  const [currentUser] = useContext(UserContext);

  const [showReply, setShowReply] = useState(false);

  const [reply, setReply] = useState('');

  // A comment could have no replies, and that creates error in map down below if thats the case
  const replies = comment.replies ? comment.replies : [];

  const postReply = () => {
    // Post reply to comment with the correct ID
    if (reply.length < 1) return;

    setProdReqs(
      prodReqs.map((prodReq) => {
        return prodReq.id === parseInt(feedbackID)
          ? {
              ...prodReq,
              comments: prodReq.comments.map((commentInLoop) => {
                return commentInLoop.id === comment.id
                  ? {
                      ...commentInLoop,
                      replies: [
                        ...replies,
                        { content: reply, replyingTo: comment.user.username, user: currentUser },
                      ],
                    }
                  : commentInLoop;
              }),
            }
          : prodReq;
      })
    );

    setShowReply(false);
  };

  console.log(comment);

  return (
    <div className='comment'>
      <img
        className='avatar'
        src={`${comment.user.image.split('.')[1]}.jpg`}
        alt={`Photograph of ${comment.user.name}`}
      />
      <div className='comment-main'>
        <div className='comment-top'>
          <div>
            <h4 className='name'>{comment.user.name}</h4>
            <small className='username'>@{comment.user.username}</small>
          </div>
          <button className='reply-btn body-xs' onClick={() => setShowReply(!showReply)}>
            Reply
          </button>
        </div>

        <p className='body-s comment-description'>{comment.content}</p>

        <ReplyBox show={showReply} reply={reply} setReply={setReply} postReply={postReply} />
      </div>
    </div>
  );
}
