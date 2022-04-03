import React from 'react';
import Comment from '../Comment.js';
import '../../styles/comments-list.css';

export default function CommentsList({ comments, feedbackID }) {
  return (
    <section className='comments-list'>
      <h3 className='title'>{comments.length} Comments</h3>
      <ul>
        {comments.map((comment) => {
          return comment.replies ? (
            <li key={comment.id}>
              <Comment comment={comment} commentID={comment.id} feedbackID={feedbackID} />
              {comment.replies.map((reply, index) => {
                return (
                  <Comment
                    comment={reply}
                    commentID={comment.id}
                    feedbackID={feedbackID}
                    key={index}
                  />
                );
              })}
              <div className='comment-divider'></div>
            </li>
          ) : (
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
