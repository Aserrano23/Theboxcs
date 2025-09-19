import { useMemo, useState } from "react";
import heroImg from "../assets/box2.webp";

const ADDRESS =
  "C/ José Pascual Viciano 10N, Polígono Industrial La Magdalena, 12004 Castellón";
const PHONE = "692 505 865";
const CONTACT_NAME = "Pablo";
const EMAIL = "theboxcastellon@outlook.com";

export const Contacto = () => {
  // Simple mailto submit (puedes cambiar a API/servicio cuando lo tengas)
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
  });
  const disabled = useMemo(
    () => !form.nombre || !form.email || !form.telefono,
    [form]
  );

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((s) => ({ ...s, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\nTeléfono: ${form.telefono}\n\nMensaje:\n${form.asunto}`
    );
    const subject = encodeURIComponent(`Contacto web – ${form.nombre}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    ADDRESS
  )}`;
  const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    ADDRESS
  )}`;

  // Mapa embebido sin API key (Google Maps público)
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    ADDRESS
  )}&z=15&output=embed`;

  return (
    <main>
      {/* HERO con imagen */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="The Box Castellón"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Contáctanos
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-white/85">
            ¿Listo para entrenar con nosotros? Escríbenos y te ayudamos a elegir
            el plan perfecto.
          </p>
        </div>
      </section>

      {/* CONTENIDO principal */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-5 md:grid-cols-2 items-start">
          {/* Columna izquierda: info + imagen */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 ring-1 ring-zinc-200">
                <h3 className="text-lg font-semibold text-emerald-800">
                  Teléfono
                </h3>
                <p className="mt-1 text-zinc-700">
                  {CONTACT_NAME} —{" "}
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    className="hover:text-emerald-800"
                  >
                    {PHONE}
                  </a>
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 ring-1 ring-zinc-200">
                <h3 className="text-lg font-semibold text-emerald-800">
                  Email
                </h3>
                <p className="mt-1 text-zinc-700 break-words">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="hover:text-emerald-800"
                  >
                    {EMAIL}
                  </a>
                </p>
              </div>
              <div className="sm:col-span-2 rounded-2xl bg-white p-5 ring-1 ring-zinc-200">
                <h3 className="text-lg font-semibold text-emerald-800">
                  Dirección
                </h3>
                <p className="mt-1 text-zinc-700">{ADDRESS}</p>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                  <a
                    href={mapsDirections}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
                  >
                    Cómo llegar
                  </a>
                  <a
                    href={mapsSearch}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-300 hover:bg-emerald-50"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Imagen lateral */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-zinc-200">
              {/* MAPA */}
              <section className="p-5">
                <div className="mx-auto max-w-7xl ">
                  <div className="overflow-hidden rounded-2xl ring-1 ring-zinc-200">
                    <iframe
                      title="Ubicación The Box Castellón"
                      width="100%"
                      height="242"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block"
                      src={mapEmbedSrc}
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-zinc-200">
            <h2 className="text-2xl font-extrabold text-zinc-900">
              Escríbenos
            </h2>
            <p className="mt-2 text-zinc-700">
              Te responderemos lo antes posible.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <input
                type="text"
                required
                placeholder="Nombre*"
                value={form.nombre}
                onChange={onChange("nombre")}
                className="w-full rounded-xl border-0 ring-1 ring-zinc-300 focus:ring-2 focus:ring-emerald-400 px-4 py-3 text-zinc-900 placeholder-zinc-400"
              />
              <input
                type="email"
                required
                placeholder="Email*"
                value={form.email}
                onChange={onChange("email")}
                className="w-full rounded-xl border-0 ring-1 ring-zinc-300 focus:ring-2 focus:ring-emerald-400 px-4 py-3 text-zinc-900 placeholder-zinc-400"
              />
              <input
                type="tel"
                required
                placeholder="Teléfono*"
                value={form.telefono}
                onChange={onChange("telefono")}
                className="w-full rounded-xl border-0 ring-1 ring-zinc-300 focus:ring-2 focus:ring-emerald-400 px-4 py-3 text-zinc-900 placeholder-zinc-400"
              />
              <textarea
                rows={6}
                placeholder="Cuéntanos en qué podemos ayudarte"
                value={form.asunto}
                onChange={onChange("asunto")}
                className="w-full rounded-xl border-0 ring-1 ring-zinc-300 focus:ring-2 focus:ring-emerald-400 px-4 py-3 text-zinc-900 placeholder-zinc-400"
              />
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={disabled}
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 text-base font-semibold text-white shadow disabled:opacity-50 hover:bg-emerald-800"
                >
                  Enviar
                </button>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-emerald-800 ring-1 ring-emerald-300 hover:bg-emerald-50"
                >
                  Llamar ahora
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
