import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App_02 from './App_02';
import App_03 from './App_03'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App_02 />   
    <App_03 />
    
  </React.StrictMode>
);

