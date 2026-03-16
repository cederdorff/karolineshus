import { Link } from "react-router";
import { useState } from "react";
import {
  contactInfo,
  exhibitionPage,
  exhibitions2025,
  openingPeriods,
} from "../siteContent";
import ImageLightbox from "../components/ImageLightbox";

export default function ExhibitionsPage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const lightboxImages = [
    {
      url: exhibitionPage.heroImageUrl,
      alt: "Karolines Hus",
    },
  ];

  return (
    <main id="main-content" tabIndex="-1" className="page classic-page">
      <div className="container home-content-layout">
        <section className="content-primary">
          <article className="archive-post exhibitions-page__overview">
            <button
              type="button"
              className="artist-image-button"
              onClick={() => setLightboxIndex(0)}
              aria-label="Vis stort billede af Karolines Hus"
            >
              <img
                className="artist-detail__image"
                src={exhibitionPage.heroImageUrl}
                alt="Karolines Hus"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </button>
            <header className="entry-header">
              <p className="entry-meta">Udstillinger</p>
              <h1 className="entry-title">Udstillinger i 2025</h1>
            </header>
            <p>
              Her finder du årets udstillingsprogram i Karolines Hus med
              perioder og deltagende kunstnere.
            </p>
            <p>
              Onsdage er lukkedag, og du er altid velkommen efter aftale uden
              for de almindelige åbningstider.
            </p>

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

                      if (!artist) {
                        return (
                          <li
                            key={artistName}
                            className="exhibition-artist-item"
                          >
                            <span className="exhibition-artist-text">
                              {artistName}
                            </span>
                          </li>
                        );
                      }

                      return (
                        <li key={artistName} className="exhibition-artist-item">
                          <Link
                            className="exhibition-artist-link"
                            to={`/kunstnere/${artist.slug}`}
                          >
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
              I Karolines Hus er der både stueetage og 1. sal, hvor
              udstillingerne fordeles mellem værk til væg og værk til gulv på
              hvert plan.
            </p>
            <p>Venlig hilsen</p>
            <p>
              Troels Madsen
              <br />
              Mobil: {contactInfo.phones[0]} / {contactInfo.phones[1]}
            </p>
          </article>
        </section>

        <aside className="sidebar widget-area" role="complementary">
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
            <p>Altid åbent efter aftale på tlf.: 61377562 / 40434817.</p>
            <p>
              Ønsker du at besøge galleriet i vinterperioden, er du altid
              velkommen til at kontakte os og aftale en tid.
            </p>
          </section>
        </aside>
      </div>
      <ImageLightbox
        images={lightboxImages}
        activeIndex={lightboxIndex}
        setActiveIndex={setLightboxIndex}
        dialogLabel="Billede fra Karolines Hus"
      />
    </main>
  );
}
