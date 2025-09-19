import { Link } from "react-router-dom";
import imgHero from "../assets/box2.webp";

const PARTNER_ROUTE = "/hymove"; // página interna del partner
const HYMOVE_URL = "https://hymove.es";   // web oficial (externa)

export const HymoveSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="grid gap-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:grid-cols-2 md:items-center">
        {/* Columna izquierda: texto + CTAs + accesos rápidos */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" d="M5 12l5 5L20 7"/></svg>
            Partner oficial
          </span>

          <h2 className="mt-3 text-2xl font-extrabold md:text-3xl text-zinc-900">
            HyMove — Entrenamiento funcional e híbrido
          </h2>
          <p className="mt-3 text-zinc-700">
            Mejora fuerza, resistencia y movilidad con una metodología moderna,
            guiada y adaptable a todos los niveles. Entrena con progresiones y
            seguimiento para avanzar con seguridad.
          </p>

          {/* Puntos clave */}
          <ul className="mt-5 space-y-2 text-zinc-700">
            <li className="flex items-start gap-3"><IconCheck/> Programación por bloques (movilidad, fuerza, core y conditioning).</li>
            <li className="flex items-start gap-3"><IconCheck/> Progresiones y alternativas según nivel y experiencia.</li>
            <li className="flex items-start gap-3"><IconCheck/> Enfoque en técnica, seguridad y resultados medibles.</li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-3 mt-6 sm:flex-row">
            <Link
              to={PARTNER_ROUTE}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white shadow rounded-xl bg-emerald-700 hover:bg-emerald-800"
            >
              Conoce HyMove
            </Link>
            <a
              href={HYMOVE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl text-emerald-800 ring-1 ring-emerald-300 hover:bg-emerald-50"
            >
              Visitar web oficial
            </a>
          </div>
        </div>

        {/* Columna derecha: collage/visual */}
        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-zinc-200 bg-zinc-100">
            {/* Imagen principal */}
            <img src={imgHero} alt="Entrenamiento en HyMove" className="absolute inset-0 object-cover w-full h-full" />

            {/* Vignette suave */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/20" />

          </div>
        </div>
      </div>
    </section>
  );
};

/* ——— UI helpers ——— */
function IconCheck() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" d="M5 12l5 5L20 7"/></svg>
    </span>
  );
}