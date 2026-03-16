import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RouteMetadata from "./components/RouteMetadata";
import HomePage from "./pages/HomePage";
import ExhibitionsPage from "./pages/NewsPage";
import ArtistsPage from "./pages/ArtistsPage";
import ArtistPage from "./pages/ArtistPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.focus({ preventScroll: true });
      }
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <RouteMetadata />
      <a className="skip-link" href="#main-content">
        Spring til indhold
      </a>
      <Navbar />
      <div key={location.pathname} className="route-transition">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/udstillinger" element={<ExhibitionsPage />} />
          <Route path="/kunstnere" element={<ArtistsPage />} />
          <Route path="/kunstnere/:slug" element={<ArtistPage />} />
          <Route path="/om" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
