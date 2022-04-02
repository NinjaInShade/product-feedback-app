import React from 'react';
import Comment from '../Comment.js';
import '../../styles/comments-list.css';

export default function CommentsList({ comments }) {
  return (
    <section className='comments-list'>
      <h3 className='title'>{comments.length} Comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <Comment comment={comment} />
              <div className='comment-divider'></div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
