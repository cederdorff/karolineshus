import { Link } from "react-router";
import {
  artistCategoryLabels,
  artists,
  getArtistDisplayImageUrl,
} from "../siteContent";

export default function ArtistsPage() {
  const sortedArtists = [...artists].sort((a, b) =>
    a.name.localeCompare(b.name, "da", { sensitivity: "base" }),
  );

  return (
    <main id="main-content" tabIndex="-1" className="page classic-page">
      <div className="container">
        <article className="archive-post">
          <header className="entry-header">
            <p className="entry-meta">Kunstnere</p>
            <h1 className="entry-title">Alle kunstnere</h1>
          </header>
          <p>
            Her finder du kunstnerne i Karolines Hus samlet i én oversigt. Klik
            dig videre til de enkelte kunstnersider for at læse mere og se
            billeder af værkerne.
          </p>
        </article>

        <section className="archive-post">
          <ul className="artist-overview-grid">
            {sortedArtists.map((artist) => {
              const artistImageUrl = getArtistDisplayImageUrl(artist);

              return (
                <li key={artist.slug}>
                  <article className="artist-overview-card">
                    {artistImageUrl ? (
                      <Link
                        className="featured-slide__media"
                        to={`/kunstnere/${artist.slug}`}
                        aria-label={`Gå til kunstnersiden for ${artist.name}`}
                      >
                        <img
                          className="artist-overview-card__image"
                          src={artistImageUrl}
                          alt={artist.name}
                          loading="lazy"
                          decoding="async"
                        />
                      </Link>
                    ) : null}
                    <div className="artist-overview-card__body">
                      <p className="artist-overview-card__meta">
                        {artistCategoryLabels[artist.category] ||
                          artist.category}
                      </p>
                      <h3 className="artist-overview-card__title">
                        <Link
                          className="artist-overview-card__link"
                          to={`/kunstnere/${artist.slug}`}
                        >
                          {artist.name}
                        </Link>
                      </h3>
                      <p className="artist-overview-card__excerpt">
                        {artist.excerpt}
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}
