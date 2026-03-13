import { Link, useParams } from "react-router";
import { getArtistBySlug, artistCategoryLabels } from "../siteContent";

export default function ArtistPage({ forcedSlug }) {
  const params = useParams();
  const slug = forcedSlug || params.slug;
  const artist = getArtistBySlug(slug);

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
          <article className="archive-post artist-detail">
            <img
              className="artist-detail__image"
              src={artist.imageUrl}
              alt={artist.name}
            />
            <header className="entry-header">
              <p className="entry-meta">
                {artistCategoryLabels[artist.category] || artist.category}
              </p>
              <h1 className="entry-title">{artist.name}</h1>
            </header>
            <p>{artist.excerpt}</p>
            <p>{artist.bio}</p>
          </article>
        </section>

        <aside className="sidebar widget-area" role="complementary">
          <section className="widget">
            <h2 className="widget-title">Kunstnerkategori</h2>
            <p>{artistCategoryLabels[artist.category] || artist.category}</p>
          </section>
          <section className="widget">
            <h2 className="widget-title">Genveje</h2>
            <ul className="widget-menu">
              <li>
                <Link to="/kunstnere">Alle kunstnere</Link>
              </li>
              <li>
                <Link to="/nyheder">Nyheder</Link>
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
