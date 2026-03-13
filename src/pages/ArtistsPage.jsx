import { Link } from "react-router";
import { artistsByCategory } from "../siteContent";

export default function ArtistsPage() {
  return (
    <main className="page classic-page">
      <div className="container">
        <article className="archive-post">
          <header className="entry-header">
            <p className="entry-meta">Kunstnere</p>
            <h1 className="entry-title">Alle kunstnere</h1>
          </header>
          <p>
            Kunstnerne er inddelt i kategorier som på den tidligere version af
            sitet. Hver kunstner har sin egen underside.
          </p>
        </article>

        <div className="category-section-list">
          {artistsByCategory.map((group) => (
            <section key={group.key} className="archive-post">
              <header className="entry-header">
                <h2 className="entry-title category-title">{group.label}</h2>
              </header>
              <ul className="artist-list-grid">
                {group.artists.map((artist) => (
                  <li key={artist.slug}>
                    <Link to={`/kunstnere/${artist.slug}`}>{artist.name}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
