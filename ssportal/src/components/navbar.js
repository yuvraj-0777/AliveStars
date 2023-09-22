import { useRef } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"
import "../styles/main.css"

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return(
    <header>
      <h3 className="logo">Turtle</h3>
      <nav ref={navRef}>
        <Link to='/'>Home</Link>
        <Link to='/#'>Courses</Link>
        <Link to='/bloomtxt'>Know More</Link>
        <Link to='/#'>text</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
      <div>
      <button className="buttn-login">
        Log In
      </button>
      <button className="buttn-signup">
        Sign Up
      </button>
      </div>
    </header>
  );
}

export default Navbar;