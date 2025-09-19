import { Link } from "react-router-dom";
import imgHero from "../assets/box2.webp";
import imgFloor from "../assets/box1.webp";
import imgKB from "../assets/box3.webp";
import imgCoach from "../assets/box2.webp";

const HYMOVE_URL = "https://hymove.es";

export default function Hymove() {
  return (
    <main className="font-montserrat">
      {/* HERO */}
      <section className="relative overflow-hidden isolate">
        {/* bg image */}
        <img
          src={imgHero}
          alt="HyMove — Centro de Entrenamiento Funcional e Híbrido"
          className="absolute inset-0 object-cover w-full h-full"
        />
        {/* overlays */}
        <div className="absolute inset-0 bg-zinc-950/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative px-4 py-16 mx-auto text-center text-white max-w-7xl sm:px-6 lg:px-8 md:py-24">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            HyMove — Entrenamiento Funcional e Híbrido
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-white/85">
            Partner oficial de The Box Castellón. Entrena fuerza, resistencia y
            movilidad con una metodología moderna y medible, en un entorno guiado.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
            <a
              href={HYMOVE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white shadow-lg rounded-xl bg-emerald-600 shadow-emerald-900/20 ring-1 ring-emerald-500/30 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Visitar HyMove
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-xl ring-1 ring-white/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Escríbenos
            </Link>
          </div>
        </div>
      </section>

      {/* SOBRE HYMOVE */}
      <section className="py-12 md:py-16">
        <div className="grid gap-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl text-zinc-900">
              ¿Qué es HyMove?
            </h2>
            <p className="mt-3 text-zinc-700">
              HyMove es un <strong>centro de entrenamiento funcional e híbrido</strong>
              , orientado a mejorar tu condición física con sesiones estructuradas
              y progresivas. El trabajo combina fuerza, resistencia y movilidad,
              con adaptaciones para todos los niveles (principiantes a avanzados).
            </p>
            <ul className="mt-5 space-y-2 text-zinc-700">
              <li>• Programación por bloques: movilidad, fuerza, core y conditioning.</li>
              <li>• Progresiones y alternativas para cada ejercicio.</li>
              <li>• Entorno guiado, enfoque en técnica y seguridad.</li>
            </ul>
          </div>

          {/* collage de imágenes */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            <img src={imgFloor} alt="" className="object-cover w-full h-64 col-span-2 row-span-2 md:h-80 rounded-2xl ring-1 ring-zinc-200" />
            <img src={imgKB} alt="" className="object-cover w-full h-32 md:h-36 rounded-2xl ring-1 ring-zinc-200" />
            <img src={imgCoach} alt="" className="object-cover w-full h-32 md:h-36 rounded-2xl ring-1 ring-zinc-200" />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-10 md:py-14 bg-zinc-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h3 className="text-2xl font-extrabold text-center md:text-3xl text-zinc-900">
            Lo que puedes entrenar en HyMove
          </h3>

          <div className="grid gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Entrenamiento funcional"
              desc="Sesiones completas con foco en patrones básicos, fuerza útil y salud postural."
              icon={
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeWidth="2" d="M4 19h16M6 15h12M8 11h8M10 7h4" />
                </svg>
              }
            />
            <Card
              title="Entrenamiento híbrido"
              desc="Combina fuerza + conditioning para mejorar rendimiento y capacidad aeróbica."
              icon={
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" d="M4 12h16M12 4v16" />
                </svg>
              }
            />
            <Card
              title="Progresión y seguimiento"
              desc="Evoluciona con progresiones, medición de sensaciones y ajustes de carga."
              icon={
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" d="M4 17l6-6 4 4 6-8" />
                </svg>
              }
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 mt-8 md:flex-row">
            <a
              href={HYMOVE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white shadow rounded-xl bg-emerald-700 hover:bg-emerald-800"
            >
              Ver más en HyMove
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl text-emerald-800 ring-1 ring-emerald-300 hover:bg-emerald-50"
            >
              Pide información
            </Link>
          </div>
        </div>
      </section>

      {/* CÓMO EMPEZAR */}
      <section className="py-10 md:py-14">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h3 className="text-2xl font-extrabold text-center md:text-3xl text-zinc-900">
            ¿Cómo empiezo?
          </h3>
          <div className="grid gap-5 mt-8 md:grid-cols-3">
            <Step
              n={1}
              title="Contacta"
              desc="Cuéntanos tu objetivo y tu experiencia. Te orientamos con la mejor opción."
            />
            <Step
              n={2}
              title="Primera sesión"
              desc="Aprende la técnica, conoce el espacio y ajustamos intensidades."
            />
            <Step
              n={3}
              title="Progreso"
              desc="Entrena con regularidad, registra sensaciones y ajusta tu plan."
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 text-white md:py-16 bg-gradient-to-br from-emerald-700 to-emerald-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h4 className="text-2xl font-extrabold md:text-3xl">¿Listo para empezar con HyMove?</h4>
          <p className="mt-2 text-white/90">
            Da el primer paso: te ayudamos a elegir el plan que mejor encaja contigo.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 mt-6 sm:flex-row">
            <a
              href={HYMOVE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-white shadow rounded-xl text-emerald-700 ring-1 ring-white/60 hover:bg-emerald-50"
            >
              Visitar HyMove
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-xl ring-1 ring-white/60 hover:bg-white/10"
            >
              Escríbenos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ——— UI helpers ——— */
function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="p-6 transition-shadow bg-white rounded-2xl ring-1 ring-zinc-200 hover:shadow-sm">
      <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
        {icon}
      </div>
      <h4 className="mt-4 text-lg font-semibold text-zinc-900">{title}</h4>
      <p className="mt-1 text-zinc-700">{desc}</p>
    </div>
  );
}

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="p-6 bg-white rounded-2xl ring-1 ring-zinc-200">
      <div className="flex items-center gap-3">
        <div className="grid font-bold text-white rounded-full h-9 w-9 place-items-center bg-emerald-600">
          {n}
        </div>
        <h5 className="text-lg font-semibold text-zinc-900">{title}</h5>
      </div>
      <p className="mt-2 text-zinc-700">{desc}</p>
    </div>
  );
}