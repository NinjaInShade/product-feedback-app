import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import HomeMainNav from '../components/layout/HomeMainNav.js';
import IllustrationEmpty from '../assets/suggestions/illustration-empty.svg';
import SuggestionCard from '../components/SuggestionCard.js';
import TabFilter from '../components/layout/TabFilter.js';
import Roadmap from '../components/layout/Roadmap.js';
import SidebarOpen from '../assets/shared/mobile/icon-hamburger.svg';
import SidebarClose from '../assets/shared/mobile/icon-close.svg';
import '../styles/home.css';

// TODO: Responsive view for no suggestions view
// TODO: Look for optimisations and tidy code

export default function Home({ suggestionsData, roadmapCount }) {
  const [suggestions, setSuggestions] = useState(suggestionsData);
  const [sortBy, setSortBy] = useState('Most Upvotes');
  const [filterTabs, setFilterTabs] = useState();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Gather up all unique tabs
  useEffect(() => {
    let uniqueTabs = [
      'all',
      ...new Set(suggestionsData.map((suggestionData) => suggestionData.category)),
    ];

    uniqueTabs = uniqueTabs.map((tab) => {
      // all active by default
      if (tab === 'all') {
        return { name: tab, active: true };
      }

      return { name: tab, active: false };
    });

    setFilterTabs(uniqueTabs);
  }, [suggestionsData]);

  const setSortByHandler = useCallback(
    (sortBySelected) => {
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
    },
    [suggestions]
  );

  useEffect(() => {
    setSortByHandler(sortBy);
  }, [suggestions, sortBy, setSortByHandler]);

  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const updateSuggestionsHandler = (activeTab) => {
    if (activeTab === 'all') {
      return setSuggestions(suggestionsData);
    }

    return setSuggestions(
      suggestionsData.filter((suggestion) => suggestion.category === activeTab)
    );
  };

  const updateSuggestionHandler = (updatedSuggestion) => {
    setSuggestions(
      suggestions.map((suggestion) => {
        return suggestion.id === updatedSuggestion.id ? updatedSuggestion : suggestion;
      })
    );
  };

  return (
    <div className='home'>
      <section className='home-left'>
        <div className='home-left-intro'>
          <div>
            <h2 className='home-left-intro-title'>Frontend Mentor</h2>
            <p className='body-s home-left-intro-subtitle'>Feedback board</p>
          </div>
          <button className='hamburger-btn' onClick={openSidebar}>
            <img
              src={SidebarOpen}
              alt='Hamburger open sidebar icon'
              className={`${!sidebarOpen && 'show'}`}
            />
            <img
              src={SidebarClose}
              alt='Hamburger close sidebar icon'
              className={`${sidebarOpen && 'show'}`}
            />
          </button>
        </div>
        <TabFilter
          filterTabs={filterTabs}
          setFilterTabs={setFilterTabs}
          updateSuggestions={updateSuggestionsHandler}
        />
        <Roadmap roadmapCount={roadmapCount} />
      </section>
      <section className='home-right'>
        <HomeMainNav
          suggestionsCount={suggestions.length}
          sortBy={sortBy}
          setSortBy={setSortByHandler}
        />
        <main>
          {suggestions.length > 0 ? (
            <ul className='suggestions'>
              {suggestions.map((suggestion) => {
                return (
                  <li key={suggestion.id}>
                    <SuggestionCard
                      suggestion={suggestion}
                      updateSuggestion={updateSuggestionHandler}
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
