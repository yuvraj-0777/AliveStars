import {FaBars, FaTimes} from "react-icons/fa"

function Navbar() {
  return(
    <header>
      <h3>Logo</h3>
      <nav>
        <a href='/#'>Home</a>
        <a href='/#'>Courses</a>
        <a href='/#'>text</a>
        <a href='/#'>text</a>
        <button>
          <FaTimes/>
        </button>
      </nav>
      <button>
        <FaBars/>
      </button>
    </header>
  );
}

export default Navbar;