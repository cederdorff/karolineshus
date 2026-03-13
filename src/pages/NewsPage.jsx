import { Link } from "react-router";
import { homeStories } from "../siteContent";

export default function NewsPage() {
  return (
    <main className="page classic-page">
      <div className="container home-content-layout">
        <section className="content-primary">
          <article className="archive-post">
            <header className="entry-header">
              <p className="entry-meta">Nyheder</p>
              <h1 className="entry-title">Seneste fra Karolines Hus</h1>
            </header>
            <p>
              Arkiverede nyheder fra den tidligere version af sitet, genskabt i
              den nye struktur.
            </p>
          </article>

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
        </section>

        <aside className="sidebar widget-area" role="complementary">
          <section className="widget">
            <h2 className="widget-title">Genveje</h2>
            <ul className="widget-menu">
              <li>
                <Link to="/kunstnere">Se alle kunstnere</Link>
              </li>
              <li>
                <Link to="/ellen-bye-jensen">Ellen Bye Jensen</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt galleriet</Link>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}
