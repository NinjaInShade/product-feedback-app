import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import localData from './data.json';
import CollectObjectValues from './util/CollectObjectValues.js';
import './styles/base.css';
import './styles/buttons.css';

require('dotenv').config();

const Home = lazy(() => import('./pages/Home'));

function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [roadmapCount, setRoadmapCount] = useState();

  useEffect(() => {
    // Simulates fetching data from API
    const requests = localData.productRequests;

    setSuggestions(requests.filter((productRequest) => productRequest.status === 'suggestion'));

    setRoadmapCount({
      Planned: CollectObjectValues(requests, 'status', 'planned'),
      'In-Progress': CollectObjectValues(requests, 'status', 'in-progress'),
      Live: CollectObjectValues(requests, 'status', 'live'),
    });
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          {/* Entry page for application - the home page */}
          <Route path='/' exact>
            <Home suggestionsData={suggestions} roadmapCount={roadmapCount} />
          </Route>

          {/* Roadmap page */}
          {/* <Route path='/roadmap' exact>
            <Roadmap />
          </Route> */}

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
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
