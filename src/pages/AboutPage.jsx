import {
  aboutGalleryImages,
  aboutParagraphs,
  archiveNote,
  contactInfo,
} from "../siteContent";

export default function AboutPage() {
  return (
    <>
      <main className="page classic-page">
        <div className="container home-content-layout">
          <section className="content-primary">
            <article className="archive-post">
              <header className="entry-header">
                <p className="entry-meta">Om os</p>
                <h1 className="entry-title">Historien om Karolines Hus</h1>
              </header>
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                De arkiverede sider beskriver huset som et galleri med både
                stueetage og 1. sal, hvor udstillingerne fordeles mellem værker
                til væg og værker til gulv.
              </p>
            </article>

            <article className="archive-post archive-post--compact">
              <header className="entry-header">
                <p className="entry-meta">Kildegrundlag</p>
                <h2 className="entry-title">Arkivbaseret rekonstruktion</h2>
              </header>
              <p>{archiveNote}</p>
              <div className="about-gallery">
                {aboutGalleryImages.map((imageUrl, index) => (
                  <img
                    key={imageUrl}
                    src={imageUrl}
                    alt={`Karolines Hus arkivfoto ${index + 1}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </article>
          </section>

          <aside className="sidebar widget-area" role="complementary">
            <section className="widget">
              <h2 className="widget-title">Karolines Hus</h2>
              <address className="contact-card__address">
                {contactInfo.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}
