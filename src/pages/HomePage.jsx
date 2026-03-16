import {
  exhibitions2025,
  featuredArtists,
  getArtistDisplayImageUrl,
  homeStories,
  legacyGraphics,
  openingPeriods,
  siteNote,
} from "../siteContent";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function getVisibleFeaturedCount() {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth < 560) return 1;
  if (window.innerWidth < 900) return 2;
  if (window.innerWidth < 1200) return 3;
  return 4;
}

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(getVisibleFeaturedCount);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const totalSlides = featuredArtists.length;
  const maxStartIndex = Math.max(totalSlides - visibleSlides, 0);
  const canSlide = maxStartIndex > 0;

  useEffect(() => {
    const updateVisibleSlides = () => {
      const nextVisibleSlides = getVisibleFeaturedCount();
      setVisibleSlides(nextVisibleSlides);
      setActiveSlide((current) =>
        Math.min(current, Math.max(totalSlides - nextVisibleSlides, 0)),
      );
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    return () => {
      window.removeEventListener("resize", updateVisibleSlides);
    };
  }, [totalSlides]);

  const goToPreviousSlide = () => {
    if (!canSlide) return;
    setActiveSlide((current) => (current === 0 ? maxStartIndex : current - 1));
  };

  const goToNextSlide = () => {
    if (!canSlide) return;
    setActiveSlide((current) => (current === maxStartIndex ? 0 : current + 1));
  };

  useEffect(() => {
    if (!canSlide || isSliderPaused) return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) =>
        current === maxStartIndex ? 0 : current + 1,
      );
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [canSlide, isSliderPaused, maxStartIndex]);

  const handleSliderBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsSliderPaused(false);
    }
  };

  return (
    <>
      <main id="main" className="site-main page page--home">
        <section id="featured-content" className="site-featured-content">
          <div className="featured-content-fullbleed">
            <div className="featured-content-fullbleed__inner">
              <div id="kunstnere" className="featured-slider">
                <div
                  className="featured-slider__interactive-zone"
                  onMouseEnter={() => setIsSliderPaused(true)}
                  onMouseLeave={() => setIsSliderPaused(false)}
                  onFocusCapture={() => setIsSliderPaused(true)}
                  onBlurCapture={handleSliderBlur}
                >
                  {canSlide ? (
                    <button
                      className="slider-control slider-control--prev"
                      type="button"
                      onClick={goToPreviousSlide}
                      aria-label="Forrige kunstner"
                    >
                      ‹
                    </button>
                  ) : null}

                  <div className="featured-slider__viewport" aria-live="polite">
                    <div
                      className="featured-slider__track"
                      style={{
                        transform: `translateX(-${activeSlide * (100 / visibleSlides)}%)`,
                      }}
                    >
                      {featuredArtists.map((artist, index) => {
                        const isVisible =
                          index >= activeSlide &&
                          index < activeSlide + visibleSlides;

                        return (
                          <article
                            key={artist.name}
                            className={`featured-slide${isVisible ? " is-visible" : ""}`}
                            style={{ flex: `0 0 ${100 / visibleSlides}%` }}
                          >
                            <Link
                              to={`/kunstnere/${artist.slug}`}
                              className="featured-slide__media"
                            >
                              <img
                                className="entry-thumbnail entry-thumbnail--featured"
                                src={getArtistDisplayImageUrl(artist)}
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
                        );
                      })}
                    </div>
                  </div>

                  {canSlide ? (
                    <button
                      className="slider-control slider-control--next"
                      type="button"
                      onClick={goToNextSlide}
                      aria-label="Næste kunstner"
                    >
                      ›
                    </button>
                  ) : null}
                </div>
              </div>

              {canSlide ? (
                <div
                  className="featured-slider__dots"
                  aria-label="Vælg kunstner-slide"
                >
                  {Array.from({ length: maxStartIndex + 1 }).map((_, index) => (
                    <button
                      key={index}
                      className={`slider-dot${index === activeSlide ? " is-active" : ""}`}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Vis gruppe ${index + 1}`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="container">
            <div className="featured-content-intro">
              <div className="featured-content-intro__heading">
                <p className="eyebrow">Karolines Hus på Fur</p>
                <h2>Kunstnere i fokus</h2>
              </div>
              <div className="featured-content-intro__body">
                <p>
                  Farver, former og fortællinger mødes i Karolines Hus. Her på
                  siden finder du et udvalg af årets kunstnere i 2025. Lad
                  slideren føre dig gennem værkerne, og gå videre til
                  kunstnersiderne for at dykke ned i hver enkelt stemme.
                </p>
                <Link className="featured-content-intro__cta" to="/kunstnere">
                  Se alle kunstnere
                </Link>
              </div>
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

            <section className="archive-post archive-post--compact archive-post--exhibitions">
              <header className="entry-header">
                <p className="entry-meta">Udstillinger</p>
                <h2 className="entry-title">Udstillingsprogram 2025</h2>
              </header>
              <p>{siteNote}</p>
              <div className="exhibition-grid exhibition-grid--graphic">
                {exhibitions2025.map((exhibition) => (
                  <article
                    key={exhibition.title}
                    className="exhibition-card exhibition-card--graphic"
                  >
                    <p className="featured-posts-cate">{exhibition.title}</p>
                    <p className="exhibition-card__period">
                      {exhibition.period}
                    </p>
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
