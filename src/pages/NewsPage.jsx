import { Link } from "react-router";
import { exhibitionPage, exhibitions2025 } from "../siteContent";

export default function ExhibitionsPage() {
  const asidePeriods = [
    "12.04.2025 til 21.04.2025.",
    "07.06.2025 til 12.06.2025",
    "05.07.2025 til 31.08.2025",
  ];

  return (
    <main className="page classic-page">
      <div className="container home-content-layout">
        <section className="content-primary">
          <article className="archive-post exhibitions-page__overview">
            <img
              className="artist-detail__image"
              src={exhibitionPage.heroImageUrl}
              alt="Karolines Hus"
            />
            <header className="entry-header">
              <h1 className="entry-title">Udstillinger i 2025</h1>
            </header>
            <p>
              Karolines Hus åbner d. 12.04.2025 med en påskeudstilling, som
              varer til og med d. 21.04.2025. kl. 17. Sommerudstillingen varer
              fra d. 05.07.2025 til og med 31.08.2025. Onsdage er lukkedage.
            </p>
            <p>Læs mere om udstillingerne på denne side.</p>

            <div className="exhibition-grid exhibition-grid--graphic">
              {exhibitions2025.map((exhibition) => (
                <article
                  key={exhibition.title}
                  className="exhibition-card exhibition-card--graphic"
                >
                  <p className="featured-posts-cate">{exhibition.title}</p>
                  <p className="exhibition-card__period">{exhibition.period}</p>
                  <ul className="detail-list detail-list--compact">
                    {exhibition.artists.map((artistName) => {
                      const artist = exhibitionPage.artistsByName[artistName];

                      if (!artist)
                        return <li key={artistName}>{artistName}</li>;

                      return (
                        <li key={artistName}>
                          <Link to={`/kunstnere/${artist.slug}`}>
                            {artistName}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ))}
            </div>

            <p>Vi glæder os til at se dig!</p>
            <p>
              I Karolines Hus har vi en stueetage og en 1. sal. Vi udstiller en
              til væge og en til gulv på hvert plan
            </p>
            <p>Venlig hilsen</p>
            <p>
              Troels Madsen
              <br />
              Mobil: 61377562 / 40434817
            </p>
          </article>
        </section>

        <aside className="sidebar widget-area" role="complementary">
          <section className="widget">
            <h2 className="widget-title">Åbningstider 2025</h2>
            <p>I 2025 har vi åbent i perioderne:</p>
            <ul className="detail-list detail-list--compact">
              {asidePeriods.map((period) => (
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
          </section>
        </aside>
      </div>
    </main>
  );
}
