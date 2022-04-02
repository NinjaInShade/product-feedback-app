import React from 'react';
import ReactDOM from 'react-dom';
import { ProdReqProvider } from './context/ProdReqContext';
import { UserProvider } from './context/UserContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ProdReqProvider>
        <App />
      </ProdReqProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
