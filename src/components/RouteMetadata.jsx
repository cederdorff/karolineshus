import { useEffect } from "react";
import { useLocation } from "react-router";
import {
  contactInfo,
  exhibitionPage,
  getArtistBySlug,
  getArtistDisplayImageUrl,
} from "../siteContent";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function getRouteMeta(pathname) {
  const normalizedPath = pathname || "/";
  const siteTitle = "Karolines Hus";
  const fallbackImage = exhibitionPage.heroImageUrl;

  if (normalizedPath === "/") {
    return {
      title: `${siteTitle} | Galleriet på Fur`,
      description:
        "Karolines Hus på Fur viser aktuelle udstillinger, kunstnere og praktisk information om galleriet og årets program.",
      image: fallbackImage,
      robots: "index, follow",
      type: "website",
    };
  }

  if (normalizedPath === "/udstillinger") {
    return {
      title: `Udstillinger i 2026 | ${siteTitle}`,
      description:
        "Se åbningperioder, deltagende kunstnere og praktisk information om udstillingerne i Karolines Hus i 2026.",
      image: fallbackImage,
      robots: "index, follow",
      type: "website",
    };
  }

  if (normalizedPath === "/kunstnere") {
    return {
      title: `Kunstnere | ${siteTitle}`,
      description:
        "Få overblik over kunstnerne i Karolines Hus og gå videre til de enkelte kunstnersider med billeder og baggrund.",
      image: fallbackImage,
      robots: "index, follow",
      type: "website",
    };
  }

  if (normalizedPath.startsWith("/kunstnere/")) {
    const slug = normalizedPath.replace("/kunstnere/", "");
    const artist = getArtistBySlug(slug);

    if (artist) {
      return {
        title: `${artist.name} | ${siteTitle}`,
        description: artist.excerpt,
        image: getArtistDisplayImageUrl(artist) || fallbackImage,
        robots: "index, follow",
        type: "article",
      };
    }
  }

  if (normalizedPath === "/om") {
    return {
      title: `Om os | ${siteTitle}`,
      description:
        "Læs historien om Karolines Hus på Fur og få indblik i galleriets rammer, formål og kunstneriske profil.",
      image: fallbackImage,
      robots: "index, follow",
      type: "website",
    };
  }

  if (normalizedPath === "/kontakt") {
    return {
      title: `Kontakt | ${siteTitle}`,
      description: `Find adresse, åbningstider, telefon og mail til ${contactInfo.name} på Fur.`,
      image: fallbackImage,
      robots: "index, follow",
      type: "website",
    };
  }

  return {
    title: `Siden blev ikke fundet | ${siteTitle}`,
    description: "Den ønskede side blev ikke fundet på Karolines Hus.",
    image: fallbackImage,
    robots: "noindex, follow",
    type: "website",
  };
}

export default function RouteMetadata() {
  const location = useLocation();

  useEffect(() => {
    const { title, description, image, robots, type } = getRouteMeta(
      location.pathname,
    );
    const canonicalUrl = new URL(
      location.pathname,
      window.location.origin,
    ).toString();

    document.documentElement.lang = "da";
    document.title = title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[name="robots"]', { name: "robots", content: robots });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: image,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: image,
    });
    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });
  }, [location.pathname]);

  return null;
}
