'use client'
import React from 'react';
import styles from "../pages.module.css"

import { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);


  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <div className={`navbar ${navbarVisible ? 'active' : ''}`}>
      <button onClick={toggleNavbar} className="toggle-button">
        {navbarVisible ? <AiOutlineClose/> : <AiOutlineMenu/>}
      </button>
      <div className='afternav'>
      <nav className='navbar'>
        <div className='internalbox'>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Courses</a></li>
          <li><a href="">Batches</a></li>
          <li><a href="">About</a></li>
        </ul>
        <div className='login'>
          
        </div>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;