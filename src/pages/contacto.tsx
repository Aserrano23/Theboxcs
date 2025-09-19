/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";
import heroImg from "../assets/box2.webp";

const ADDRESS =
  "C/ José Pascual Viciano 10N, Polígono Industrial La Magdalena, 12004 Castellón";
const PHONE = "692 505 865";
const CONTACT_NAME = "Pablo";
const EMAIL = "theboxcastellon@outlook.com";

export const Contacto = () => {
  // Estado del formulario
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    policy: false, // aceptación de privacidad
    website: "", // honeypot (no rellenar)
  });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  const disabled = useMemo(
    () =>
      loading ||
      !form.nombre.trim() ||
      !form.email.trim() ||
      !form.telefono.trim() ||
      !form.policy,
    [form, loading]
  );

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        e.currentTarget.type === "checkbox"
          ? (e as React.ChangeEvent<HTMLInputElement>).currentTarget.checked
          : e.currentTarget.value;
      setForm((s) => ({ ...s, [k]: value as never }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (disabled) return;

    setLoading(true);
    setOk(null);
    setError(null);

    try {
      const payload = {
        name: form.nombre,
        email: form.email,
        phone: form.telefono,
        message: form.asunto,
        policy: form.policy,
        website: form.website, // honeypot
      };

      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || json?.ok !== true) {
        throw new Error(json?.error || "No se pudo enviar el mensaje.");
      }

      setOk(true);
      setForm({ nombre: "", email: "", telefono: "", asunto: "", policy: false, website: "" });
    } catch (err: any) {
      setOk(false);
      setError(err?.message || "Error inesperado");
    } finally {
      setLoading(false);
    }
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
      <section className="relative overflow-hidden isolate">
        <img
          src={heroImg}
          alt="The Box Castellón"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-zinc-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative px-4 mx-auto text-center text-white max-w-7xl sm:px-6 lg:px-8 py-14 md:py-20">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Contáctanos
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-white/85">
            ¿Listo para entrenar con nosotros? Escríbenos y te ayudamos a elegir el plan perfecto.
          </p>
        </div>
      </section>

      {/* CONTENIDO principal */}
      <section className="py-10 md:py-14">
        <div className="grid items-start gap-5 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:grid-cols-2">
          {/* Columna izquierda: info + mapa */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 bg-white rounded-2xl ring-1 ring-zinc-200">
                <h3 className="text-lg font-semibold text-emerald-800">Teléfono</h3>
                <p className="mt-1 text-zinc-700">
                  {CONTACT_NAME} —{" "}
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-emerald-800">
                    {PHONE}
                  </a>
                </p>
              </div>
              <div className="p-5 bg-white rounded-2xl ring-1 ring-zinc-200">
                <h3 className="text-lg font-semibold text-emerald-800">Email</h3>
                <p className="mt-1 text-zinc-700">
                  <a href={`mailto:${EMAIL}`} className="hover:text-emerald-800">
                    {EMAIL}
                  </a>
                </p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-2xl ring-1 ring-zinc-200">
              <h3 className="text-lg font-semibold text-emerald-800">Dirección</h3>
              <p className="mt-1 text-zinc-700">{ADDRESS}</p>
              <div className="flex flex-col gap-2 mt-3 sm:flex-row">
                <a
                  href={mapsDirections}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-xl bg-emerald-700 hover:bg-emerald-800"
                >
                  Cómo llegar
                </a>
                <a
                  href={mapsSearch}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-xl text-emerald-800 ring-1 ring-emerald-300 hover:bg-emerald-50"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>

            {/* MAPA */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-zinc-200">
              <section className="p-5">
                <div className="mx-auto max-w-7xl ">
                  <div className="overflow-hidden rounded-2xl ring-1 ring-zinc-200">
                    <iframe
                      title="Ubicación The Box Castellón"
                      width="100%"
                      height="268"
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
          <div className="p-6 bg-white shadow-sm rounded-3xl md:p-8 ring-1 ring-zinc-200">
            <h2 className="text-2xl font-extrabold text-zinc-900">Escríbenos</h2>
            <p className="mt-2 text-zinc-700">Te responderemos lo antes posible.</p>

            <form onSubmit={handleSubmit} className="grid gap-4 mt-6" noValidate>
              {/* Honeypot (oculto) */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={onChange("website")}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <input
                type="text"
                required
                placeholder="Nombre*"
                value={form.nombre}
                onChange={onChange("nombre")}
                className="w-full px-4 py-3 border-0 rounded-xl ring-1 ring-zinc-300 focus:ring-2 focus:ring-emerald-400 text-zinc-900 placeholder-zinc-400"
              />
              <input
                type="email"
                required
                placeholder="Email*"
                value={form.email}
                onChange={onChange("email")}
                className="w-full px-4 py-3 border-0 rounded-xl ring-1 ring-zinc-300 focus:ring-2 focus:ring-emerald-400 text-zinc-900 placeholder-zinc-400"
              />
              <input
                type="tel"
                required
                placeholder="Teléfono*"
                value={form.telefono}
                onChange={onChange("telefono")}
                className="w-full px-4 py-3 border-0 rounded-xl ring-1 ring-zinc-300 focus:ring-2 focus:ring-emerald-400 text-zinc-900 placeholder-zinc-400"
              />
              <textarea
                rows={6}
                placeholder="Cuéntanos en qué podemos ayudarte"
                value={form.asunto}
                onChange={onChange("asunto")}
                className="w-full px-4 py-3 border-0 rounded-xl ring-1 ring-zinc-300 focus:ring-2 focus:ring-emerald-400 text-zinc-900 placeholder-zinc-400"
              />

              <label className="inline-flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.policy}
                  onChange={onChange("policy")}
                  className="w-4 h-4 mt-1 rounded border-zinc-300"
                  required
                />
                <span>
                  Acepto la {" "}
                  <a href="/privacidad" className="underline text-emerald-800">
                    política de privacidad
                  </a>
                  .
                </span>
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={disabled}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white shadow cursor-pointer rounded-xl bg-emerald-700 disabled:opacity-50 hover:bg-emerald-800"
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl text-emerald-800 ring-1 ring-emerald-300 hover:bg-emerald-50"
                >
                  Llamar ahora
                </a>
                <span
                  className="text-sm"
                  aria-live="polite"
                  role="status"
                >
                  {ok === true && (
                    <span className="text-emerald-700">¡Enviado! Te responderemos muy pronto.</span>
                  )}
                  {ok === false && (
                    <span className="text-red-600">{error || "No se pudo enviar el mensaje."}</span>
                  )}
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
