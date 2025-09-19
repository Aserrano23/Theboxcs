import { Link } from "react-router-dom";
import { Cta } from "../../components/cta";
import imgHero from "../../assets/box1.webp";

// --------- Tipos ---------

type Row = {
  semanal: string;
  precio: string; // precio mensual
};

// Online (única modalidad)
const ONLINE: Row[] = [
  { semanal: "2 por semana", precio: "40,00€" },
  { semanal: "3 por semana", precio: "45,00€" },
  { semanal: "4 por semana", precio: "50,00€" },
];

// --------- Tabla reusable ---------

function PriceTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl ring-1 ring-zinc-200 bg-white">
      <table className="min-w-[420px] w-full text-left">
        <thead className="bg-zinc-50 text-zinc-700">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold">Sesiones semanales</th>
            <th className="px-4 py-3 text-sm font-semibold">Precio mensual</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.semanal} className={i % 2 ? "bg-zinc-50/70" : "bg-white"}>
              <td className="px-4 py-4 text-zinc-800">{r.semanal}</td>
              <td className="px-4 py-4 font-semibold text-emerald-800">{r.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --------- Página ---------

export const EntrenamientoPersonal = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* background image */}
        <img
          src={imgHero}
          alt="The Box Castellón"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-zinc-950/50" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Entrenamiento personal online
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/85">
            Entrena desde casa o desde tu gimnasio con una planificación adaptada a tu nivel y experiencia,
            además de revisiones mensuales para garantizar el cumplimiento de tus objetivos.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="https://www.infinitumsalud.es"
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 ring-1 ring-emerald-500/30 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Mas información
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-white ring-1 ring-white/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Escríbenos
            </Link>
          </div>
        </div>
      </section>

      {/* Online */}
      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-emerald-800 text-2xl md:text-3xl font-extrabold">
            Entrenamiento personal online
          </h2>
          <p className="mt-4 max-w-5xl text-zinc-700 leading-relaxed">
            Este método te permite entrenar desde casa o desde tu gimnasio. Obtendrás una planificación
            adaptada en función de tu nivel y experiencia, además de <strong>revisiones mensuales</strong> para
            garantizar el cumplimiento de tus objetivos.
          </p>

          <h3 className="mt-8 text-xl font-bold text-zinc-900">Precios</h3>
          <div className="mt-4">
            <PriceTable rows={ONLINE} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <Cta
        title="¿Quieres más información?"
        text="Cuéntanos tu objetivo y te proponemos el plan adecuado."
        btn1="Contactar"
        linkbtn1="https://infinitumsalud.es"
        btn1blank={true}
        btn2="Ver planes del box"
        linkbtn2="/precios"
      />
    </main>
  );
};
