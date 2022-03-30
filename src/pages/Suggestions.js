import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeMainNav from '../components/layout/HomeMainNav.js';
import IllustrationEmpty from '../assets/suggestions/illustration-empty.svg';
import SuggestionCard from '../components/SuggestionCard.js';
import TabFilter from '../components/layout/TabFilter.js';
import Roadmap from '../components/layout/Roadmap.js';
import SidebarOpen from '../assets/shared/mobile/icon-hamburger.svg';
import SidebarClose from '../assets/shared/mobile/icon-close.svg';
import Sidebar from '../components/layout/Sidebar.js';
import '../styles/suggestions.css';

// TODO: Responsive view for no suggestions view
// TODO: Look for optimisations and tidy code

export default function Suggestions({ suggestionData, statusCount, uniqueCategories }) {
  const [suggestions, setSuggestions] = useState(suggestionData);
  const [filterTabs, setFilterTabs] = useState(uniqueCategories);
  const [sortBy, setSortBy] = useState('Most Upvotes');

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const setSortByHandler = (sortBySelected) => {
    setSortBy(sortBySelected);

    const sortedSuggestions = suggestions;

    switch (sortBySelected) {
      case 'Most Upvotes':
        sortedSuggestions.sort((a, b) => b.upvotes - a.upvotes);
        break;

      case 'Least Upvotes':
        sortedSuggestions.sort((a, b) => a.upvotes - b.upvotes);
        break;
      case 'Most Comments':
        sortedSuggestions.sort((a, b) => b.comments.length - a.comments.length);
        break;

      case 'Least Comments':
        sortedSuggestions.sort((a, b) => a.comments.length - b.comments.length);
        break;

      default:
        break;
    }

    return setSuggestions(sortedSuggestions);
  };

  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const updateSuggestionsHandler = (activeTab) => {
    activeTab === 'all'
      ? setSuggestions(suggestionData)
      : setSuggestions(suggestionData.filter((suggestion) => suggestion.category === activeTab));

    // We want to keep the sort by filter activated. Filtering by tab resets this, so we counteract this
    return setSortBy(sortBy);
  };

  const updateSuggestionHandler = (updatedSuggestion) => {
    return setSuggestions(
      suggestions.map((suggestion) => {
        return suggestion.id === updatedSuggestion.id ? updatedSuggestion : suggestion;
      })
    );
  };

  return (
    <>
      <Sidebar
        open={sidebarOpen}
        filterTabs={filterTabs}
        setFilterTabs={setFilterTabs}
        updateSuggestionsHandler={updateSuggestionsHandler}
        roadmapCount={statusCount}
      />
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
          <Roadmap roadmapCount={statusCount} />
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
    </>
  );
}
