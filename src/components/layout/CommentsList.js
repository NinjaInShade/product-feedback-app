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
              <ul className='replies-list'>
                {comment.replies.map((reply, index) => {
                  return (
                    <li key={index}>
                      <Comment
                        comment={reply}
                        replies={comment.replies}
                        commentID={comment.id}
                        feedbackID={feedbackID}
                      />
                    </li>
                  );
                })}
              </ul>
              <div className='comment-divider'></div>
            </li>
          ) : (
            <li key={comment.id}>
              <Comment comment={comment} commentID={comment.id} feedbackID={feedbackID} />
              <div className='comment-divider'></div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
