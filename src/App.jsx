import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ArtistsPage from "./pages/ArtistsPage";
import ArtistPage from "./pages/ArtistPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nyheder" element={<NewsPage />} />
        <Route path="/kunstnere" element={<ArtistsPage />} />
        <Route path="/kunstnere/:slug" element={<ArtistPage />} />
        <Route
          path="/ellen-bye-jensen"
          element={<ArtistPage forcedSlug="ellen-bye-jensen" />}
        />
        <Route path="/om" element={<AboutPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
