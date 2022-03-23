import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/suggestion-card.css';
import UpvoteBtn from './UpvoteBtn';

export default function SuggestionCard({ suggestion, updateSuggestion }) {
  console.log(suggestion);

  return (
    <div className='suggestion-card'>
      <UpvoteBtn suggestion={suggestion} updateSuggestion={updateSuggestion} />
      <Link className='main' to={`/feedback/detail/${suggestion.id}`}></Link>
      <div></div>
    </div>
  );
}
