export const AvisoLegal = () => {
  const entidad = {
    nombre: "Sisu Hybrid Training Sl",
    domicilio: "Av. Burriana 20, 4º p11 · 12005 Castellón (Castellón)",
    nif: "B12934527",
    email: "theboxcastellon@outlook.com",
    web: "https://www.theboxcastellon.com/",
  } as const;

  return (
    <main>
      {/* Encabezado */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Aviso legal
          </h1>
          <p className="mt-4 max-w-3xl text-white/85">
            Información general exigida por el artículo 10 de la Ley 34/2002, de
            Servicios de la Sociedad de la Información y del Comercio
            Electrónico (LSSICE).
          </p>
        </div>
      </section>

      {/* Datos del prestador */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-6 md:p-8 ring-1 ring-zinc-200">
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">
              Datos identificativos del prestador
            </h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-zinc-500">
                  Denominación social
                </dt>
                <dd className="text-zinc-900">{entidad.nombre}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-zinc-500">NIF</dt>
                <dd className="text-zinc-900">{entidad.nif}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-zinc-500">
                  Domicilio social
                </dt>
                <dd className="text-zinc-900">{entidad.domicilio}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-zinc-500">E‑mail</dt>
                <dd className="text-zinc-900">
                  <a
                    className="hover:text-emerald-800"
                    href={`mailto:${entidad.email}`}
                  >
                    {entidad.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-zinc-500">Sitio web</dt>
                <dd className="text-zinc-900">
                  <a
                    className="hover:text-emerald-800"
                    href={entidad.web}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {entidad.web}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Contenido legal */}
      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <Article id="objeto" title="Objeto">
            Sisu Hybrid Training Sl (en adelante, el <strong>prestador</strong>
            ), como responsable del sitio web, pone a disposición de los
            usuarios el presente documento, que regula el uso del sitio web
            <a
              className="text-emerald-800 hover:underline ml-1"
              href={entidad.web}
              target="_blank"
              rel="noreferrer"
            >
              {entidad.web}
            </a>
            , dando así cumplimiento a lo establecido en la Ley 34/2002, de
            Servicios de la Sociedad de la Información y del Comercio
            Electrónico (LSSICE o LSSI), e informando a todos los usuarios de
            las condiciones de uso. El acceso y utilización del sitio atribuye
            la condición de usuario, lo que implica la aceptación de las
            condiciones vigentes en cada momento y el compromiso de realizar un
            uso adecuado de los contenidos y de observar lo dispuesto en este
            aviso y en las normas que resulten de aplicación. Este aviso legal
            podrá modificarse para adaptarlo a la normativa vigente en cada
            momento.
          </Article>

          <Article id="condiciones" title="Condiciones de uso de la web">
            La utilización de la web tiene carácter gratuito y no exige
            suscripción previa. No obstante, para algunos servicios puede
            requerirse la cumplimentación de formularios (por ejemplo, para
            recibir información o realizar solicitudes). El usuario se
            compromete a facilitar información veraz y actualizada, siendo
            responsable de las consecuencias derivadas de la falsedad de los
            datos. Si el usuario fuera menor de edad, deberá contar con el
            consentimiento previo y expreso de sus padres, tutores o
            representantes legales para realizar cualquier actuación. Asimismo,
            el usuario se compromete a no difundir contenidos contrarios a la
            ley, a la dignidad de la persona o al orden público, y a respetar la
            moral y las buenas costumbres.
          </Article>

          <Article
            id="responsabilidad"
            title="Exclusión de garantías y responsabilidad"
          >
            El titular del sitio queda eximido de responsabilidad cuando la
            información suministrada por los usuarios sea falsa o cuando los
            contenidos hayan sido manipulados por terceros. Igualmente, declina
            cualquier responsabilidad derivada de un funcionamiento erróneo del
            portal por causas ajenas, tales como la presencia de virus,
            programas maliciosos o usos ilícitos, negligentes o contrarios a
            este Aviso Legal.
          </Article>

          <Article id="cookies" title="Cookies">
            El sitio web puede utilizar <em>cookies</em> (pequeños archivos que
            el servidor envía al ordenador del usuario) para llevar a cabo
            funciones imprescindibles para su correcto funcionamiento y
            visualización. Las cookies utilizadas tienen carácter temporal, con
            la única finalidad de hacer más eficaz la navegación, y desaparecen
            al finalizar la sesión. En ningún caso se utilizarán para recoger
            información de carácter personal. Para más información, consulte
            nuestra{" "}
            <a className="text-emerald-800 hover:underline" href="/cookies">
              Política de Cookies
            </a>
            .
          </Article>

          <Article id="enlaces" title="Política de enlaces (links)">
            El sitio web puede contener enlaces a otros sitios con políticas de
            privacidad diferentes. Sisu Hybrid Training Sl no se hace
            responsable del contenido o prácticas de los sitios enlazados. Se
            recomienda al usuario la lectura detallada de la política de
            privacidad de cualquier sitio web al que acceda desde éste.
          </Article>

          <Article id="proteccion" title="Protección de datos personales">
            El titular del portal garantiza el cumplimiento íntegro de las
            obligaciones vigentes y la implantación de las medidas de seguridad
            previstas en el Reglamento (UE) 2016/679 (RGPD) y en la normativa
            española de protección de datos. Para más información, consulte
            nuestra{" "}
            <a className="text-emerald-800 hover:underline" href="/privacidad">
              Política de Privacidad
            </a>
            .
          </Article>

          <Article id="propiedad" title="Propiedad intelectual e industrial">
            El usuario reconoce y acepta que todos los contenidos del sitio
            (diseños, textos, imágenes, logotipos, iconos, software, nombres
            comerciales, marcas y otros signos susceptibles de uso industrial
            y/o comercial) están protegidos por derechos de propiedad
            intelectual e industrial titularidad del prestador o de terceros,
            quienes ostentan el derecho exclusivo de utilizarlos. El acceso al
            sitio no implica renuncia, transmisión, licencia o cesión total o
            parcial de dichos derechos. El usuario se compromete a no
            reproducir, copiar, distribuir, comunicar públicamente, transformar
            ni modificar los contenidos sin autorización expresa, manteniendo
            indemne al prestador de cualquier reclamación derivada del
            incumplimiento de estas obligaciones.
          </Article>

          <Article id="ley" title="Ley aplicable">
            La ley aplicable en caso de disputa o conflicto de interpretación de
            los términos que conforman este Aviso Legal, así como cualquier
            cuestión relacionada con los servicios del portal, será la ley
            española.
          </Article>
        </div>
      </section>
    </main>
  );
};

function Article({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article
      id={id}
      className="rounded-2xl bg-white p-6 md:p-8 ring-1 ring-zinc-200"
    >
      <h2 className="text-lg md:text-xl font-bold text-zinc-900">{title}</h2>
      <div className="prose prose-zinc max-w-none prose-p:mt-3 prose-a:text-emerald-800">
        {children}
      </div>
    </article>
  );
}
