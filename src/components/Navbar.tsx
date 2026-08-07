// Don't change file
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../data/navigation";
import "../styles/navbar.css";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <Link className="logo" to="/">
        NS
      </Link>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <nav className={menuOpen ? "navbar-links open" : "navbar-links"}>
        {navigation.map((item) => (
          <div
            key={item.title}
            className="nav-item"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              {item.title}
            </NavLink>
          </div>
        ))}

      </nav>
    </header>
  );
}
export default Navbar;