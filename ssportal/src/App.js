import logo from './logo.svg';
import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import Quizcomp from './components/quizhome';
import Bloomtxt from './components/bloomtxt';

function App() {
  return (
    <React.Fragment>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/bloomtxt' element={<Bloomtxt/>} />
          </Routes>
        </div>
    </React.Fragment>
  );
}

export default App;
