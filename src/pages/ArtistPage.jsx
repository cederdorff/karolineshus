import { Link, useParams } from "react-router";
import {
  getArtistBySlug,
  artistCategoryLabels,
  getArtistDisplayImageUrl,
  artists2025Widget,
} from "../siteContent";

export default function ArtistPage({ forcedSlug }) {
  const params = useParams();
  const slug = forcedSlug || params.slug;
  const artist = getArtistBySlug(slug);
  const artistImageUrl = artist ? getArtistDisplayImageUrl(artist) : "";
  const sections = Array.isArray(artist?.sections) ? artist.sections : [];
  const memberships = Array.isArray(artist?.memberships)
    ? artist.memberships
    : [];

  if (!artist) {
    return (
      <main className="page classic-page">
        <div className="container">
          <article className="archive-post">
            <header className="entry-header">
              <p className="entry-meta">Kunstner</p>
              <h1 className="entry-title">Kunstner ikke fundet</h1>
            </header>
            <p>Vi kunne ikke finde en kunstner med den adresse.</p>
            <p>
              <Link to="/kunstnere">Tilbage til kunstneroversigten</Link>
            </p>
          </article>
        </div>
      </main>
    );
  }

  return (
    <main className="page classic-page">
      <div className="container home-content-layout">
        <section className="content-primary">
          <article
            className={`archive-post artist-detail${artistImageUrl ? "" : " artist-detail--no-image"}`}
          >
            {artistImageUrl ? (
              <img
                className="artist-detail__image"
                src={artistImageUrl}
                alt={artist.name}
              />
            ) : null}
            <header className="entry-header">
              <p className="entry-meta">
                {artistCategoryLabels[artist.category] || artist.category}
              </p>
              <h1 className="entry-title">{artist.name}</h1>
            </header>
            <p className="artist-detail__lead">{artist.excerpt}</p>
            <p>{artist.bio}</p>

            {sections.map((section) => (
              <section className="artist-section" key={section.title}>
                <h2 className="artist-section__title">{section.title}</h2>
                {section.subtitle ? (
                  <p className="artist-section__subtitle">{section.subtitle}</p>
                ) : null}
                {section.paragraphs?.map((paragraph) => (
                  <p key={`${section.title}-${paragraph.slice(0, 24)}`}>
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            {artist.reviewQuote ? (
              <blockquote className="artist-quote">
                <p>{artist.reviewQuote}</p>
                {artist.reviewMeta ? <cite>{artist.reviewMeta}</cite> : null}
              </blockquote>
            ) : null}
          </article>
        </section>

        <aside className="sidebar widget-area" role="complementary">
          <section className="widget">
            <h2 className="widget-title">Kunstnerkategori</h2>
            <p>{artistCategoryLabels[artist.category] || artist.category}</p>
          </section>
          {memberships.length > 0 ? (
            <section className="widget">
              <h2 className="widget-title">Medlem af</h2>
              <ul className="detail-list detail-list--compact">
                {memberships.map((membership) => (
                  <li key={membership}>{membership}</li>
                ))}
              </ul>
            </section>
          ) : null}
          <section className="widget">
            <h2 className="widget-title">Kunstnere i 2025</h2>
            <ul className="widget-menu">
              {artists2025Widget
                .filter((artist2025) => artist2025.slug !== slug)
                .map((artist2025) => (
                  <li key={artist2025.slug}>
                    <Link to={`/kunstnere/${artist2025.slug}`}>
                      {artist2025.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
          <section className="widget">
            <h2 className="widget-title">Genveje</h2>
            <ul className="widget-menu">
              <li>
                <Link to="/kunstnere">Alle kunstnere</Link>
              </li>
              <li>
                <Link to="/udstillinger">Udstillinger</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}
