import { contactInfo, openingPeriods } from "../siteContent";

export default function ContactPage() {
  return (
    <>
      <main className="page classic-page">
        <div className="container home-content-layout">
          <section className="content-primary">
            <article className="archive-post">
              <header className="entry-header">
                <p className="entry-meta">Kontakt</p>
                <h1 className="entry-title">Besøg Karolines Hus</h1>
              </header>
              <p>
                Du er altid velkommen i Karolines Hus. Kontakt os gerne, hvis du
                vil aftale et besøg uden for de almindelige åbningstider.
              </p>
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
          </section>

          <aside className="sidebar widget-area" role="complementary">
            <section className="widget">
              <h2 className="widget-title">Åbningstider 2025</h2>
              <ul className="detail-list detail-list--compact">
                {openingPeriods.map((period) => (
                  <li key={period}>{period}</li>
                ))}
              </ul>
              <p>
                Normalt klokken 13 – 17, altid når flaget er ude på Madsbadvej.
              </p>
              <p>Onsdage er lukkedage.</p>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}
