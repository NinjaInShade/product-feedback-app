import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import localData from './data.json';
import './styles/base.css';
import './styles/buttons.css';

require('dotenv').config();

const Home = lazy(() => import('./pages/Home'));

function App() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Simulates fetching data from API
    setFeedbackData(localData.productRequests);
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          {/* Entry page for application - the home page */}
          <Route path='/' exact>
            <Home feedbackData={feedbackData} />
          </Route>

          {/* Roadmap page */}
          {/* <Route path='/' exact>
            <Roadmap />
          </Route> */}

          {/* Feedback detail page */}
          {/* <Route path='/' exact>
            <FeedbackDetail />
          </Route> */}

          {/* Edit feedback page */}
          {/* <Route path='/' exact>
            <FeedbackEdit />
          </Route> */}

          {/* Add new feedback page */}
          {/* <Route path='/' exact>
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
