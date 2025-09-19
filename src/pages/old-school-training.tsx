import heroImg from "../assets/box1.webp";
import { Cta } from "../components/cta";

export const OldSchoolTraining = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Old School Training"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Old School Training
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/85">
            El entrenamiento OldSchool se desarrolla desde tres focos que
            interactúan entre si.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/25">
              Ejercicio físico
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/25">
              Nutrición
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/25">
              Evaluación fisiomecánica
            </span>
          </div>
        </div>
      </section>

      {/* BLOQUE TRIPTICO */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-3 md:gap-12">
          <article>
            <h2 className="text-emerald-800 text-xl md:text-2xl font-bold">
              Precedentes
            </h2>
            <div className="mt-4 space-y-3 text-zinc-700 leading-relaxed">
              <p>
                <strong>Gimnasia</strong> — desde la Antigüedad (s. VII a. C.).
              </p>
              <p>
                <strong>Calistenia</strong> — desarrollo moderno en Francia (s.
                XVIII).
              </p>
              <p>
                <strong>Kettlebells</strong> — primeras referencias sobre 1700
                como pesas de grano.
              </p>
              <p>
                <strong>Halterofilia</strong> — se consolida en Europa en el s.
                XIX, con antecedentes previos.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-emerald-800 text-xl md:text-2xl font-bold">
              Qué hemos aprendido
            </h2>
            <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
              <p>
                Aunque muchos ejercicios existen desde hace siglos, hoy sabemos
                mejor <em>cómo</em> enseñarlos y <em>por qué </em>
                funcionan. Personalizamos según tus características y lo que
                dice la evidencia sobre eficiencia y biomecánica.
              </p>
              <p>
                Las necesidades del entrenamiento deben dirigirse a tus{" "}
                <strong>debilidades reales</strong>, no a un criterio genérico
                de rendimiento.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-emerald-800 text-xl md:text-2xl font-bold">
              Qué te enseñaremos
            </h2>
            <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
              <p>
                Eliminar limitaciones, equilibrar asimetrías y mejorar tu base
                para que todo lo demás progrese. Entrenamos el cuerpo para ser
                más capaz, no solo para un deporte concreto.
              </p>
              <p>
                Mantener a raya la debilidad es un trabajo continuo: reforzamos
                cimientos para que la estructura resista.
              </p>
            </div>
          </article>
        </div>

        <figure className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-4 text-center">
          <blockquote className="text-emerald-800 text-xl md:text-2xl font-semibold">
            “Primero moverse bien… luego moverse frecuentemente”
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            G. Cook
          </figcaption>
        </figure>
      </section>

      {/* CARDS BENEFICIOS */}
      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="Método Old School"
              desc="Acondicionamiento basado en las capacidades naturales del movimiento humano: caminar, correr, saltar, trepar, levantar, cargar, lanzar, atrapar."
            />
            <FeatureCard
              title="Cada día es un reto"
              desc="Combinamos calistenia, halterofilia, kettlebells, trabajo monoestructural y ejercicios funcionales para desarrollar todas las cualidades físicas."
            />
            <FeatureCard
              title="Trabaja el cuerpo entero"
              desc="Movimientos que integran cadenas musculares y articulaciones para generar fuerza desde el centro hacia las extremidades."
            />
            <FeatureCard
              title="Forma de entrenar"
              desc="No inventamos nada: entrenamos como lo han hecho siempre quienes necesitaban rendir de verdad, con criterio y propósito."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <Cta
        title="¿Listo para empezar?"
        text="Reserva una clase gratuita o consúltanos cualquier duda."
        btn1="Ver precios"
        linkbtn1="/precios"
        btn2="Contacto"
        linkbtn2="/contacto"
      />
    </main>
  );
};

/* ---------- helpers ---------- */

type FeatureProps = { title: string; desc: string };
const FeatureCard = ({ title, desc }: FeatureProps) => (
  <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
    <div className="flex items-center gap-3 text-emerald-700">
      <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 ring-1 ring-emerald-200">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 6L9 17l-5-5"
          />
        </svg>
      </span>
      <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
    </div>
    <p className="mt-3 text-sm leading-6 text-zinc-700">{desc}</p>
  </article>
);
