import {
  aboutGalleryImages,
  aboutParagraphs,
  contactInfo,
  exhibitionPage,
  siteNote,
} from "../siteContent";
import { useState } from "react";
import ImageLightbox from "../components/ImageLightbox";

export default function AboutPage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const lightboxImages = [
    {
      url: exhibitionPage.heroImageUrl,
      alt: "Karolines Hus",
    },
    ...aboutGalleryImages.map((imageUrl, index) => ({
      url: imageUrl,
      alt: `Karolines Hus galleri foto ${index + 1}`,
    })),
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
                  src={exhibitionPage.heroImageUrl}
                  alt="Karolines Hus"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </button>
              <header className="entry-header">
                <p className="entry-meta">Om os</p>
                <h1 className="entry-title">Historien om Karolines Hus</h1>
              </header>
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                Karolines Hus er indrettet med både stueetage og 1. sal, hvor
                udstillingerne fordeles mellem værker til væg og værker til
                gulv.
              </p>
            </article>

            <article className="archive-post archive-post--compact">
              <header className="entry-header">
                <p className="entry-meta">Karolines Hus</p>
                <h2 className="entry-title">Et levende galleri på Fur</h2>
              </header>
              <p>{siteNote}</p>
              <p>
                Sitet er nu udbygget med menupunkterne Hjem, Udstillinger,
                Kunstnere, Om os, Ellen Bye Jensen og Kontakt, samt
                kunstnerkategorier og individuelle undersider.
              </p>
              <div className="about-gallery">
                {aboutGalleryImages.map((imageUrl, index) => (
                  <button
                    key={imageUrl}
                    type="button"
                    className="artist-image-button"
                    onClick={() => setLightboxIndex(index + 1)}
                    aria-label={`Vis stort galleri-billede ${index + 1}`}
                  >
                    <img
                      src={imageUrl}
                      alt={`Karolines Hus galleri foto ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            </article>
          </section>

          <aside className="sidebar widget-area" role="complementary">
            <section className="widget">
              <h2 className="widget-title">Besøg og kontakt</h2>
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
        dialogLabel="Galleri for Karolines Hus"
      />
    </>
  );
}
