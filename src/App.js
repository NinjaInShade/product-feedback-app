import React, { useState, useContext, useEffect, Suspense, lazy } from 'react';
import { ProdReqContext } from './context/ProdReqContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import CollectObjectValues from './util/CollectObjectValues.js';
import './styles/base.css';
import './styles/buttons.css';

require('dotenv').config();

const Suggestions = lazy(() => import('./pages/Suggestions'));
const Roadmap = lazy(() => import('./pages/Roadmap'));

function App() {
  const [prodReqs] = useContext(ProdReqContext);
  const [statusCount, setStatusCount] = useState({});

  const suggestionData = prodReqs.filter(
    (productRequest) => productRequest.status === 'suggestion'
  );

  const uniqueCategories = [
    'all',
    'UI',
    'UX',
    ...new Set(prodReqs.map((data) => data.category)),
  ].map((tab) => {
    // all active by default
    return tab === 'all' ? { name: tab, active: true } : { name: tab, active: false };
  });

  useEffect(() => {
    setStatusCount({
      Planned: CollectObjectValues(prodReqs, 'status', 'planned'),
      'In-Progress': CollectObjectValues(prodReqs, 'status', 'in-progress'),
      Live: CollectObjectValues(prodReqs, 'status', 'live'),
    });
  }, [prodReqs]);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          {/* Entry page for application - the home page */}
          <Route path='/' exact>
            <Suggestions
              suggestionData={suggestionData}
              statusCount={statusCount}
              uniqueCategories={uniqueCategories}
            />
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
