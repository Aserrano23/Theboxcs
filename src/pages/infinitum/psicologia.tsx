import { Link } from "react-router-dom";
import { Cta } from "../../components/cta";
import imgHero from "../../assets/nutricion.webp";

// --------- Tabla precios ---------

type Row = { concepto: string; precio: string };
const ROWS: Row[] = [{ concepto: "Sesión única", precio: "60,00€" }];

function PriceTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl ring-1 ring-zinc-200 bg-white">
      <table className="min-w-[420px] w-full text-left">
        <thead className="bg-zinc-50 text-zinc-700">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold">Consulta</th>
            <th className="px-4 py-3 text-sm font-semibold">Precio</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.concepto} className={i % 2 ? "bg-zinc-50/70" : "bg-white"}>
              <td className="px-4 py-4 text-zinc-800">{r.concepto}</td>
              <td className="px-4 py-4 font-semibold text-emerald-800">{r.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --------- Página ---------

export const Psicologia = () => {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Psicología</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/85">
            Consulta de evaluación inicial, definición de objetivos y metodología de trabajo. Plan terapéutico con
            revisiones y actividades para continuar el proceso entre sesiones.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="https://www.infinitumsalud.es"
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 ring-1 ring-emerald-500/30 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Más información
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

      {/* Descripción */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 max-w-5xl text-zinc-700 leading-relaxed">
            <p>
              En primer lugar se realiza una <strong>consulta de evaluación</strong>, en la que se expone el motivo de consulta y el
              psicólogo explica la <strong>metodología de trabajo</strong>. Se recoge toda la información necesaria para poner en marcha la
              terapia.
            </p>
            <p>
              Además, se determinan <strong>objetivos</strong> que marcarán el rumbo de las siguientes sesiones y que se irán
              reevaluando periódicamente.
            </p>
            <p>
              En las siguientes sesiones se trabajarán los distintos objetivos y se propondrán <strong>actividades</strong> para
              continuar con el trabajo psicológico en casa entre sesiones.
            </p>
          </div>

          <h2 className="mt-10 text-xl md:text-2xl font-bold text-zinc-900">Precios</h2>
          <div className="mt-4">
            <PriceTable rows={ROWS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <Cta
        title="¿Hablamos?"
        text="Agenda tu consulta de evaluación y empezamos."
        btn1="Contactar"
        linkbtn1="https://infinitumsalud.es"
        btn1blank={true}
        btn2="Ver planes del box"
        linkbtn2="/precios"
      />
    </main>
  );
};
