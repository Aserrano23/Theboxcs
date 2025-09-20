import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";

type NavItem = { label: string; href?: string; children?: NavItem[] };
const LOGO_SRC = "/logo.png";
const NAV: NavItem[] = [
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "HyMove",
    href: "/hymove",
    /*  children: [
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
    ], */
  },
  {
    label: "Filosofía",
    children: [
      { label: "Old School Training", href: "/old-school-training" },

      {
        label: "Reglas Old School Training",
        href: "/reglas-old-school-training",
      },
      { label: "Vocabulario", href: "/vocabulario" },
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
    <header className="sticky top-0 z-50 my-5 bg-white/90 backdrop-blur">
      <div className="flex items-center h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Hamburger (mobile) */}
        <button
          className="inline-flex items-center justify-center w-12 h-12 mr-8 border rounded-md md:hidden border-zinc-300 hover:bg-zinc-50"
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
          <img src={LOGO_SRC} alt="The Box Castellón" className="w-auto h-15" />
          <span className="sr-only">The Box Castellón</span>
        </Link>

        {/* Desktop links (right) */}
        <ul className="items-center hidden gap-8 ml-auto md:flex">
          {NAV.map((item) => (
            <li key={item.label} className="relative group ">
              {item.children ? (
                <>
                  <button className="inline-flex items-center gap-1 text-lg font-medium text-emerald-800 hover:text-emerald-900">
                    {item.label}
                    <svg
                      className="w-4 h-4 opacity-80"
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
                            className="px-3 py-2 rounded-md"
                          >
                            <div className="text-sm font-semibold text-zinc-900">
                              {child.label}
                            </div>
                            <ul className="pl-3 mt-1 border-l border-zinc-200">
                              {child.children.map((grand) => (
                                <li key={grand.label}>
                                  <NavLink
                                    to={grand.href!}
                                    className="block px-2 py-1 text-sm rounded text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
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
                              className="block px-3 py-2 text-sm rounded-md text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
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
          className={`md:hidden pt-5 fixed inset-0 z-[999] ${
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
            <div className="flex items-center justify-between h-16 px-4 pt-10 sm:px-6 lg:px-8">
              <Link
                to="/"
                className="flex items-center gap-3"
                onClick={() => setOpen(false)}
              >
                <img
                  src={LOGO_SRC}
                  alt="The Box Castellón"
                  className="w-auto h-15"
                />
                <span className="sr-only">The Box Castellón</span>
              </Link>
              <button
                className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-zinc-100"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-8 h-8"
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
              <ul className="flex flex-col items-center w-full max-w-md gap-4">
                {NAV.map((item) => (
                  <li key={`m-${item.label}`} className="w-full text-center">
                    {item.children ? (
                      <details className="group">
                        <summary className="inline-flex items-center justify-center gap-2 text-2xl font-semibold list-none cursor-pointer sm:text-3xl text-emerald-800 hover:text-emerald-900">
                          {item.label}
                          <svg
                            className="w-5 h-5 transition-transform duration-200 opacity-80 group-open:rotate-180"
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
                                  <summary className="inline-flex items-center justify-center gap-2 text-lg font-medium list-none cursor-pointer text-emerald-800">
                                    {child.label}
                                    <svg
                                      className="w-4 h-4 transition-transform duration-200 opacity-80 group-open:rotate-180"
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
                        className="block text-2xl font-semibold sm:text-3xl text-emerald-800 hover:text-emerald-900"
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
