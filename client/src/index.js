import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextprovider } from './context/AuthContext';
import { SearchContextprovider } from './context/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<AuthContextprovider>
  <SearchContextprovider>

  <App />
  
  </SearchContextprovider>
  </AuthContextprovider>
  </React.StrictMode>
);
