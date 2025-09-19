/* eslint-disable @typescript-eslint/no-explicit-any */
export const Footer = () => {
  const YEAR = new Date().getFullYear();

  return (
    <footer className="relative border-t border-zinc-200 bg-white">
      {/* subtle top hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        {/* Top content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 items-start">
          {/* Logos */}
          <div className="flex items-center gap-4 sm:gap-6 md:col-span-2">
            <img
              src="/logo.png"
              alt="The Box Castellón"
              className="h-auto max-h-14 sm:max-h-24 md:max-h-28 lg:max-h-32 w-auto max-w-full shrink-0"
            />
            {/* Partner logo (optional) */}
            <img
              src="/infinitum.jpg"
              alt="Infinitum Salud"
              className="h-auto max-h-16 lg:max-h-24 w-auto max-w-full object-contain opacity-95"
            />
          </div>

          {/* Contacto */}
          <div className="text-zinc-700 md:col-span-2">
            <h3 className="text-base sm:text-lg font-semibold text-emerald-800">
              Contacto
            </h3>
            <ul className="mt-3 space-y-2 text-sm sm:text-base">
              <li className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-emerald-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.6a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.48-1.16a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0 1 22 16.92z"
                  />
                </svg>
                <span className="break-words">Pablo - 692 505 865</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-emerald-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4h16v16H4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 6l-10 7L2 6"
                  />
                </svg>
                <a
                  href="mailto:theboxcastellon@outlook.com"
                  className="hover:text-emerald-800 break-words"
                >
                  theboxcastellon@outlook.com
                </a>
              </li>
            </ul>
          </div>

          {/* Dirección */}
          <div className="text-zinc-700 md:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-emerald-800">
              Dirección
            </h3>
            <address className="mt-3 not-italic text-sm sm:text-base leading-relaxed">
              C/ José Pascual Viciano 10N
              <br />
              Polígono Industrial La Magdalena
              <br />
              12004 Castellón
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-zinc-200 pt-6 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Legal" className="text-sm text-zinc-600">
            <ul className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
              <li>
                <a href="/aviso-legal" className="hover:text-zinc-900">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="/politica-cookies" className="hover:text-zinc-900">
                  Política de cookies
                </a>
              </li>
              <li>
                <a href="/politica-privacidad" className="hover:text-zinc-900">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <button
                  onClick={() => (window as any).CookieConsent?.open?.()}
                  className="text-sm hover:text-emerald-800"
                >
                  Gestionar cookies
                </button>
              </li>
              <li>
                <a
                  href="https://asdev.es"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-900"
                >
                  Diseño Web
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-center md:text-right text-sm text-zinc-600">
            © {YEAR} The Box Castellón
          </p>
        </div>
      </div>

      {/* iOS safe area */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </footer>
  );
};
