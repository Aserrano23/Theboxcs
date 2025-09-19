/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/analytics-pageviews.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function GaPageViews() {
  const { pathname, search, hash } = useLocation();

  const fire = () => {
    // Respeta el consentimiento
    try {
      const c = JSON.parse(localStorage.getItem("cookie:consent:v1") || "null");
      if (!c?.analytics) return;
    } catch { return; }

    const gtag = (...args: any[]) => (window as any).gtag?.(...args);

    gtag("event", "page_view", {
      page_path: pathname + (search || "") + (hash || ""),
      page_location: window.location.href,
      page_title: document.title,
    });
  };

  useEffect(fire, [pathname, search, hash]); // en cada cambio de ruta

  // Si aceptan analíticas después, dispara una page_view inicial
  useEffect(() => {
    const onConsent = (ev: any) => {
      if (ev?.detail?.analytics) fire();
    };
    window.addEventListener("cookie-consent", onConsent);
    return () => window.removeEventListener("cookie-consent", onConsent);
  }, []);

  return null;
}