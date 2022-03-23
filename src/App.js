import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import localData from './data.json';
import './styles/base.css';
import './styles/buttons.css';

require('dotenv').config();

const Home = lazy(() => import('./pages/Home'));

function App() {
  // const [currentUser, setCurrentUser] = useState({});
  const [feedbackData, setFeedbackData] = useState([]);

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Simulates fetching data from API
    console.log(localData.productRequests);
    setFeedbackData(localData.productRequests);

    setSuggestions(
      localData.productRequests.filter((productRequest) => productRequest.status === 'suggestion')
    );

    // setCurrentUser(localData.currentUser);
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          {/* Entry page for application - the home page */}
          <Route path='/' exact>
            <Home suggestionsData={suggestions} />
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
            <Home feedbackData={feedbackData} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
