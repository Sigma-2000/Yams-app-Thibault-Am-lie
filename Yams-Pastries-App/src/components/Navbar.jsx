import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <header>
      <h1>Yams & pastries</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {isDashboard ? (
            <li>
              <NavLink to="/">Logout</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;