'use client'

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
      <nav>
        <ul>
          <li><a href="/"></a></li>
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;