import { Link } from "react-router-dom";
import { Cta } from "../components/cta";
import imgHero from "../assets/box3.webp";
import { Helmet } from "react-helmet-async";

type Tier = {
  name: string;
  desc: string;
  monthly: string;
  quarterly: string;
  popular?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "MINI",
    desc: "2 clases dirigidas",
    monthly: "50 € / mes",
    quarterly: "135 € / trimestral",
  },
  {
    name: "BÁSICA",
    desc: "3 clases dirigidas",
    monthly: "60 € / mes",
    quarterly: "165 € / trimestral",
  },
  {
    name: "MEDIUM",
    desc: "4 clases dirigidas",
    monthly: "70 € / mes",
    quarterly: "190 € / trimestral",
    popular: true,
  },
  {
    name: "PREMIUM",
    desc: "Clases dirigidas ilimitadas",
    monthly: "80 € / mes",
    quarterly: "220 € / trimestral",
  },
];

const BONOS = [
  { name: "BONO 1", desc: "5 clases dirigidas", price: "45 € / mes" },
  { name: "BONO 2", desc: "10 clases dirigidas", price: "80 € / mes" },
] as const;

// ---------- Página ----------

function PriceCard({ tier }: { tier: Tier }) {
  return (
    <article
      className={`relative rounded-2xl bg-white p-6 md:p-7 shadow-sm ring-1 ring-zinc-200 ${
        tier.popular ? "outline-2 outline-emerald-600/30" : ""
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-3 right-4 rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow">
          Popular
        </span>
      )}
      <header className="flex items-baseline justify-between">
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-zinc-900">
          {tier.name}
        </h3>
      </header>
      <p className="mt-2 text-sm text-zinc-700">{tier.desc}</p>

      <div className="mt-5 grid gap-3">
        <p className="text-2xl font-bold text-emerald-800">{tier.monthly}</p>
        <p className="text-lg font-semibold text-emerald-700/90">
          {tier.quarterly}
        </p>
      </div>

      <div className="mt-6">
        <Link
          to="/contacto"
          className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-800"
        >
          Contratar
        </Link>
      </div>
    </article>
  );
}

export const Precios = () => {
  return (
    <>
      <Helmet>
        <title>Precios — The Box Castellón</title>
        <meta
          name="description"
          content="Elige el plan que encaja contigo. Clases, bonos y seguimiento."
        />
      </Helmet>
      <main>
        {/* HERO/Encabezado */}

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
              Precios
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/85">
              Planes claros y flexibles. Elige el ritmo que mejor encaja
              contigo.
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
        {/* Tiers */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="sr-only">Planes de CrossFit</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TIERS.map((t) => (
                <PriceCard key={t.name} tier={t} />
              ))}
            </div>

            {/* Nota */}
            <p className="mt-6 text-center text-sm text-zinc-600">
              * Disponemos de una primera clase de prueba gratuita, para que
              decidas si esto es para ti o no.
            </p>
          </div>
        </section>

        {/* Bonos */}
        <section className="py-12 md:py-16 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
              Bonos
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {BONOS.map((b) => (
                <article
                  key={b.name}
                  className="rounded-2xl bg-white p-6 md:p-7 shadow-sm ring-1 ring-zinc-200"
                >
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
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {b.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-zinc-700">{b.desc}</p>
                  <p className="mt-4 text-xl font-bold text-emerald-800">
                    {b.price}
                  </p>
                  <div className="mt-5">
                    <Link
                      to="/contacto"
                      className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-800"
                    >
                      Solicitar
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <Cta
          title="¿Dudas con el plan?"
          text="Te ayudamos a elegir según tu objetivo y disponibilidad."
          btn1="Habla con nosotros"
          linkbtn1="/contacto"
        />
      </main>
    </>
  );
};

export default Precios;
