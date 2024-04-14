import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { routes } from './routes/conts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
);
