import React, { useState, useContext } from 'react';
import { ProdReqContext } from '../context/ProdReqContext';
import { UserContext } from '../context/UserContext';
import ReplyBox from './ReplyBox';
import '../styles/comment.css';

export default function Comment({ comment, commentID, feedbackID, replies }) {
  const [prodReqs, setProdReqs] = useContext(ProdReqContext);
  const [currentUser] = useContext(UserContext);

  const [showReply, setShowReply] = useState(false);

  const [reply, setReply] = useState('');

  // A comment could have no replies, and that creates error in map down below if thats the case
  let commentsReplies = comment.replies ? comment.replies : [];

  // Replies is sent through if we are replying to another reply,
  // as that comment doesn't have replies, the main comment does however, and we have access to it,
  // so we pass through it's replies
  if (replies) {
    commentsReplies = replies;
  }

  const postReply = () => {
    // Post reply to comment with the correct ID
    if (reply.length < 1) return;

    setProdReqs(
      prodReqs.map((prodReq) => {
        return prodReq.id === parseInt(feedbackID)
          ? {
              ...prodReq,
              comments: prodReq.comments.map((commentInLoop) => {
                return commentInLoop.id === commentID
                  ? {
                      ...commentInLoop,
                      replies: [
                        ...commentsReplies,
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

  return (
    <div className='comment'>
      {replies && <div className='reply-line'></div>}
      {comment.replies && <div className='reply-line-top'></div>}
      <img
        className='avatar desktop'
        src={`${comment.user.image.split('.')[1]}.jpg`}
        alt={`Photograph of ${comment.user.name}`}
        style={replies ? { marginTop: '32px' } : {}}
      />
      <div className={`comment-main ${replies ? 'replies' : ''}`}>
        <div className='comment-top'>
          <div className='mobile'>
            <img
              className='avatar mobile'
              src={`${comment.user.image.split('.')[1]}.jpg`}
              alt={`Photograph of ${comment.user.name}`}
            />
            <div>
              <h4 className='name'>{comment.user.name}</h4>
              <small className='username'>@{comment.user.username}</small>
            </div>
          </div>

          <div className='desktop'>
            <h4 className='name'>{comment.user.name}</h4>
            <small className='username'>@{comment.user.username}</small>
          </div>
          <button className='reply-btn body-xs' onClick={() => setShowReply(!showReply)}>
            Reply
          </button>
        </div>

        <p className='body-s comment-description'>
          {comment.replyingTo && <span className='replying-to'>@{comment.replyingTo} </span>}
          {comment.content}
        </p>

        <ReplyBox show={showReply} reply={reply} setReply={setReply} postReply={postReply} />
      </div>
    </div>
  );
}
