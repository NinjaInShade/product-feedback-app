import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/suggestion-card.css';
import CommentsCount from './CommentsCount';
import Tab from './Tab';
import UpvoteBtn from './UpvoteBtn';

export default function SuggestionCard({ suggestion }) {
  return (
    <div className='suggestion-card'>
      <UpvoteBtn suggestion={suggestion} className='desktop' />
      <Link className='main' to={`/feedback/detail/${suggestion.id}`}>
        <h3>{suggestion.title}</h3>
        <p className='body'>{suggestion.description}</p>
        <Tab title={suggestion.category} />
      </Link>
      <div className='comments-container'>
        <UpvoteBtn className='mobile' suggestion={suggestion} direction='horizontal' />
        <CommentsCount count={suggestion.comments.length} />
      </div>
    </div>
  );
}
