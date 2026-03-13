import { NavLink } from "react-router";
import { contactInfo, logoUrl } from "../siteContent";

export default function Navbar() {
  return (
    <header id="masthead" className="site-header" role="banner">
      <div className="site-topbar">
        <div className="container">
          <nav className="main-navigation" aria-label="Hovednavigation">
            <div className="menu-primary-container">
              <ul id="primary-menu" className="menu">
                <li>
                  <NavLink to="/" end>
                    Hjem
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/nyheder">Nyheder</NavLink>
                </li>
                <li>
                  <NavLink to="/kunstnere">Kunstnere</NavLink>
                </li>
                <li>
                  <NavLink to="/om">Om os</NavLink>
                </li>
                <li>
                  <NavLink to="/ellen-bye-jensen">Ellen Bye Jensen</NavLink>
                </li>
                <li>
                  <NavLink to="/kontakt">Kontakt</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="site-branding">
        <div className="container site-branding__inner">
          <a
            className="custom-logo-link"
            href={import.meta.env.BASE_URL}
            aria-label={contactInfo.name}
          >
            <img className="custom-logo" src={logoUrl} alt={contactInfo.name} />
          </a>
          <div className="site-branding__text">
            <h1 className="site-title">{contactInfo.name}</h1>
            <p className="site-description">{contactInfo.subtitle}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
