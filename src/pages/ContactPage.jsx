import {
  contactInfo,
  contactPageImageUrl,
  openingPeriods,
} from "../siteContent";
import { useState } from "react";
import ImageLightbox from "../components/ImageLightbox";

export default function ContactPage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const lightboxImages = [
    {
      url: contactPageImageUrl,
      alt: "Karolines Hus set udefra",
    },
  ];

  return (
    <>
      <main id="main-content" tabIndex="-1" className="page classic-page">
        <div className="container home-content-layout">
          <section className="content-primary">
            <article className="archive-post">
              <button
                type="button"
                className="artist-image-button"
                onClick={() => setLightboxIndex(0)}
                aria-label="Vis stort billede af Karolines Hus"
              >
                <img
                  className="artist-detail__image"
                  src={contactPageImageUrl}
                  alt="Karolines Hus set udefra"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </button>
              <header className="entry-header">
                <p className="entry-meta">Kontakt</p>
                <h1 className="entry-title">Besøg Karolines Hus</h1>
              </header>
              <p>
                Du er altid velkommen i Karolines Hus. Kontakt os gerne, hvis du
                vil aftale et besøg uden for de almindelige åbningstider.
              </p>
              <address className="contact-card__address">
                <a href={contactInfo.mapsUrl} target="_blank" rel="noreferrer">
                  {contactInfo.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </a>
              </address>
              <p>
                <a href={`tel:+45${contactInfo.phones[0].replace(/\s+/g, "")}`}>
                  {contactInfo.phones[0]}
                </a>
                <span className="contact-separator">/</span>
                <a href={`tel:+45${contactInfo.phones[1].replace(/\s+/g, "")}`}>
                  {contactInfo.phones[1]}
                </a>
              </p>
              <p>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
              <p>
                <a href={contactInfo.mapsUrl} target="_blank" rel="noreferrer">
                  Åbn adresse i kort
                </a>
              </p>
            </article>
          </section>

          <aside className="sidebar widget-area" role="complementary">
            <section className="widget">
              <h2 className="widget-title">Åbningstider 2026</h2>
              <ul className="detail-list detail-list--compact">
                {openingPeriods.map((period) => (
                  <li key={period}>{period}</li>
                ))}
              </ul>
              <p>
                <strong>Åbningstider i perioderne</strong>
              </p>
              <p>
                Normalt klokken 13 – 17, altid når flaget er ude på Madsbadvej.
              </p>
              <p>Onsdage er lukkedage.</p>
            </section>

            <section className="widget">
              <h2 className="widget-title">Kontaktoplysninger</h2>
              <address className="contact-card__address">
                <a href={contactInfo.mapsUrl} target="_blank" rel="noreferrer">
                  {contactInfo.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </a>
              </address>
              <p>
                <a href={`tel:+45${contactInfo.phones[0].replace(/\s+/g, "")}`}>
                  {contactInfo.phones[0]}
                </a>
                <span className="contact-separator">/</span>
                <a href={`tel:+45${contactInfo.phones[1].replace(/\s+/g, "")}`}>
                  {contactInfo.phones[1]}
                </a>
              </p>
              <p>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            </section>
          </aside>
        </div>
      </main>
      <ImageLightbox
        images={lightboxImages}
        activeIndex={lightboxIndex}
        setActiveIndex={setLightboxIndex}
        dialogLabel="Billede af Karolines Hus"
      />
    </>
  );
}
