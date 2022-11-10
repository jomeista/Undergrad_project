import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchContextprovider } from './context/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <SearchContextprovider>

  <App />
  
  </SearchContextprovider>
 
  </React.StrictMode>
);
