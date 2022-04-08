import React from 'react';
import Input from './Input';
import '../styles/reply-box.css';

export default function ReplyBox({ show, reply, setReply, postReply }) {
  return (
    show && (
      <div className='reply-box'>
        <Input
          value={reply}
          setValue={setReply}
          maxLength={255}
          placeholderText='Type your reply here'
          type='textarea'
        />
        <button className='btn btn-primary' onClick={postReply}>
          Post Reply
        </button>
      </div>
    )
  );
}
