import { useEffect, useState } from "react";
import img1 from "../assets/box1.webp";
import img2 from "../assets/box2.webp";
import img3 from "../assets/box3.webp";

const SLIDES = [img1, img2, img3];
const INTERVAL_MS = 5000; // 3s

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (SLIDES.length <= 1) return; // nothing to rotate
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section aria-label="Hero" className="relative w-full h-[60vh] md:h-[70vh] min-h-[380px] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Contrast overlays */}
      <div className="pointer-events-none absolute inset-0 bg-black/35" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Entrena Old School en Castellón
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/90">
            Entrenamientos guiados, técnica sólida y progresión segura para que mejores en fuerza, movilidad y capacidad.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://www.supersaas.es/schedule/BoxCastellon/Horarios"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 text-white text-base md:text-lg font-semibold shadow-lg shadow-emerald-900/20 ring-1 ring-emerald-500/30 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Reservar clase
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-lg border border-white/60 px-6 py-3 text-white text-base md:text-lg font-semibold hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Contacta con nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};