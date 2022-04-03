import React from 'react';
import '../styles/comment.css';

export default function Comment({ comment }) {
  console.log(comment);

  return (
    <div className={`comment ${comment.replies ? 'has-replies' : ''}`}>
      <div className='avatar-container'>
        <img
          className='avatar'
          src={`${comment.user.image.split('.')[1]}.jpg`}
          alt={`Photograph of ${comment.user.name}`}
        />
        {comment.replies && <div className='replies-line'></div>}
      </div>
      <div className='comment-main'>
        <div className='comment-inital'></div>
        {comment.replies && <ul className='comment-replies'></ul>}
      </div>
    </div>
  );
}
