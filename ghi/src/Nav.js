import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <NavLink className="active" to="/" target="_blank">
          Home
        </NavLink>
        <NavLink to="/FAQ" target="_blank">
          FAQ
        </NavLink>
        <NavLink to="/signup-signin" target="_blank">
          Login/Signup
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
