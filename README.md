# Karolines Hus

Website for Karolines Hus built with React, Vite and React Router.

## Tech Stack

- React 19
- Vite 7
- React Router 7
- ESLint 9

## Kom i gang

```bash
npm install
npm run dev
```

Lokal udviklingsserver kører typisk på `http://localhost:5173`.

## Scripts

```bash
npm run dev      # start udviklingsserver
npm run build    # production build
npm run preview  # preview af production build
npm run lint     # linting
```

## Struktur

```text
src/
  App.jsx
  main.jsx
  styles.css
  components/
    Footer.jsx
    ImageLightbox.jsx
    Navbar.jsx
    RouteMetadata.jsx
  pages/
    AboutPage.jsx
    ArtistPage.jsx
    ArtistsPage.jsx
    ContactPage.jsx
    HomePage.jsx
    NewsPage.jsx
    NotFoundPage.jsx
  siteContent.js
public/
  favicon.png
  logo.webp
  karolineshus/
  kunstnere/
```

## Routing

Routes er defineret i `src/App.jsx`:

- `/` -> forside
- `/udstillinger` -> udstillinger
- `/kunstnere` -> kunstneroversigt
- `/kunstnere/:slug` -> kunstnerdetalje
- `/om` -> om siden
- `/kontakt` -> kontakt
- `*` -> 404

## Performance og billeder

- Lokale billeder ligger i `public/` og bruges som WebP.
- Nuværende Lighthouse-rapport er gemt i `lighthouse-prod.json`.
