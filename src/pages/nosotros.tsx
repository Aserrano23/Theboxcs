import { Link } from "react-router-dom";
import imgHero from "../assets/box2.webp";
import imgGym from "../assets/box1.webp";
import imgCoach from "../assets/box3.webp";
import { Cta } from "../components/cta";

export const Nosotros = () => {
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
            ¿Quiénes somos?
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/85">
            Somos una comunidad que entrena para la vida real: sencilla, honesta
            y efectiva. Menos postureo, más movimiento bien hecho.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contacto"
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

      {/* QUIENES SOMOS */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
              Entrenamos para que la vida pese menos
            </h2>
            <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
              <p>
                Estamos cansados de los estereotipos del gimnasio clásico: salas
                llenas de máquinas, espejos y rutinas que no conectan con cómo
                nos movemos fuera. Preferimos moverse libre, aprender técnica y
                ganar capacidad para el día a día.
              </p>
              <p>
                Aquí saltamos, jugamos y nos exigimos con cabeza. Buscamos que
                cada sesión sume: que salgas con la sensación de haber mejorado
                algo concreto —fuerza, movilidad, potencia o control— sin
                postureos.
              </p>
              <p>
                Entrenamos para lo cotidiano: correr a por el bus, cargar
                bolsas, jugar con tus peques o disfrutar de tu deporte favorito
                sin lesionarte. Progreso real, a tu ritmo.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={imgGym}
              alt="Entrenando en The Box"
              className="h-72 w-full rounded-2xl object-cover shadow-lg ring-1 ring-zinc-200 md:h-[22rem]"
            />
            <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* PABLO */}
      <section className="py-12 md:py-16 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 items-start">
          <div>
            <h3 className="text-emerald-800 text-lg font-semibold">Equipo</h3>
            <h2 className="mt-1 text-2xl md:text-3xl font-bold text-zinc-900">
              Pablo — Entrenador
            </h2>
            <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
              <p>
                Pablo dirige The Box Castellón. Con paciencia infinita y enfoque
                técnico, se asegura de que cada sesión sea exigente pero
                alcanzable, con la técnica correcta y una progresión segura para
                todos los niveles.
              </p>
              <p>
                Formado como{" "}
                <strong>
                  Técnico Superior en Actividades Físico‑Deportivas
                </strong>
                , suma una larga experiencia en el mundo de la natación y años
                como entrenador de fuerza y crosstraining. Completó su formación
                con el <strong>nivel 2 de Halterofilia y Salud</strong> y cursos
                específicos de <strong>crosstraining</strong>.
              </p>
              <p>
                Su objetivo: que te mueras menos de postureo y más de
                resultados. Que aprendas a moverte mejor, con intención y sin
                lesiones.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <img
              src={imgCoach}
              alt="Pablo, entrenador jefe"
              className="h-72 w-full rounded-2xl object-cover shadow-lg ring-1 ring-zinc-200 md:h-[22rem]"
            />
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
            Nuestra metodología
          </h2>
          <p className="mt-4 max-w-4xl text-zinc-700 leading-relaxed">
            El progreso es gradual. Para que tu evolución sea sólida y segura,
            organizamos las clases por niveles y objetivos. Cada sesión tiene un
            propósito claro y se adapta a tu experiencia, conocimiento y
            capacidad física, ajustando ejercicios y cargas para que avances sin
            lesionarte.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
              <h3 className="text-base font-semibold text-zinc-900">
                Técnica primero
              </h3>
              <p className="mt-2 text-sm text-zinc-700">
                Calidad de movimiento antes que cantidad. Aprender a moverse
                bien multiplica los resultados.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
              <h3 className="text-base font-semibold text-zinc-900">
                Progresión segura
              </h3>
              <p className="mt-2 text-sm text-zinc-700">
                Cargas y ejercicios adaptados a cada nivel para mejorar sin
                frenar tu vida fuera del box.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
              <h3 className="text-base font-semibold text-zinc-900">
                Transferencia real
              </h3>
              <p className="mt-2 text-sm text-zinc-700">
                Entrenamos para el día a día y para tu deporte. Que lo que haces
                en clase te sirva fuera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <Cta
        title="¿Empezamos hoy?"
        text="Da el primer paso y ven a probar. Nosotros ponemos el plan."
        btn1="Ver precios"
        linkbtn1="/precios"
        btn2="Contacto"
        linkbtn2="/contacto"
      />
    </main>
  );
};
