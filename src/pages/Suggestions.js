import React, { useState, useContext } from 'react';
import { ProdReqContext } from '../context/ProdReqContext.js';
import { Link } from 'react-router-dom';
import HomeMainNav from '../components/layout/HomeMainNav.js';
import IllustrationEmpty from '../assets/suggestions/illustration-empty.svg';
import SuggestionCard from '../components/SuggestionCard.js';
import TabFilter from '../components/layout/TabFilter.js';
import RoadmapPanel from '../components/layout/RoadmapPanel.js';
import SidebarOpen from '../assets/shared/mobile/icon-hamburger.svg';
import SidebarClose from '../assets/shared/mobile/icon-close.svg';
import Sidebar from '../components/layout/Sidebar.js';
import '../styles/suggestions.css';

export default function Suggestions() {
  const [prodReqs] = useContext(ProdReqContext);

  const uniqueCategories = [
    'all',
    'UI',
    'UX',
    ...new Set(prodReqs.map((data) => data.category)),
  ].map((tab) => {
    // all active by default
    return tab === 'all' ? { name: tab, active: true } : { name: tab, active: false };
  });

  // Local data for filtering/sorting
  const [suggestions, setSuggestions] = useState(
    prodReqs.filter((productRequest) => productRequest.status === 'suggestion')
  );

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
    const originalSuggestionData = prodReqs.filter(
      (productRequest) => productRequest.status === 'suggestion'
    );

    activeTab === 'all'
      ? setSuggestions(originalSuggestionData)
      : setSuggestions(
          originalSuggestionData.filter((suggestion) => suggestion.category === activeTab)
        );

    // Sorting is automatically Most Upvotes, but the nav will display any previous selected sorting.
    return setSortBy('Most Upvotes');
  };

  return (
    <>
      <Sidebar
        open={sidebarOpen}
        filterTabs={filterTabs}
        setFilterTabs={setFilterTabs}
        updateSuggestionsHandler={updateSuggestionsHandler}
        prodReqs={prodReqs}
      />
      <div className='home'>
        <div className='home-container'>
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
            <RoadmapPanel prodReqs={prodReqs} />
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
                        <SuggestionCard suggestion={suggestion} />
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
                    Got a suggestion? Found a bug that needs to be squashed? We love hearing about
                    new ideas to improve our app.
                  </p>
                  <Link to='/feedback/add' className='btn btn-primary'>
                    + Add Feedback
                  </Link>
                </div>
              )}
            </main>
          </section>
        </div>
      </div>
    </>
  );
}
