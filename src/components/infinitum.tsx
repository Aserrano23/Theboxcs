import { Link } from "react-router-dom";

const IconCheck = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
  </svg>
);

export const InfinitumSection = () => {
  return (
    <section className="pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white shadow-sm ring-1 ring-zinc-200 overflow-hidden">
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            {/* Columna texto */}
            <div className="p-6 md:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
                Partner de confianza
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Infinitum Salud
              </h2>
              <p className="mt-3 max-w-2xl text-zinc-700 leading-relaxed">
                Nuestro partner para <strong>nutrición</strong>,{" "}
                <strong>psicología</strong> y
                <strong> entrenamiento personal</strong>. Valoración inicial
                gratuita, planes personalizados y revisiones mensuales para que
                avances con seguridad.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/nutricion"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-800"
                >
                  Nutrición
                </Link>
                <Link
                  to="/psicologia"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-800"
                >
                  Psicología
                </Link>
                <Link
                  to="/entrenamiento-personal"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-300 hover:bg-emerald-50"
                >
                  Entrenamiento personal
                </Link>
              </div>
            </div>

            {/* Columna resumen + logo */}
            <div className="relative p-6 md:p-10 bg-gradient-to-br from-emerald-50/40 to-white border-t md:border-l border-zinc-200">
              <div className="flex items-center flex-col-reverse justify-between gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
                      <IconCheck />
                    </span>
                    <span className="text-sm text-zinc-800">
                      Valoración inicial gratuita.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
                      <IconCheck />
                    </span>
                    <span className="text-sm text-zinc-800">
                      Plan a medida y seguimiento mensual.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
                      <IconCheck />
                    </span>
                    <span className="text-sm text-zinc-800">
                      Presencial u online según tus tiempos.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
                      <IconCheck />
                    </span>
                    <span className="text-sm text-zinc-800">
                      Trabajo coordinado con el box.
                    </span>
                  </li>
                </ul>
                {/* Logo del partner (coloca el archivo en /public/infinitum-logo.svg o cambia la ruta) */}
                <img
                  src="/infinitum.jpg"
                  alt="Infinitum Salud"
                  className="h-20 opacity-90"
                />
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-200">
                <Link
                  to="https://infinitumsalud.es"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-800"
                >
                  Conócelos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
