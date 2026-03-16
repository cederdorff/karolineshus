import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main id="main-content" tabIndex="-1" className="page not-found">
      <header className="page-header page-header--compact">
        <h1 className="not-found-title">404</h1>
      </header>
      <p>Siden findes ikke i den nye version af Karolines Hus.</p>
      <Link to="/" className="not-found-link">
        Tilbage til forsiden
      </Link>
    </main>
  );
}
