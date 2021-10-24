import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import './base.css';
import './buttons.css';

require('dotenv').config();

const Home = lazy(() => import('./pages/Home/Home'));
const NoMatch = lazy(() => import('./pages/NoMatch/NoMatch'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          {/* Entry page for application - the home page */}
          <Route path='/' exact>
            <Home />
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

          {/* 404 page not found route ( any routes not matching go here ) */}
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
