import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Create the root of the React app and render the main App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* StrictMode is a tool for highlighting potential problems in an application */}
    <App />
  </React.StrictMode>,
);
