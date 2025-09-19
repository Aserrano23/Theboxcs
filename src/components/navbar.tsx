import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";

type NavItem = { label: string; href?: string; children?: NavItem[] };
const LOGO_SRC = "/logo.png";
const NAV: NavItem[] = [
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Old School Training",
    children: [
      { label: "Ejercicio Físico", href: "/old-school-training" },
      {
        label: "Inifinitum",
        children: [
          { label: "Nutrición", href: "/nutricion" },
          { label: "Psicología", href: "/psicologia" },
          {
            label: "Entrenamiento personal",
            href: "/entrenamiento-personal",
          },
        ],
      },
    ],
  },
  {
    label: "Filosofía",
    children: [
      { label: "Vocabulario", href: "/vocabulario" },
      {
        label: "Reglas Old School Training",
        href: "/reglas-old-school-training",
      },
    ],
  },
  {
    label: "Box",
    children: [
      { label: "El Box", href: "/el-box" },
      /* { label: "Galeria", href: "/galeria" }, */
    ],
  },
  { label: "Precios", href: "/precios" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const style = body.style;

    const prev = {
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      width: style.width,
      overflow: style.overflow,
    } as const;

    const scrollY = window.scrollY;
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";
    style.overflow = "hidden";

    return () => {
      style.position = prev.position;
      style.top = prev.top;
      style.left = prev.left;
      style.right = prev.right;
      style.width = prev.width;
      style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <header className="sticky top-0 my-5 z-50 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center">
        {/* Hamburger (mobile) */}
        <button
          className="md:hidden mr-8 inline-flex h-12 w-12 items-center justify-center rounded-md border border-zinc-300 hover:bg-zinc-50"
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>

        {/* Logo (left) */}
        <Link to="/" className="flex items-center gap-15">
          <img src={LOGO_SRC} alt="The Box Castellón" className="h-15 w-auto" />
          <span className="sr-only">The Box Castellón</span>
        </Link>

        {/* Desktop links (right) */}
        <ul className="ml-auto hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <li key={item.label} className="relative group ">
              {item.children ? (
                <>
                  <button className="inline-flex items-center gap-1 text-lg font-medium text-emerald-800 hover:text-emerald-900">
                    {item.label}
                    <svg
                      className="h-4 w-4 opacity-80"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                    </svg>
                  </button>
                  <div className="pointer-events-none group-hover:pointer-events-auto invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute right-0 top-full z-50 w-72 rounded-lg border border-zinc-200 bg-white p-2 shadow-lg ring-1 ring-black/5 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2">
                    <ul className="space-y-1">
                      {item.children.map((child) =>
                        child.children ? (
                          <li
                            key={child.label}
                            className="rounded-md px-3 py-2"
                          >
                            <div className="text-sm font-semibold text-zinc-900">
                              {child.label}
                            </div>
                            <ul className="mt-1 pl-3 border-l border-zinc-200">
                              {child.children.map((grand) => (
                                <li key={grand.label}>
                                  <NavLink
                                    to={grand.href!}
                                    className="block rounded px-2 py-1 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                                  >
                                    {grand.label}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : (
                          <li key={child.label}>
                            <NavLink
                              to={child.href!}
                              className="block rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.href!}
                  className="text-lg font-medium text-emerald-800 hover:text-emerald-900"
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile overlay rendered at body level to avoid transparency/stacking issues */}
      {createPortal(
        <div
          className={`md:hidden mt-5 fixed inset-0 z-[999] ${
            open ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-hidden={!open}
        >
          {/* Solid white backdrop covering all */}
          <div
            className={`absolute inset-0 bg-white ${
              open ? "opacity-100" : "opacity-0"
            } transition-opacity duration-200`}
          />

          {/* Sliding content panel */}
          <div
            className={`absolute inset-0 flex flex-col transition-transform duration-300 ease-out ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Top bar: logo left, close right */}
            <div className="h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
              <Link
                to="/"
                className="flex items-center gap-3"
                onClick={() => setOpen(false)}
              >
                <img
                  src={LOGO_SRC}
                  alt="The Box Castellón"
                  className="h-15 w-auto"
                />
                <span className="sr-only">The Box Castellón</span>
              </Link>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-zinc-100"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M6 6l12 12M18 6l-12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Centered big links */}
            <nav className="px-6 flex-1 grid place-items-center min-h-[calc(100svh-4rem)]">
              <ul className="w-full max-w-md flex flex-col items-center gap-4">
                {NAV.map((item) => (
                  <li key={`m-${item.label}`} className="w-full text-center">
                    {item.children ? (
                      <details className="group">
                        <summary className="cursor-pointer list-none text-2xl sm:text-3xl font-semibold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-2 justify-center">
                          {item.label}
                          <svg
                            className="h-5 w-5 opacity-80 transition-transform duration-200 group-open:rotate-180"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                          </svg>
                        </summary>
                        <ul className="mt-2 space-y-2">
                          {item.children.map((child) =>
                            child.children ? (
                              <li key={`m-${child.label}`}>
                                <details className="group/inner">
                                  <summary className="cursor-pointer list-none text-lg font-medium text-emerald-800 inline-flex items-center gap-2 justify-center">
                                    {child.label}
                                    <svg
                                      className="h-4 w-4 opacity-80 transition-transform duration-200 group-open:rotate-180"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                                    </svg>
                                  </summary>
                                  <ul className="mt-1 space-y-1">
                                    {child.children.map((grand) => (
                                      <li key={`m-${grand.label}`}>
                                        <NavLink
                                          to={grand.href!}
                                          onClick={() => setOpen(false)}
                                          className="block text-base text-zinc-700 hover:text-zinc-900"
                                        >
                                          {grand.label}
                                        </NavLink>
                                      </li>
                                    ))}
                                  </ul>
                                </details>
                              </li>
                            ) : (
                              <li key={`m-${child.label}`}>
                                <NavLink
                                  to={child.href!}
                                  onClick={() => setOpen(false)}
                                  className="block text-lg text-zinc-700 hover:text-zinc-900"
                                >
                                  {child.label}
                                </NavLink>
                              </li>
                            )
                          )}
                        </ul>
                      </details>
                    ) : (
                      <NavLink
                        to={item.href!}
                        onClick={() => setOpen(false)}
                        className="block text-2xl sm:text-3xl font-semibold text-emerald-800 hover:text-emerald-900"
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
