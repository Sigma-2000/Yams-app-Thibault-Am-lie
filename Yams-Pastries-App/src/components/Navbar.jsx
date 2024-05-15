import { NavLink } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  return (
    <header>
      <h1>Yams & pastries</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
