import { Link } from "react-router-dom";
import imgHero from "../../assets/box2.webp";
import { Cta } from "../../components/cta";

export const ReglasOldSchool = () => {
  return (
    <main>
      {/* HERO con imagen de fondo */}
      <section className="relative overflow-hidden isolate">
        {/* background image */}
        <img
          src={imgHero}
          alt="The Box Castellón"
          className="absolute inset-0 object-cover w-full h-full"
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-zinc-950/50" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative px-4 py-16 mx-auto text-center text-white max-w-7xl sm:px-6 lg:px-8 md:py-24">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Old School Rules
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-base sm:text-lg text-white/85">
            Reglas Old School Training — lo que pensamos, lo que decimos y lo
            que hacemos.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
            <Link
              to="https://www.supersaas.es/schedule/BoxCastellon/Horarios"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white shadow-lg rounded-xl bg-emerald-600 shadow-emerald-900/20 ring-1 ring-emerald-500/30 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Reserva tu clase
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-xl ring-1 ring-white/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Escríbenos
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-12 md:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl text-zinc-900">
            Reglas Old School Training
          </h2>

          {/* lista en dos columnas en desktop */}
          <div className="grid gap-10 mt-8 md:grid-cols-2 md:gap-12">
            {/* Columna izquierda */}
            <ol className="pl-6 space-y-6 list-decimal text-zinc-800">
              <li>Integridad, honor, compromiso, hacer lo correcto.</li>
              <li>Ser impecable con tu palabra.</li>
              <li>No chismear.</li>
              <li>Tratar a los demás como te gustaría que te traten.</li>
              <li>Ser honesto.</li>
              <li>Reducir la mierda de la vida en vez de aumentarla.</li>
              <li>Ser cortés.</li>
              <li>
                Ser estricto en tu entrenamiento:
                <ul className="pl-5 mt-2 space-y-2 text-sm list-disc text-zinc-700">
                  <li>Llevar el pecho al suelo en un push-up.</li>
                  <li>
                    Hacer un push-up real en tu burpee, no un empuje pélvico o
                    un movimiento de “serpiente”.
                  </li>
                  <li>Sentarte completamente en un sit-up.</li>
                  <li>
                    Contar todas las repeticiones… y hacer algunas más si hay
                    duda.
                  </li>
                  <li>No contar el wall ball si la pelota no toca la marca.</li>
                  <li>
                    Llevar la barbilla sobre la barra en un pull-up, no solo
                    hasta ella.
                  </li>
                </ul>
              </li>
            </ol>

            {/* Columna derecha */}
            <ol start={9} className="pl-6 space-y-6 list-decimal text-zinc-800">
              <li>
                Enfrentar tus miedos, ya sea handstands, overhead squats, o el
                cuco bajo tu cama.
              </li>
              <li>Llamar a tu madre, incluso si no te cae bien.</li>
              <li>
                Limpiar tu barra, incluso si la sangre en ella no es tuya.
              </li>
              <li>Respeto. Disculpas. Cuidar tu entorno.</li>
              <li>Poner los discos en una pila ordenada.</li>
              <li>Comunidad, no camarillas.</li>
              <li>Mirar a la gente a los ojos cuando les hablas.</li>
              <li>Ayudar a los demás a descargar la barra.</li>
              <li>Presentarte a un nuevo miembro del box.</li>
              <li>
                Poner en la basura tu botella vacía al final de las clases.
              </li>
              <li>
                Alentar a todos en la clase (incluso si es alguien que no te cae
                bien) porque todos hemos sudado el mismo color.
              </li>
              <li>Respetar a quienes vienen detrás de ti.</li>
            </ol>
          </div>

          {/* cierre */}
          <div className="mt-12 text-center">
            <p className="text-xl italic text-emerald-800">
              Mírate a ti mismo y decide: ¿qué eres?
            </p>
          </div>
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
