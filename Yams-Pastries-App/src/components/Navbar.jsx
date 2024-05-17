import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import {useLogoutQuery} from "../features/authFeature/authReducer";

const Navbar = () => {
  const { refetch, isFetching } = useLogoutQuery();
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  const handleLogout = async () => {
    try {
      await refetch();
      window.location.href = "/";
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };


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
              <NavLink to="/" onClick={handleLogout}>
                {isFetching ? "Logging out..." : "Logout"}
              </NavLink>
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