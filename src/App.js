import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import './styles/base.css';
import './styles/buttons.css';

require('dotenv').config();

// TODO: USE CONTEXT IN SUGGESTIONS PAGE + COMPONENTS IN TREE WHERE APPROPRIATE. ROADMAP PAGE DONE.

const Suggestions = lazy(() => import('./pages/Suggestions'));
const Roadmap = lazy(() => import('./pages/Roadmap'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          {/* Entry page for application - the home page */}
          <Route path='/' exact>
            <Suggestions />
          </Route>

          {/* Roadmap page */}
          <Route path='/roadmap' exact>
            <Roadmap />
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
