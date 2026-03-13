import {
  archiveNote,
  exhibitions2025,
  featuredArtists,
  openingPeriods,
} from "../siteContent";

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="hero__inner">
          <p className="eyebrow">Genopbygget fra arkivmateriale</p>
          <h1>Karolines Hus</h1>
          <p className="hero__lead">
            Galleriet på Fur med udstillinger, kunstnere og besøgsinformation
            samlet i en ny version baseret på de seneste tilgængelige snapshots
            fra 2025.
          </p>
          <div className="hero__callout">
            <span>Sommerudstilling</span>
            <strong>05.07.2025 til 31.08.2025</strong>
          </div>
        </div>
      </header>

      <main className="page page--home">
        <section className="panel panel--intro">
          <div>
            <p className="section-label">Karolines Hus</p>
            <h2>Et galleri skabt omkring kunst, netværk og Fur</h2>
          </div>
          <p>
            De arkiverede sider viser et levende galleri med fokus på
            udstillinger i ferieperioder, mindre kendte kunstnere og en jordnær
            tilgang til formidling. Denne første rekonstruktion samler de
            vigtigste oplysninger fra det nyeste cached indhold.
          </p>
        </section>

        <section className="grid-section">
          <article className="panel">
            <p className="section-label">Åbningstider 2025</p>
            <h2>Perioder med åbent galleri</h2>
            <ul className="detail-list">
              {openingPeriods.map((period) => (
                <li key={period}>{period}</li>
              ))}
            </ul>
            <p>
              Normalt fra klokken 13 – 17, altid når flaget er ude på
              Madsbadvej. Onsdage er lukkedage.
            </p>
          </article>

          <article className="panel panel--accent">
            <p className="section-label">Arkivnotat</p>
            <h2>Hvad der er genskabt nu</h2>
            <p>{archiveNote}</p>
            <p>
              Særligt tydeligt i 2025-arkivet er siden med udstillinger,
              kunstnere for 2025 samt opdaterede åbningstider og
              kontaktoplysninger.
            </p>
          </article>
        </section>

        <section className="panel">
          <p className="section-label">Udstillinger</p>
          <h2>Rekonstrueret program for 2025</h2>
          <div className="exhibition-grid">
            {exhibitions2025.map((exhibition) => (
              <article key={exhibition.title} className="exhibition-card">
                <h3>{exhibition.title}</h3>
                <p className="exhibition-card__period">{exhibition.period}</p>
                <ul className="detail-list detail-list--compact">
                  {exhibition.artists.map((artist) => (
                    <li key={artist}>{artist}</li>
                  ))}
                </ul>
                {exhibition.note ? <p>{exhibition.note}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <p className="section-label">Kunstnere i 2025</p>
          <h2>Profiler hentet fra arkiverede kunstnersider</h2>
          <div className="artist-grid">
            {featuredArtists.map((artist) => (
              <article key={artist.name} className="artist-card">
                <p className="artist-card__discipline">{artist.discipline}</p>
                <h3>{artist.name}</h3>
                <p>{artist.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
