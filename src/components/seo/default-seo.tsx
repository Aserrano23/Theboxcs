import { Helmet } from "react-helmet-async";

/**
 * SEO por defecto en todo el sitio.
 * Puedes añadir <Helmet> específico en cada página cuando quieras.
 */
export function DefaultSeo() {
  const SITE = (import.meta.env.VITE_SITE_URL as string | undefined) || "";
  const url = typeof window !== "undefined" ? new URL(window.location.href) : null;
  const canonical = SITE && url ? SITE.replace(/\/$/, "") + url.pathname : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: "The Box Castellón",
    url: SITE || "https://www.theboxcastellon.com",
    image: SITE ? `${SITE.replace(/\/$/, "")}/og.jpg` : "/og.jpg",
    telephone: "+34692505865",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C/ José Pascual Viciano 10N",
      addressLocality: "Castellón",
      postalCode: "12004",
      addressRegion: "Castellón",
      addressCountry: "ES",
    },
  };

  return (
    <Helmet>
      <html lang="es" />
      <title>The Box Castellón — crosstraining & Entrenamiento</title>
      <meta
        name="description"
        content="Entrena en The Box Castellón: crosstraining, fuerza y acondicionamiento. Planes a tu medida y servicios de nutrición y psicología con Infinitum Salud."
      />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:site_name" content="The Box Castellón" />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:title" content="The Box Castellón — crosstraining & Entrenamiento" />
      <meta property="og:description" content="Entrena en The Box Castellón: crosstraining, fuerza y acondicionamiento. Planes a tu medida." />
      <meta property="og:image" content={SITE ? `${SITE.replace(/\/$/, "")}/og.jpg` : "/og.jpg"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Box Castellón — crosstraining & Entrenamiento" />
      <meta name="twitter:description" content="Entrena en The Box Castellón: crosstraining, fuerza y acondicionamiento. Planes a tu medida." />
      <meta name="twitter:image" content={SITE ? `${SITE.replace(/\/$/, "")}/og.jpg` : "/og.jpg"} />

      {/* PWA tint */}
      <meta name="theme-color" content="#065f46" />

      {/* LocalBusiness JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}