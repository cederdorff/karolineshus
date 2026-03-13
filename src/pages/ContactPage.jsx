import { archiveNote, contactInfo, openingPeriods } from "../siteContent";

export default function ContactPage() {
  return (
    <>
      <header className="page-header page-header--compact">
        <p className="eyebrow">Kontakt</p>
        <h1>Besøg Karolines Hus</h1>
        <p className="page-header__lead">
          Kontaktoplysningerne herunder er genskabt fra de seneste tilgængelige
          2025-snapshots.
        </p>
      </header>
      <main className="page">
        <section className="grid-section">
          <article className="panel contact-card">
            <p className="section-label">Kontaktoplysninger</p>
            <h2>{contactInfo.name}</h2>
            <p>{contactInfo.subtitle}</p>
            <address className="contact-card__address">
              {contactInfo.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
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
              <a
                href="https://maps.google.com/?q=Madsbadvej+40,+7884+Fur,+Danmark"
                target="_blank"
                rel="noreferrer"
              >
                Åbn adresse i kort
              </a>
            </p>
          </article>

          <article className="panel panel--accent">
            <p className="section-label">Åbningstider</p>
            <h2>Sæson 2025</h2>
            <ul className="detail-list">
              {openingPeriods.map((period) => (
                <li key={period}>{period}</li>
              ))}
            </ul>
            <p>
              Normalt klokken 13 – 17, altid når flaget er ude på Madsbadvej.
              Onsdage er lukkedage.
            </p>
            <p>Der er også åbent efter aftale i vinterperioden.</p>
          </article>
        </section>

        <section className="panel">
          <p className="section-label">Bemærkning</p>
          <h2>Om denne kontaktinformation</h2>
          <p>{archiveNote}</p>
          <p>
            Kontakt-snapshotet i Wayback peger på samme telefonnumre,
            mailadresse og adresse som Om-siden og udstillingssiden, så
            oplysningerne er konsistente på tværs af 2025-materialet.
          </p>
        </section>
      </main>
    </>
  );
}
