import React from 'react';
import '../styles/comment.css';

export default function Comment({ comment, setComment }) {
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
          <button className='reply-btn body-xs'>Reply</button>
        </div>

        <p className='body-s comment-description'>{comment.content}</p>
      </div>
    </div>
  );
}
