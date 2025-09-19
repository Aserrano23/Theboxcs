/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
import { useEffect } from "react";

/**
 * Carga GA4 solo si hay consentimiento (PolicyModal).
 * Define VITE_GA_ID en .env (ej.: G-XXXXXXXXXX)
 */
export function Analytics() {
  const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

  useEffect(() => {
    if (!GA_ID) return;

    function setEnabled(enabled: boolean) {
      (window as any)[`ga-disable-${GA_ID}`] = !enabled; // respeta preferencia
      if (enabled) ensureLoaded();
    }

    function ensureLoaded() {
      if (document.getElementById("ga4-lib")) return;

      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      s.id = "ga4-lib";
      document.head.appendChild(s);

      const inline = document.createElement("script");
      inline.id = "ga4-inline";
      inline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { anonymize_ip: true });
      `;
      document.head.appendChild(inline);
    }

    // estado inicial desde el banner
    try {
      const raw = localStorage.getItem("cookie:consent:v1");
      if (raw) {
        const c = JSON.parse(raw);
        setEnabled(!!c.analytics);
      }
    } catch {}

    // escucha cambios de consentimiento
    const onChange = (ev: any) => {
      const c = ev?.detail;
      if (!c) return;
      setEnabled(!!c.analytics);
    };
    window.addEventListener("cookie-consent", onChange as any);
    return () => window.removeEventListener("cookie-consent", onChange as any);
  }, [GA_ID]);

  return null;
}