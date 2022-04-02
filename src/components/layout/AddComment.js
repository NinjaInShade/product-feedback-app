import React, { useState } from 'react';
import Input from '../Input.js';
import '../../styles/add-comment.css';

export default function AddComment({ maxChars, postCommentHandler }) {
  const [comment, setComment] = useState('');

  return (
    <div className='add-comment'>
      <h3 className='title'>Add Comment</h3>
      <Input
        value={comment}
        setValue={setComment}
        placeholderText='Type your comment here'
        maxLength={maxChars}
      />
      <div className='bottom'>
        <small className='body-s chars-left'>{maxChars - comment.length} characters left</small>
        <button className='btn btn-primary' onClick={() => postCommentHandler(comment)}>
          Post Comment
        </button>
      </div>
    </div>
  );
}
