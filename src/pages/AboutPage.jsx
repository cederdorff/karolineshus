import { aboutParagraphs, archiveNote, contactInfo } from "../siteContent";

export default function AboutPage() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Om os</p>
        <h1>Historien om Karolines Hus</h1>
        <p className="page-header__lead">
          Et galleri på Fur, skabt omkring Ellen Bye Jensen og et netværk af
          kunstnere, som udstiller i huset gennem sæsonen.
        </p>
      </header>
      <main className="page">
        <section className="panel panel--split">
          <div>
            <p className="section-label">Baggrund</p>
            <h2>Et sted for kunst, der skal tættere på hverdagen</h2>
          </div>
          <div className="stack">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="grid-section">
          <article className="panel">
            <p className="section-label">Stedet</p>
            <h2>Karolines Hus på Fur</h2>
            <p>
              De arkiverede sider beskriver huset som et galleri med både
              stueetage og 1. sal, hvor udstillingerne fordeles mellem værker
              til væg og værker til gulv.
            </p>
            <p>
              Værtsnavnene, der optræder i materialet, er Ellen Bye Jensen og
              Troels Madsen, og adressen er angivet som Madsbadvej 40, 7884 Fur.
            </p>
          </article>

          <article className="panel panel--accent">
            <p className="section-label">Kildegrundlag</p>
            <h2>Arkivbaseret rekonstruktion</h2>
            <p>{archiveNote}</p>
            <p>
              I den næste iteration kan vi udvide med flere originale
              kunstnersider, billeder og undersider, efterhånden som vi trækker
              mere præcist indhold ud af Wayback-snapshots.
            </p>
          </article>
        </section>

        <section className="panel">
          <p className="section-label">Adresse</p>
          <h2>Besøg galleriet</h2>
          <address className="contact-card__address">
            {contactInfo.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </section>
      </main>
    </>
  );
}
