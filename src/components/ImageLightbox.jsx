import { useEffect } from "react";

export default function ImageLightbox({
  images,
  activeIndex,
  setActiveIndex,
  dialogLabel,
}) {
  const isOpen = activeIndex >= 0;
  const imageCount = images.length;
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(-1);
      }

      if (event.key === "ArrowRight" && imageCount > 1) {
        setActiveIndex((current) => (current + 1) % imageCount);
      }

      if (event.key === "ArrowLeft" && imageCount > 1) {
        setActiveIndex((current) => (current - 1 + imageCount) % imageCount);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [imageCount, isOpen, setActiveIndex]);

  if (!isOpen || !activeImage) {
    return null;
  }

  const showPreviousImage = () => {
    if (imageCount <= 1) {
      return;
    }

    setActiveIndex((current) => (current - 1 + imageCount) % imageCount);
  };

  const showNextImage = () => {
    if (imageCount <= 1) {
      return;
    }

    setActiveIndex((current) => (current + 1) % imageCount);
  };

  return (
    <div
      className="artist-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={dialogLabel}
      onClick={() => setActiveIndex(-1)}
    >
      <div
        className="artist-lightbox__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="artist-lightbox__close"
          onClick={() => setActiveIndex(-1)}
          aria-label="Luk galleri"
        >
          ×
        </button>

        {imageCount > 1 ? (
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
          src={activeImage.url}
          alt={activeImage.alt || "Galleri"}
        />

        {imageCount > 1 ? (
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
          {activeIndex + 1} / {imageCount}
        </p>
      </div>
    </div>
  );
}
