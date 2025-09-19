import imgA from "../assets/box2.webp";
import imgB from "../assets/box1.webp";

type InfoPanelProps = {
  image: string;
  badge: string;
  title: string;
  desc: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const InfoPanel = ({ image, badge, title, desc, ctaLabel, ctaHref }: InfoPanelProps) => (
  <article
    className="relative isolate overflow-hidden rounded-2xl h-72 md:h-80 shadow-lg ring-1 ring-zinc-200"
    style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-black/50" />
    <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/30 to-transparent" />

    <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-center text-white">
      <span className="inline-flex w-fit items-center rounded-md bg-emerald-700/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide shadow">
        {badge}
      </span>
      <h3 className="mt-3 text-2xl md:text-3xl font-extrabold leading-tight">{title}</h3>
      <p className="mt-3 max-w-prose text-sm md:text-base text-white/90">{desc}</p>
      {ctaLabel && ctaHref && (
        <a
          href={ctaHref}
          className="mt-5 inline-flex w-fit items-center rounded-lg bg-emerald-700 px-5 py-2 text-sm md:text-base font-semibold text-white shadow hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          {ctaLabel}
        </a>
      )}
    </div>
  </article>
);

const features = [
  {
    title: "1ª CLASE GRATIS",
    desc:
      "Si quieres probar a hacer ejercicio con The Box Castellón, te invitamos a la primera clase.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
        {/* Ticket outline with center divider */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 9V7a2 2 0 0 1 2-2h12v3a2 2 0 0 0 0 4v3H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10" />
      </svg>
    ),
  },
  {
    title: "CONOCE THE BOX",
    desc:
      "Conoce el entorno de trabajo y nuestra filosofía de entrenamiento. Aprovecha tu momento.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
  },
  {
    title: "OLD SCHOOL",
    desc:
      "Actitud, tiempo, disciplina, respeto, honestidad, compromiso, atleta y ser feliz son nuestras pautas.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 10v4M8 8v8M16 8v8M20 10v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
      </svg>
    ),
  },
  {
    title: "THE BOX",
    desc:
      "Contamos con uno de los centros de entrenamiento más completos de CrossFit de Castellón.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4-8 4-8-4 8-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 11l8 4 8-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 11v8l8 4 8-4v-8" />
      </svg>
    ),
  },
] as const;

export const Info = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top panels */}
        <div className="grid gap-6 md:grid-cols-2">
          <InfoPanel
            image={imgA}
            badge="Planifica tu horario"
            title="Reserva tus clases"
            desc="Organiza tu horario por internet y planea tus ejercicios para toda la semana."
            ctaLabel="Reservar ahora"
            ctaHref="https://www.supersaas.es/schedule/BoxCastellon/Horarios"
          />
          <InfoPanel
            image={imgB}
            badge="Compite con nosotros"
            title="Te preparamos"
            desc="Si tienes pensado presentarte a alguna competición de crossfit, nosotros te preparamos y asesoramos físicamente."
            ctaLabel="Contáctanos"
            ctaHref="/contacto"
          />
        </div>

        {/* Feature cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 text-emerald-700">
                <span className="inline-grid place-items-center h-10 w-10 rounded-xl bg-emerald-50 ring-1 ring-emerald-200">
                  {f.icon}
                </span>
                <h4 className="text-lg font-semibold tracking-tight text-zinc-900">{f.title}</h4>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-700">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};