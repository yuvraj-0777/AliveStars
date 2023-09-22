import logo from './logo.svg';
import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
}

export default App;
