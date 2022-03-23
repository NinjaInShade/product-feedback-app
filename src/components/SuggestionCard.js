import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/suggestion-card.css';

export default function SuggestionCard({ suggestion }) {
  console.log(suggestion);

  return <Link className='suggestion-card' to={`/feedback/detail/${suggestion.id}`}></Link>;
}
