import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { contactInfo, logoUrl } from "../siteContent";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((current) => !current);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="masthead" className="site-header" role="banner">
      <div className="site-topbar">
        <div className="container">
          <nav className="main-navigation" aria-label="Hovednavigation">
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="primary-menu"
              aria-label={isMobileMenuOpen ? "Luk menu" : "Åbn menu"}
              onClick={toggleMobileMenu}
            >
              <span className="menu-toggle__icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="menu-toggle__label">Menu</span>
            </button>

            <div
              className={`menu-primary-container${isMobileMenuOpen ? " is-open" : ""}`}
            >
              <ul id="primary-menu" className="menu">
                <li>
                  <NavLink to="/" end onClick={closeMobileMenu}>
                    Hjem
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/udstillinger" onClick={closeMobileMenu}>
                    Udstillinger
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/kunstnere" onClick={closeMobileMenu}>
                    Kunstnere
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/om" onClick={closeMobileMenu}>
                    Om os
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/kunstnere/ellen-bye-jensen"
                    onClick={closeMobileMenu}
                  >
                    Ellen Bye Jensen
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/kontakt" onClick={closeMobileMenu}>
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="site-branding">
        <div className="container site-branding__inner">
          <Link
            className="custom-logo-link"
            to="/"
            aria-label={`Gå til forsiden hos ${contactInfo.name}`}
          >
            <img className="custom-logo" src={logoUrl} alt={contactInfo.name} />
          </Link>
          <div className="site-branding__text">
            <h1 className="site-title">{contactInfo.name}</h1>
            <p className="site-description">{contactInfo.subtitle}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
