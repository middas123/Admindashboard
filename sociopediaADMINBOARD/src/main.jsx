import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Replace the import statement
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// Use createRoot
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
