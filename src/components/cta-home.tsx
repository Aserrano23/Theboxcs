export const CtaHome = () => {
  return (
    <section
      aria-label="Llamada a la acción"
      className="relative isolate overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
      {/* Soft vignette */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center text-white">
        <h2 className="mx-auto max-w-5xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Saltamos, jugamos, subimos a lo más alto del box
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg text-white/80">
          Cansados de los estereotipos de los gimnasios donde la forma, los colores, verse en un espejo,
          llevar lo último en ropa, hace que “estés entrenando”, seas “lo más”...
        </p>
        <p className="mx-auto mt-3 max-w-4xl text-base sm:text-lg text-white/80">
          Haremos que tengas ganas de que llegue nuestra próxima sesión porque necesitas tu dosis de realidad,
          de provocación.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://www.supersaas.es/schedule/BoxCastellon/Horarios"
            target="_blank"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 ring-1 ring-emerald-500/30 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Reserva tu horario
          </a>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-white ring-1 ring-white/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Consulta cualquier duda
          </a>
        </div>
      </div>
    </section>
  );
};