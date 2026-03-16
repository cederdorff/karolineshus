import { Link } from "react-router";
import { useState } from "react";
import {
  artistCategoryLabels,
  artistsByCategory,
  getArtistDisplayImageUrl,
} from "../siteContent";
import ImageLightbox from "../components/ImageLightbox";

export default function ArtistsPage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const lightboxImages = artistsByCategory
    .flatMap((group) => group.artists)
    .map((artist) => ({
      url: getArtistDisplayImageUrl(artist),
      alt: artist.name,
    }))
    .filter((image) => Boolean(image.url));

  return (
    <>
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
                  {group.artists.map((artist) => {
                    const artistImageUrl = getArtistDisplayImageUrl(artist);

                    return (
                      <li key={artist.slug}>
                        <article className="artist-overview-card">
                          {artistImageUrl ? (
                            <button
                              type="button"
                              className="featured-slide__media"
                              onClick={() => {
                                const imageIndex = lightboxImages.findIndex(
                                  (image) => image.url === artistImageUrl,
                                );
                                if (imageIndex >= 0) {
                                  setLightboxIndex(imageIndex);
                                }
                              }}
                              aria-label={`Vis stort billede af ${artist.name}`}
                            >
                              <img
                                className="artist-overview-card__image"
                                src={artistImageUrl}
                                alt={artist.name}
                                loading="lazy"
                              />
                            </button>
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
            ))}
          </div>
        </div>
      </main>
      <ImageLightbox
        images={lightboxImages}
        activeIndex={lightboxIndex}
        setActiveIndex={setLightboxIndex}
        dialogLabel="Galleri med kunstnere"
      />
    </>
  );
}
