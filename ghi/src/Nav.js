import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink className="active" to="/" target="_blank">
        Home
      </NavLink>
      <NavLink to="/signup-signin" target="_blank">
        Login/Signup
      </NavLink>
    </nav>
  );
}

export default Nav;
