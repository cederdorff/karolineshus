import { footerLinks } from "../siteContent";

export default function Footer() {
  return (
    <footer id="colophon" className="site-footer" role="contentinfo">
      <div className="container site-footer__inner">
        <p className="site-footer__copyright">
          Copyright © 2025 Karolines Hus. Alle rettigheder forbeholdes.
        </p>
        <nav className="site-footer__menu" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
