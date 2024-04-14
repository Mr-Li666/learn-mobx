import './App.less';

import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import logo from './assets/logo.svg';
import { Home } from './pages/home/home';
import { routes } from './routes/conts';
const router = createBrowserRouter(routes);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-bili-primary ">1111</p>
        <Home />
      </div> */}
    </div>
  );
}

export default App;
