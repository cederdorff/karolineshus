import { Link } from "react-router";
import { footerLinks } from "../siteContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="colophon" className="site-footer" role="contentinfo">
      <div className="container site-footer__inner">
        <p className="site-footer__copyright">
          Copyright © {currentYear} Karolines Hus. Alle rettigheder forbeholdes.
        </p>
        <nav className="site-footer__menu" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.label} to={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
