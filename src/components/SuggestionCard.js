import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/suggestion-card.css';
import CommentsCount from './CommentsCount';
import Tab from './Tab';
import UpvoteBtn from './UpvoteBtn';

export default function SuggestionCard({ suggestion, updateSuggestion }) {
  console.log(suggestion.comments);
  const commentCount = suggestion.comments ? suggestion.comments.length : 0;

  return (
    <div className='suggestion-card'>
      <UpvoteBtn suggestion={suggestion} updateSuggestion={updateSuggestion} />
      <Link className='main' to={`/feedback/detail/${suggestion.id}`}>
        <h3>{suggestion.title}</h3>
        <p className='body'>{suggestion.description}</p>
        <Tab title={suggestion.category} />
      </Link>
      <CommentsCount count={commentCount} />
    </div>
  );
}
