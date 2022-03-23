import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeMainNav from '../components/layout/HomeMainNav.js';
import IllustrationEmpty from '../assets/suggestions/illustration-empty.svg';
import '../styles/home.css';
import SuggestionCard from '../components/SuggestionCard.js';

// TODO: Responsive view for no suggestions view

export default function Home({ suggestionsData }) {
  const [suggestions, setSuggestions] = useState(suggestionsData);
  const [sortBy, setSortBy] = useState('Most Upvotes');

  const setSortByHandler = (sortBySelected) => {
    setSortBy(sortBySelected);

    const newSuggestions = suggestions;

    if (sortBySelected === 'Most Upvotes') {
      newSuggestions.sort((a, b) => b.upvotes - a.upvotes);
    }

    if (sortBySelected === 'Least Upvotes') {
      newSuggestions.sort((a, b) => a.upvotes - b.upvotes);
    }

    if (sortBySelected === 'Most Comments') {
      newSuggestions.sort((a, b) => b.comments.length - a.comments.length);
    }

    if (sortBySelected === 'Least Comments') {
      newSuggestions.sort((a, b) => a.comments.length - b.comments.length);
    }

    return setSuggestions(newSuggestions);
  };

  const updateSuggestionsHandler = (updatedSuggestion) => {
    setSuggestions(
      suggestions.map((suggestion) => {
        return suggestion.id === updatedSuggestion.id ? updatedSuggestion : suggestion;
      })
    );
  };

  const suggestionsCount = suggestions.reduce((acc, feedback) => {
    return feedback.status === 'suggestion' ? acc + 1 : acc;
  }, 0);

  return (
    <div className='home'>
      <section className='home-left'>
        <div className='home-left-intro'>
          <h2 className='home-left-intro-title'>Frontend Mentor</h2>
          <p className='body-s home-left-intro-subtitle'>Feedback board</p>
        </div>
      </section>
      <section className='home-right'>
        <HomeMainNav
          suggestionsCount={suggestionsCount}
          sortBy={sortBy}
          setSortBy={setSortByHandler}
        />
        <main>
          {suggestionsCount > 1 ? (
            <ul className='suggestions'>
              {suggestions.map((suggestion) => {
                return (
                  <li key={suggestion.id}>
                    <SuggestionCard
                      suggestion={suggestion}
                      updateSuggestion={updateSuggestionsHandler}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className='home-no-feedback'>
              <img
                src={IllustrationEmpty}
                alt='Detective looking through magnifying glass indicating no feedback (icon)'
              />
              <h1 className='home-no-feedback-title'>There is no feedback yet.</h1>
              <p className='home-no-feedback-lead body'>
                Got a suggestion? Found a bug that needs to be squashed? We love hearing about new
                ideas to improve our app.
              </p>
              <Link to='/feedback/add' className='btn btn-primary'>
                + Add Feedback
              </Link>
            </div>
          )}
        </main>
      </section>
    </div>
  );
}
