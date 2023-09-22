import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import Navbar from './components/navbar';
=======
import { BrowserRouter } from "react-router-dom"
>>>>>>> fe33dff4b83ac962565fe0818a3f99f050bae9ef

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Navbar />
=======
    <BrowserRouter>
    <App />
    </BrowserRouter>
>>>>>>> fe33dff4b83ac962565fe0818a3f99f050bae9ef
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
