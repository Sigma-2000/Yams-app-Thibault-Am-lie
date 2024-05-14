import { NavLink } from "react-router-dom";

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
