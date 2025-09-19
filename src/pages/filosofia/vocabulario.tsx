import { Link } from "react-router-dom";
import { Cta } from "../../components/cta";
import imgHero from "../../assets/box1.webp";

export const Vocabulario = () => {
  const items: { title: string; body: string }[] = [
    {
      title: "Actitud",
      body: "Es lo que nos permite sobrevivir. Luchar contra lo que nos hace débiles: pereza, miedos y excusas. Es decidir cómo nos enfrentamos a ellos y dónde ponemos los pies cada día.",
    },
    {
      title: "Tiempo",
      body: "Hacer las cosas con su debida progresión. La armonía del cuerpo requiere paciencia; no se adelanta ni se atrasa: se aprovecha.",
    },
    {
      title: "Disciplina",
      body: "La diferencia entre vivir o sólo pasar. Levantarse por la mañana y hacer lo que toca. La pauta férrea que guía el camino hacia nuestro norte.",
    },
    {
      title: "Respeto",
      body: "Proyectarnos en los demás. Mirar a los ojos, saludar, cuidar el lugar y a la gente. La riqueza del box se mide por el respeto que generamos.",
    },
    {
      title: "Honestidad",
      body: "Exigirnos al máximo sin fisuras. No perdonar repeticiones, mirar el entrenamiento de frente y aceptar el resultado real. Eso nos hace fuertes.",
    },
    {
      title: "Compromiso",
      body: "Que nuestras acciones digan lo mismo que nuestras palabras. La palabra dada empuja hacia adelante: no hay vuelta atrás.",
    },
    {
      title: "Competición",
      body: "La chispa que recuerda que estamos vivos. Medirse con uno mismo: hoy, mejor que ayer. Cada WOD es una oportunidad para subir el listón.",
    },
    {
      title: "Atleta",
      body: "La máxima expresión de salud: moverse mejor, más fuerte y más capaz. Ser ejemplo dentro y fuera del box.",
    },
  ];

  return (
    <main>
      {/* HERO */}
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
            Entrenamos Old School, pensamos Old School.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/85">
            Cuando lo que se piensa, lo que se dice y lo que se hace concuerdan…{" "}
            <br /> estamos andando por el verdadero camino Old School.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="https://www.supersaas.es/schedule/BoxCastellon/Horarios"
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 ring-1 ring-emerald-500/30 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Reserva tu clase
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

      {/* VOCABULARIO */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
            Nuestro vocabulario
          </h2>
          <p className="mt-3 max-w-3xl text-zinc-700">
            Palabras que usamos a diario y que moldean nuestra manera de
            entrenar y de vivir.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <article
                key={it.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
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
                  <h3 className="text-base font-semibold text-zinc-900">
                    {it.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-700">
                  {it.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FRASE FINAL */}
      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-zinc-700">
            Ser feliz no es tener lo que quieres, sino querer lo que tienes.
            Disfruta el momento.
          </p>
          <h3 className="mt-6 text-emerald-800 text-xl md:text-2xl font-extrabold tracking-wide">
            SOLO TIENES UN ÚNICO MOMENTO ASEGURADO Y ES ESTE.
          </h3>
        </div>
      </section>

      {/* CTA */}
      <Cta
        title="¿Esta filosofía resuena contigo?"
        text="Hablemos y empecemos a trabajar juntos."
        btn1="Contactar"
        linkbtn1="/contacto"
        btn2="Ver planes del box"
        linkbtn2="/precios"
      />
    </main>
  );
};
