 
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// --- Types & Storage helpers ---

type Consent = {
  necessary: true; // siempre activas
  analytics: boolean;
  updatedAt: string; // ISO date
};

const STORAGE_KEY = "cookie:consent:v1" as const;

function loadConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function saveConsent(c: Consent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  // Lanza un evento para que scripts externos (p.ej. Analytics) puedan reaccionar
  window.dispatchEvent(new CustomEvent("cookie-consent", { detail: c }));
}

// --- UI Component ---

export const PolicyModal = () => {
  const [, setConsent] = useState<Consent | null>(null);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  // Carga inicial
  useEffect(() => {
    const stored = loadConsent();
    if (!stored) {
      setBannerVisible(true);
    } else {
      setConsent(stored);
    }

    // expone una API mínima para reabrir/configurar desde cualquier parte
    (window as any).CookieConsent = {
      open: () => {
        setPanelOpen(true);
        setBannerVisible(false);
        setAnalytics(stored?.analytics ?? false);
      },
      reset: () => {
        localStorage.removeItem(STORAGE_KEY);
        setConsent(null);
        setAnalytics(false);
        setBannerVisible(true);
        setPanelOpen(false);
      },
    };
  }, []);

  // Guardar helpers
  const acceptAll = () => {
    const c: Consent = { necessary: true, analytics: true, updatedAt: new Date().toISOString() };
    saveConsent(c);
    setConsent(c);
    setBannerVisible(false);
    setPanelOpen(false);
  };

  const rejectAll = () => {
    const c: Consent = { necessary: true, analytics: false, updatedAt: new Date().toISOString() };
    saveConsent(c);
    setConsent(c);
    setBannerVisible(false);
    setPanelOpen(false);
  };

  const savePrefs = () => {
    const c: Consent = { necessary: true, analytics, updatedAt: new Date().toISOString() };
    saveConsent(c);
    setConsent(c);
    setPanelOpen(false);
    setBannerVisible(false);
  };

  // Bloquea scroll del body cuando el panel está abierto (móvil)
  useEffect(() => {
    if (!panelOpen) return;
    const { style } = document.body;
    const prev = { overflow: style.overflow } as const;
    style.overflow = "hidden";
    return () => {
      style.overflow = prev.overflow;
    };
  }, [panelOpen]);

  // --- Banner inferior ---
  const banner = bannerVisible ? (
    <div className="fixed inset-x-0 bottom-0 z-[1100]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
        <div className="rounded-2xl bg-white p-4 shadow-lg ring-1 ring-zinc-200">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-700">
              Usamos cookies propias y de terceros para que la web funcione correctamente y, si lo aceptas, para
              obtener estadísticas de uso. Puedes configurar tu elección. Más info en nuestra {" "}
              <a href="/cookies" className="text-emerald-800 hover:underline">Política de cookies</a> y {" "}
              <a href="/privacidad" className="text-emerald-800 hover:underline">Política de privacidad</a>.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-300 hover:bg-emerald-50"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={() => {
                  setAnalytics(false);
                  setPanelOpen(true);
                  setBannerVisible(false);
                }}
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-zinc-800 ring-1 ring-zinc-300 hover:bg-zinc-50"
              >
                Configurar
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-800"
              >
                Aceptar todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  // --- Panel de preferencias ---
  const panel = !panelOpen
    ? null
    : createPortal(
        <div className="fixed inset-0 z-[1200]">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setPanelOpen(false)}
            aria-hidden
          />

          {/* modal */}
          <div className="absolute inset-0 grid place-items-center p-4">
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Preferencias de cookies"
              className="w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 shadow-xl ring-1 ring-zinc-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-zinc-900">Preferencias de cookies</h2>
                  <p className="mt-1 text-sm text-zinc-700">
                    Controla el uso de cookies en este sitio. Las cookies técnicas son necesarias y no se pueden
                    desactivar. Puedes cambiar tu elección en cualquier momento.
                  </p>
                </div>
                <button
                  aria-label="Cerrar"
                  onClick={() => setPanelOpen(false)}
                  className="inline-grid h-9 w-9 place-items-center rounded-md hover:bg-zinc-100"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {/* Técnicas */}
                <div className="rounded-xl border border-zinc-200 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-zinc-900">Técnicas o funcionales</p>
                      <p className="text-sm text-zinc-600">Necesarias para el funcionamiento básico del sitio. Siempre activas.</p>
                    </div>
                    <label className="inline-flex items-center gap-2 text-sm text-zinc-500">
                      <input type="checkbox" checked readOnly className="h-4 w-4 rounded border-zinc-300" />
                      Activadas
                    </label>
                  </div>
                </div>

                {/* Analíticas */}
                <div className="rounded-xl border border-zinc-200 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-zinc-900">Analíticas</p>
                      <p className="text-sm text-zinc-600">Nos ayudan a entender el uso de la web para mejorarla.</p>
                    </div>
                    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={analytics}
                        onChange={(e) => setAnalytics(e.target.checked)}
                        className="h-4 w-4 rounded border-zinc-300"
                      />
                      <span className="text-sm text-zinc-700">{analytics ? "Activadas" : "Desactivadas"}</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-300 hover:bg-emerald-50"
                >
                  Rechazar todo
                </button>
                <button
                  type="button"
                  onClick={savePrefs}
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-800"
                >
                  Guardar preferencias
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-zinc-800 ring-1 ring-zinc-300 hover:bg-zinc-50"
                >
                  Aceptar todo
                </button>
              </div>

              <p className="mt-4 text-xs text-zinc-500">
                Consulta nuestra <a href="/cookies" className="text-emerald-800 hover:underline">Política de cookies</a> y
                {" "}
                <a href="/privacidad" className="text-emerald-800 hover:underline">Política de privacidad</a>.
              </p>
            </div>
          </div>
        </div>
      , document.body);

  return (
    <>
      {banner}
      {panel}
    </>
  );
};
