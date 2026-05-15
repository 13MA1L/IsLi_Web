import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/IsLiGmbH.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="brand" onClick={closeMenu}>
        <img src={logo} alt="IsLi GmbH Logo" />
      </NavLink>

      <button className="menuBtn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <nav className={open ? "nav open" : "nav"}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/sortiment" onClick={closeMenu}>Sortiment</NavLink>
        <NavLink to="/projekte" onClick={closeMenu}>Projekte</NavLink>
        <NavLink to="/kontakt" onClick={closeMenu}>Kontakt</NavLink>
      </nav>
    </header>
  );
}