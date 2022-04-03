import React from 'react';
import Comment from '../Comment.js';
import '../../styles/comments-list.css';

export default function CommentsList({ comments, feedbackID }) {
  return (
    <section className='comments-list'>
      <h3 className='title'>{comments.length} Comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <Comment comment={comment} feedbackID={feedbackID} />
              <div className='comment-divider'></div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
