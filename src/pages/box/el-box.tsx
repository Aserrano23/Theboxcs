import { useEffect, useRef, useState } from "react";
import img1 from "../../assets/box1.webp";
import img2 from "../../assets/box2.webp";
import img3 from "../../assets/box3.webp";
import { Cta } from "../../components/cta";

const IMAGES = [
  { src: img1, alt: "The Box Castellón – vista 1" },
  { src: img2, alt: "The Box Castellón – vista 2" },
  { src: img3, alt: "The Box Castellón – vista 3" },
];

function Carousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);
  const len = IMAGES.length;

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + len) % len);
  const to = (i: number) => setIndex(((i % len) + len) % len);

  useEffect(() => {
    timer.current = window.setInterval(
      () => setIndex((i) => (i + 1) % len),
      4000
    );
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [len]);

  const pause = () => timer.current && window.clearInterval(timer.current);
  const resume = () => {
    timer.current = window.setInterval(
      () => setIndex((i) => (i + 1) % len),
      4000
    );
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl ring-1 ring-zinc-200 shadow"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {IMAGES.map((img) => (
          <div
            key={img.alt}
            className="flex-none basis-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Imagen anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 inline-grid h-9 w-9 place-items-center rounded-full bg-white/90 ring-1 ring-zinc-300 hover:bg-white"
      >
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Imagen siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 inline-grid h-9 w-9 place-items-center rounded-full bg-white/90 ring-1 ring-zinc-300 hover:bg-white"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-2">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => to(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`pointer-events-auto h-2.5 w-2.5 rounded-full ring-1 ring-white/50 ${
              i === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export const ElBox = () => {
  return (
    <main>
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-800">
            Nuestro Box
          </h1>

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12 items-start">
            {/* Texto */}
            <div className="text-zinc-700 space-y-6 text-lg leading-relaxed">
              <p>
                Contamos con uno de los centros de entrenamiento más completos
                de Castellón.
              </p>
              <p>
                Consta de una sala diáfana de 400 m2 y 5 m de altura donde
                pondremos a prueba todas tus capacidades físicas.
              </p>
              <p>
                Te haremos tirar o empujar nuestro carro, subir la cuerda,
                demostrar tu habilidad en los circuitos de agilidad y
                coordinación y mucho más.
              </p>
              <p>
                El equipamiento de la sala está personalizado para este box: las
                jaulas, los soportes para realizar fondos… todo para que te
                encuentres a gusto y te centres solo en dar el máximo.
              </p>
            </div>

            {/* Carrusel de imágenes */}
            <Carousel />
          </div>
        </div>
      </section>

      {/* CTA */}
      <Cta
        title="¿Te gustan nuestras instalaciones?"
        text="Hablemos y empieza a usarlas con nosotros"
        btn1="Contactar"
        linkbtn1="/contacto"
        btn2="Ver planes del box"
        linkbtn2="/precios"
      />
    </main>
  );
};
