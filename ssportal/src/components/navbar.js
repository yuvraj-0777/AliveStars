import { useRef } from "react";
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
        <a href='/#'>Home</a>
        <a href='/#'>Courses</a>
        <a href='/#'>text</a>
        <a href='/#'>text</a>
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