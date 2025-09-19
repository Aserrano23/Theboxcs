import { Link } from "react-router-dom";
import { Cta } from "../../components/cta";
import imgHero from "../../assets/nutricion-2.webp";

// --------- Tipos / Datos ---------

type Row = { concepto: string; precio: string };

const VALORACION: Row[] = [
  { concepto: "Valoración y medición básica", precio: "50€" },
  { concepto: "Valoración y medición ISAK con informe PDF", precio: "70€" },
];

const ENTREGA: Row[] = [
  { concepto: "Sesión única — Entrega de planificación nutricional", precio: "50€" },
];

const SEGUIMIENTO: Row[] = [
  { concepto: "Seguimiento y medición básica", precio: "50€" },
  { concepto: "Seguimiento y medición ISAK con informe PDF", precio: "70€" },
];

// --------- Tabla reusable ---------

function PriceTable({ rows, caption }: { rows: Row[]; caption?: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl ring-1 ring-zinc-200 bg-white">
      <table className="min-w-[560px] w-full text-left">
        {caption && (
          <caption className="px-4 pt-4 pb-2 text-sm text-zinc-600 text-left">{caption}</caption>
        )}
        <thead className="bg-zinc-50 text-zinc-700">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold">Consultas</th>
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

export const Nutricion = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* background image */}
        <img
          src={imgHero}
          alt="The Box Castellón"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-zinc-950/50" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Nutrición</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/85">
            Plan nutricional individualizado con evaluación inicial, entrega de planificación y revisiones para seguir tu progreso.
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

      {/* Primera sesión: evaluación completa */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-emerald-800 text-2xl md:text-3xl font-extrabold">Primera sesión: evaluación completa</h2>
          <p className="mt-4 max-w-5xl text-zinc-700 leading-relaxed">
            En la consulta inicial recopilamos toda la información relevante para diseñar tu <strong>planificación nutricional</strong>:
            hábitos alimentarios, estilo de vida, horarios, nivel de actividad, objetivos concretos y estado corporal.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 ring-1 ring-zinc-200">
              <h3 className="text-base font-semibold text-zinc-900">Medición básica</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Incluye talla, peso y algunos perímetros y pliegues cutáneos orientativos. Útil para valorar la evolución de forma general,
                sin informe ni aplicación de protocolos específicos.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-5 ring-1 ring-zinc-200">
              <h3 className="text-base font-semibold text-zinc-900">Medición antropométrica completa (ISAK)</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Medición avanzada siguiendo el protocolo ISAK. <span className="whitespace-nowrap">Incluye informe en PDF.</span>
                {" "}Más detalle en el servicio <em>Medición antropométrica completa ISAK</em>.
              </p>
            </article>
          </div>

          <h3 className="mt-8 text-xl font-bold text-zinc-900">Importes</h3>
          <div className="mt-4">
            <PriceTable rows={VALORACION} />
          </div>
        </div>
      </section>

      {/* Segunda sesión: entrega de planificación */}
      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-emerald-800 text-2xl md:text-3xl font-extrabold">Segunda sesión: entrega de planificación nutricional</h2>
          <p className="mt-4 max-w-5xl text-zinc-700 leading-relaxed">
            En una segunda sesión te entregamos un plan completamente adaptado a tus objetivos y necesidades:
          </p>
          <ul className="mt-3 list-disc pl-6 text-zinc-700 space-y-2">
            <li>Menú semanal personalizado</li>
            <li>Lista de la compra organizada</li>
            <li>Recetario práctico y variado</li>
            <li>
              Recomendaciones específicas según tu caso (rendimiento deportivo, salud digestiva, recomposición corporal, etc.)
            </li>
          </ul>

          <h3 className="mt-8 text-xl font-bold text-zinc-900">Importes</h3>
          <div className="mt-4">
            <PriceTable rows={ENTREGA} />
          </div>
        </div>
      </section>

      {/* Consultas de seguimiento */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-emerald-800 text-2xl md:text-3xl font-extrabold">Consultas de seguimiento</h2>
          <p className="mt-4 max-w-5xl text-zinc-700 leading-relaxed">
            Durante las revisiones ajustamos tu pauta en función de la evolución y tus sensaciones. Además, repetimos la
            medición corporal básica o la medición antropométrica completa ISAK para comparar resultados y valorar
            los progresos de forma objetiva.
          </p>
          <h3 className="mt-8 text-xl font-bold text-zinc-900">Importes</h3>
          <div className="mt-4">
            <PriceTable rows={SEGUIMIENTO} />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <Cta
        title="¿Quieres más información?"
        text="Escríbenos y agenda tu valoración gratuita."
        btn1="Contactar"
        linkbtn1="https://infinitumsalud.es"
        btn1blank={true}
        btn2="Ver planes del box"
        linkbtn2="/precios"
      />
    </main>
  );
};
