import {
  archiveNote,
  exhibitions2025,
  featuredArtists,
  homeStories,
  legacyGraphics,
  openingPeriods,
} from "../siteContent";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <>
      <main id="main" className="site-main page page--home">
        <section id="featured-content" className="site-featured-content">
          <div className="container">
            <div className="featured-content-intro">
              <p className="eyebrow">Genopbygget struktur fra 2025-arkivet</p>
              <h2>Udvalgte kunstnere på forsiden</h2>
              <p>
                Det gamle site brugte et stort felt med fremhævede kunstnere.
                Her er den struktur genskabt med de kunstnere, som optrådte i
                forsiden fra slutningen af 2025.
              </p>
            </div>

            <div id="kunstnere" className="featured_posts">
              {featuredArtists.map((artist) => (
                <article key={artist.name} className="featured-post">
                  <Link to={`/kunstnere/${artist.slug}`}>
                    <img
                      className="entry-thumbnail"
                      src={artist.imageUrl}
                      alt={artist.name}
                      loading="lazy"
                    />
                  </Link>
                  <header className="entry-header">
                    <p className="featured-posts-cate">
                      {artist.categoryLabel || artist.category}
                    </p>
                    <h3 className="entry-title">
                      <Link to={`/kunstnere/${artist.slug}`}>
                        {artist.name}
                      </Link>
                    </h3>
                  </header>
                  <p>{artist.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="container home-content-layout">
          <section id="nyheder" className="content-primary">
            {homeStories.map((story) => (
              <article key={story.title} className="archive-post">
                <header className="entry-header">
                  <p className="entry-meta">{story.meta}</p>
                  <h2 className="entry-title">{story.title}</h2>
                </header>
                <p>{story.excerpt}</p>
                {story.body ? <p>{story.body}</p> : null}
              </article>
            ))}

            <section className="archive-post archive-post--compact">
              <header className="entry-header">
                <p className="entry-meta">Arkivnotat</p>
                <h2 className="entry-title">Genskabt på baggrund af Wayback</h2>
              </header>
              <p>{archiveNote}</p>
              <div className="exhibition-grid">
                {exhibitions2025.map((exhibition) => (
                  <article key={exhibition.title} className="exhibition-card">
                    <p className="featured-posts-cate">{exhibition.title}</p>
                    <h3>{exhibition.period}</h3>
                    <ul className="detail-list detail-list--compact">
                      {exhibition.artists.map((artist) => (
                        <li key={artist}>{artist}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </section>

          <aside
            id="secondary"
            className="sidebar widget-area"
            role="complementary"
          >
            <section className="widget">
              <h2 className="widget-title">Åbningstider 2025</h2>
              <p>I 2025 har vi åbent i perioderne:</p>
              <ul className="detail-list detail-list--compact">
                {openingPeriods.map((period) => (
                  <li key={period}>{period}</li>
                ))}
              </ul>
              <p>
                Normalt fra klokken 13 – 17. Altid når flaget er ude på
                Madsbadvej.
              </p>
              <p>Vi holder dog lukkedag om onsdagen.</p>
            </section>

            <section className="widget">
              <h2 className="widget-title">Kunstnere i 2025</h2>
              <ul className="widget-menu">
                {featuredArtists.map((artist) => (
                  <li key={artist.name}>
                    <Link to={`/kunstnere/${artist.slug}`}>{artist.name}</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="widget widget--notice">
              <h2 className="widget-title">Sommerudstilling</h2>
              <p>05.07.2025 til 31.08.2025</p>
              <p>Vi glæder os til at se dig i Karolines Hus på Fur.</p>
            </section>

            <section className="widget widget--graphics">
              <h2 className="widget-title">Historiske grafikker</h2>
              <div className="widget-graphics">
                {legacyGraphics.map((graphic) => (
                  <figure key={graphic.title}>
                    <img src={graphic.url} alt={graphic.title} loading="lazy" />
                    <figcaption>{graphic.title}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}
