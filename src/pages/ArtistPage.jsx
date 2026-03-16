import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
import {
  getArtistBySlug,
  artistCategoryLabels,
  getArtistDisplayImageUrl,
  getArtistGalleryImageUrls,
  artistsWidget,
} from "../siteContent";

export default function ArtistPage({ forcedSlug }) {
  const params = useParams();
  const slug = forcedSlug || params.slug;
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const lightboxContentRef = useRef(null);
  const lightboxCloseRef = useRef(null);
  const lastFocusedElementRef = useRef(null);
  const artist = getArtistBySlug(slug);
  const artistImageUrl = artist ? getArtistDisplayImageUrl(artist) : "";
  const artistImagePool = artist ? getArtistGalleryImageUrls(artist) : [];
  const explicitGalleryImageUrls = Array.isArray(artist?.galleryImageUrls)
    ? artist.galleryImageUrls.filter((imageUrl) =>
        artistImagePool.includes(imageUrl),
      )
    : [];
  const galleryImagesWithoutLead = explicitGalleryImageUrls.filter(
    (imageUrl) => imageUrl !== artistImageUrl,
  );
  const lightboxImageUrls = Array.from(
    new Set([artistImageUrl, ...galleryImagesWithoutLead].filter(Boolean)),
  );
  const sections = Array.isArray(artist?.sections) ? artist.sections : [];
  const memberships = Array.isArray(artist?.memberships)
    ? artist.memberships
    : [];
  const isLightboxOpen = lightboxIndex >= 0;
  const lightboxImageUrl = lightboxImageUrls[lightboxIndex] || "";

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxIndex(-1);
      }

      if (event.key === "ArrowRight" && lightboxImageUrls.length > 1) {
        setLightboxIndex((current) => (current + 1) % lightboxImageUrls.length);
      }

      if (event.key === "ArrowLeft" && lightboxImageUrls.length > 1) {
        setLightboxIndex(
          (current) =>
            (current - 1 + lightboxImageUrls.length) % lightboxImageUrls.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isLightboxOpen, lightboxImageUrls.length]);

  useEffect(() => {
    if (!isLightboxOpen) {
      if (lastFocusedElementRef.current instanceof HTMLElement) {
        lastFocusedElementRef.current.focus({ preventScroll: true });
      }
      return;
    }

    lastFocusedElementRef.current = document.activeElement;
    lightboxCloseRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event) => {
      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = lightboxContentRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements || focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isLightboxOpen]);

  const openLightboxFromUrl = (imageUrl) => {
    const index = lightboxImageUrls.indexOf(imageUrl);
    if (index >= 0) {
      setLightboxIndex(index);
    }
  };

  const showPreviousImage = () => {
    if (lightboxImageUrls.length <= 1) {
      return;
    }

    setLightboxIndex(
      (current) =>
        (current - 1 + lightboxImageUrls.length) % lightboxImageUrls.length,
    );
  };

  const showNextImage = () => {
    if (lightboxImageUrls.length <= 1) {
      return;
    }

    setLightboxIndex((current) => (current + 1) % lightboxImageUrls.length);
  };

  if (!artist) {
    return (
      <main id="main-content" tabIndex="-1" className="page classic-page">
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
    <main id="main-content" tabIndex="-1" className="page classic-page">
      <div className="container home-content-layout">
        <section className="content-primary">
          <article
            className={`archive-post artist-detail${artistImageUrl ? "" : " artist-detail--no-image"}`}
          >
            {artistImageUrl ? (
              <button
                type="button"
                className="artist-image-button"
                onClick={() => openLightboxFromUrl(artistImageUrl)}
                aria-label={`Vis stort billede af ${artist.name}`}
              >
                <img
                  className="artist-detail__image"
                  src={artistImageUrl}
                  alt={artist.name}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </button>
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

            {galleryImagesWithoutLead.length > 0 ? (
              <section className="artist-gallery">
                <h2 className="artist-section__title">Galleri</h2>
                <div className="artist-gallery__grid">
                  {galleryImagesWithoutLead.map((imageUrl, index) => (
                    <button
                      key={imageUrl}
                      type="button"
                      className="artist-gallery__item"
                      onClick={() => openLightboxFromUrl(imageUrl)}
                      aria-label={`Vis stort galleri-billede ${index + 1}`}
                    >
                      <img
                        src={imageUrl}
                        alt={`${artist.name} værk ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              </section>
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
            <h2 className="widget-title">Kunstnere i 2026</h2>
            <ul className="widget-menu">
              {artistsWidget
                .filter((a) => a.slug !== slug)
                .map((a) => (
                  <li key={a.slug}>
                    <Link to={`/kunstnere/${a.slug}`}>{a.name}</Link>
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

      {isLightboxOpen ? (
        <div
          className="artist-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Galleri for ${artist.name}`}
          onClick={() => setLightboxIndex(-1)}
        >
          <div
            className="artist-lightbox__content"
            ref={lightboxContentRef}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="artist-lightbox__close"
              ref={lightboxCloseRef}
              onClick={() => setLightboxIndex(-1)}
              aria-label="Luk galleri"
            >
              ×
            </button>

            {lightboxImageUrls.length > 1 ? (
              <button
                type="button"
                className="artist-lightbox__nav artist-lightbox__nav--prev"
                onClick={showPreviousImage}
                aria-label="Forrige billede"
              >
                ‹
              </button>
            ) : null}

            <img
              className="artist-lightbox__image"
              src={lightboxImageUrl}
              alt={`${artist.name} galleri`}
            />

            {lightboxImageUrls.length > 1 ? (
              <button
                type="button"
                className="artist-lightbox__nav artist-lightbox__nav--next"
                onClick={showNextImage}
                aria-label="Næste billede"
              >
                ›
              </button>
            ) : null}

            <p className="artist-lightbox__counter">
              {lightboxIndex + 1} / {lightboxImageUrls.length}
            </p>
          </div>
        </div>
      ) : null}
    </main>
  );
}
