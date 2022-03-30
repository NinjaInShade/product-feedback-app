import React from 'react';
import ReactDOM from 'react-dom';
import { ProdReqProvider } from './context/ProdReqContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ProdReqProvider>
      <App />
    </ProdReqProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
