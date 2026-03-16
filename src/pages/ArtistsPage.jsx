import { Link } from "react-router";
import {
  artistCategoryLabels,
  artistsByCategory,
  getArtistDisplayImageUrl,
} from "../siteContent";

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
              <ul className="artist-overview-grid">
                {group.artists.map((artist) => (
                  <li key={artist.slug}>
                    <Link
                      className="artist-overview-card"
                      to={`/kunstnere/${artist.slug}`}
                    >
                      {getArtistDisplayImageUrl(artist) ? (
                        <img
                          className="artist-overview-card__image"
                          src={getArtistDisplayImageUrl(artist)}
                          alt={artist.name}
                          loading="lazy"
                        />
                      ) : null}
                      <div className="artist-overview-card__body">
                        <p className="artist-overview-card__meta">
                          {artistCategoryLabels[artist.category] ||
                            artist.category}
                        </p>
                        <h3 className="artist-overview-card__title">
                          {artist.name}
                        </h3>
                        <p className="artist-overview-card__excerpt">
                          {artist.excerpt}
                        </p>
                      </div>
                    </Link>
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
