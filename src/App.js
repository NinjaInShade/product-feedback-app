import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import localData from './data.json';
import CollectObjectValues from './util/CollectObjectValues.js';
import './styles/base.css';
import './styles/buttons.css';

require('dotenv').config();

const Suggestions = lazy(() => import('./pages/Suggestions'));
const Roadmap = lazy(() => import('./pages/Roadmap'));

function App() {
  const [suggestions, setSuggestions] = useState([{}]);
  const [roadmaps, setRoadmaps] = useState([{}]);
  const [uniqueCategories, setUniqueCategories] = useState([{}]);
  const [statusCount, setStatusCount] = useState({});

  // Simulates fetching data from API and extracting needed data
  useEffect(() => {
    const requests = localData.productRequests;

    const filteredSuggestions = requests.filter(
      (productRequest) => productRequest.status === 'suggestion'
    );

    const filteredRoadmaps = requests.filter(
      (productRequest) => productRequest.status !== 'suggestion'
    );

    const filteredUniqueCategories = [
      'all',
      'UI',
      'UX',
      ...new Set(filteredSuggestions.map((suggestionData) => suggestionData.category)),
    ].map((tab) => {
      // all active by default
      return tab === 'all' ? { name: tab, active: true } : { name: tab, active: false };
    });

    setStatusCount({
      Planned: CollectObjectValues(requests, 'status', 'planned'),
      'In-Progress': CollectObjectValues(requests, 'status', 'in-progress'),
      Live: CollectObjectValues(requests, 'status', 'live'),
    });

    setRoadmaps(filteredRoadmaps);
    setSuggestions(filteredSuggestions);
    setUniqueCategories(filteredUniqueCategories);
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          {/* Entry page for application - the home page */}
          <Route path='/' exact>
            <Suggestions
              suggestionsData={suggestions}
              roadmapCount={statusCount}
              uniqueCategories={uniqueCategories}
            />
          </Route>

          {/* Roadmap page */}
          <Route path='/roadmap' exact>
            <Roadmap roadmapCount={statusCount} roadmapData={roadmaps} />
          </Route>

          {/* Feedback detail page */}
          {/* <Route path='/feedback/detail/:feedbackID' exact>
            <FeedbackDetail />
          </Route> */}

          {/* Edit feedback page */}
          {/* <Route path='/feedback/edit/:feedbackID' exact>
            <FeedbackEdit />
          </Route> */}

          {/* Add new feedback page */}
          {/* <Route path='/feedback/add' exact>
            <FeedbackAdd />
          </Route> */}

          {/* 404 page not found route ( any routes not matching go back to home page ) */}
          <Route path='*'>
            <Suggestions />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
