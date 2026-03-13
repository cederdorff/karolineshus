import { Link } from "react-router";
import { exhibitionPage, exhibitions2025 } from "../siteContent";

export default function ExhibitionsPage() {
  return (
    <main className="page classic-page">
      <div className="container home-content-layout">
        <section className="content-primary">
          <article className="archive-post">
            <img
              className="artist-detail__image"
              src={exhibitionPage.heroImageUrl}
              alt="Karolines Hus"
            />
            <header className="entry-header">
              <p className="entry-meta">Nyheder</p>
              <h1 className="entry-title">Udstillinger i 2025</h1>
            </header>
            <p className="entry-meta">Nyhederadmin26/03/2025</p>
            <p>
              På denne side kan du læse mere om udstillingsterminer i Karolines
              Hus. Karolines Hus åbner d. 12.04.2025 med en påskeudstilling, som
              varer til og med d. 21.04.2025. kl. 17. Vi glæder os til at se
              dig!
            </p>
            <p>
              <Link to="/udstillinger">Læs mere</Link>
            </p>
          </article>

          <article className="archive-post">
            <header className="entry-header">
              <h2 className="entry-title">Åbningstider 2025</h2>
            </header>
            <p>I 2025 har vi åbent i perioderne:</p>
            <ul className="detail-list detail-list--compact">
              {exhibitionPage.openingPeriods.map((period) => (
                <li key={period}>{period}</li>
              ))}
            </ul>
            <p>
              Normalt fra klokken 13 – 17. Altid når flaget er ude på
              Madsbadvej.
            </p>
            <p>Vi holder dog lukkedag om onsdagen.</p>
            <p>Altid åbent efter aftale på tlf.: 61377562 / 40434817.</p>
            <p>
              Ønsker du at besøge galleriet i vinterperioden, er du altid
              velkommen til at kontakte os og aftale en tid.
            </p>
          </article>
        </section>

        <aside className="sidebar widget-area" role="complementary">
          <section className="widget">
            <h2 className="widget-title">Kunstnere i 2025</h2>
            <ul className="widget-menu">
              {exhibitions2025[1].artists.map((artistName) => {
                const artist = exhibitionPage.artistsByName[artistName];
                if (!artist) return null;
                return (
                  <li key={artistName}>
                    <Link to={`/kunstnere/${artist.slug}`}>{artistName}</Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}
