import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Hovednavigation">
      <div className="site-nav__brand">
        <span className="site-nav__title">Karolines Hus</span>
        <span className="site-nav__subtitle">Galleriet på Fur</span>
      </div>
      <div className="site-nav__links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Hjem
        </NavLink>
        <NavLink
          to="/om"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Om os
        </NavLink>
        <NavLink
          to="/kontakt"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Kontakt
        </NavLink>
      </div>
    </nav>
  );
}
