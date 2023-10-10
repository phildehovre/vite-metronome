import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="http://www.philippedehovre.com/#projects">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
