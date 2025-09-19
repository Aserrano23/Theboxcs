export const PoliticaPrivacidad = () => {
  const entidad = {
    nombre: "Sisu Hybrid Training Sl",
    nif: "B12934527",
    direccion: "Av. Burriana 20, 4º p11 · 12005 Castellón (Castellón)",
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Política de privacidad</h1>
          <p className="mt-4 max-w-3xl text-white/85">
            Información sobre cómo recopilamos, usamos y protegemos tus datos personales, en cumplimiento del RGPD y la LSSICE.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <Article title="Introducción">
            Con esta política te informamos de los datos que recopilamos de los usuarios, así como del uso y finalidad
            que realizamos. Nunca solicitaremos más información de la necesaria, no compartiremos tus datos con
            terceros salvo obligación legal o con tu autorización expresa, ni los usaremos con una finalidad distinta a
            la comunicada. Esta política puede actualizarse para adaptarse a la normativa vigente; te recomendamos leerla
            cada vez que nos facilites nuevos datos personales.
          </Article>

          <Article title="Responsable del tratamiento">
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-zinc-500">Denominación o razón social</dt>
                <dd className="text-zinc-900">{entidad.nombre}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-zinc-500">NIF</dt>
                <dd className="text-zinc-900">{entidad.nif}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-zinc-500">Dirección postal</dt>
                <dd className="text-zinc-900">{entidad.direccion}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-zinc-500">Correo electrónico</dt>
                <dd className="text-zinc-900"><a className="hover:text-emerald-800" href={`mailto:${entidad.email}`}>{entidad.email}</a></dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-zinc-500">Sitio web</dt>
                <dd className="text-zinc-900"><a className="hover:text-emerald-800" href={entidad.web} target="_blank" rel="noreferrer">{entidad.web}</a></dd>
              </div>
            </dl>
            <p className="mt-4">
              {entidad.nombre}, como responsable del sitio web, informa que aplica las medidas técnicas y organizativas
              necesarias para garantizar la confidencialidad, integridad y disponibilidad de los datos personales, en
              cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la LSSICE.
            </p>
          </Article>

          <Article title="Obtención y tipología de datos">
            Los datos se recogen cuando el usuario los facilita a través de los formularios (p. ej., contacto o
            suscripción a newsletter) o en el marco de una relación contractual. La tipología puede incluir: nombre y
            apellidos, DNI, teléfono, datos profesionales, datos de pago (si procede), entre otros. No se tratan datos de
            categorías especiales.
          </Article>

          <Article title="Finalidad del tratamiento">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contacto:</strong> atender y responder consultas o solicitudes realizadas a través del formulario de
                contacto o canales habilitados.
              </li>
              <li>
                <strong>Comunicaciones comerciales/newsletter:</strong> envío de información y novedades, siempre que el
                usuario lo haya aceptado expresamente. Podrás revocar tu consentimiento en cualquier momento
                escribiendo a <a className="text-emerald-800 hover:underline" href={`mailto:${entidad.email}`}>{entidad.email}</a>.
              </li>
            </ul>
            <p className="mt-3">No trataremos tus datos para otras finalidades salvo obligación legal o requerimiento judicial.</p>
          </Article>

          <Article title="Legitimación del tratamiento">
            La base legal principal es el <strong>consentimiento</strong> que prestas al enviar los formularios o al solicitar
            información. Si existe relación contractual, la base es la <strong>ejecución del contrato</strong> y el cumplimiento de
            obligaciones legales. La retirada del consentimiento no condiciona la ejecución del contrato, aunque podría
            impedir la prestación de servicios que dependan de dicho consentimiento.
          </Article>

          <Article title="Plazo de conservación de los datos">
            Conservaremos tus datos mientras se mantenga la relación comercial o hasta que solicites su supresión,
            oposición o limitación. Posteriormente, se mantendrán bloqueados durante los plazos legalmente establecidos.
          </Article>

          <Article title="Destinatarios: cesiones o transferencias">
            No realizamos cesiones ni transferencias internacionales de datos a terceros, salvo obligación legal o
            mandato judicial. En su caso, únicamente se comunicarán los datos estrictamente necesarios.
          </Article>

          <Article title="Derechos de las personas interesadas (RGPD)">
            Puedes ejercer los derechos reconocidos por el RGPD:
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li><strong>Acceso</strong> (art. 15): conocer qué datos tratamos y con qué fines.</li>
              <li><strong>Rectificación</strong> (art. 16): corregir datos inexactos o incompletos.</li>
              <li><strong>Supresión</strong> (art. 17): solicitar el borrado de tus datos en los supuestos previstos.</li>
              <li><strong>Limitación</strong> (art. 18): limitar el tratamiento en los supuestos previstos.</li>
              <li><strong>Portabilidad</strong> (art. 20): recibir tus datos en un formato estructurado o pedir su transmisión a otro responsable.</li>
              <li><strong>Oposición</strong> (art. 21): oponerte al tratamiento en determinados supuestos.</li>
              <li><strong>Reclamación ante la autoridad de control</strong> (art. 77): ante la Agencia Española de Protección de Datos.</li>
            </ul>
            <p className="mt-3">
              Para ejercerlos, envía una solicitud a <a className="text-emerald-800 hover:underline" href={`mailto:${entidad.email}`}>{entidad.email}</a> indicando el derecho que deseas ejercer, acompañando documento acreditativo de identidad.
            </p>
            <div className="mt-3 rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200 text-sm">
              <p className="font-medium text-zinc-900">Autoridad de control en España</p>
              <p>Agencia Española de Protección de Datos (AEPD) — Calle Jorge Juan, 6 · 28001 Madrid · Tel.: 901 100 099 · <a className="text-emerald-800 hover:underline" href="https://www.aepd.es/" target="_blank" rel="noreferrer">www.aepd.es</a></p>
            </div>
          </Article>

          <Article title="Medidas de seguridad">
            Tratamos tus datos de forma confidencial y aplicamos medidas técnicas y organizativas adecuadas para evitar su
            alteración, pérdida, tratamiento o acceso no autorizado, de acuerdo con el estado de la técnica y la
            naturaleza de los datos tratados.
          </Article>

          <Article title="Redes sociales">
            {entidad.nombre} puede tener presencia en redes sociales. El tratamiento de los datos de seguidores o
            usuarios que interactúen con nuestros perfiles se regirá por esta política y por las condiciones de uso y
            políticas de privacidad de cada red social. Nos reservamos el derecho a retirar, sin previo aviso, contenidos
            ilícitos, contrarios a la buena fe o que vulneren derechos fundamentales.
          </Article>

          <Article title="Cambios en la presente política de privacidad">
            Nos reservamos el derecho a modificar esta política para adaptarla a novedades legislativas o jurisprudenciales.
          </Article>

          <Article title="Revocabilidad">
            El consentimiento que hayas prestado puede revocarse en cualquier momento enviando un mensaje a <a className="text-emerald-800 hover:underline" href={`mailto:${entidad.email}`}>{entidad.email}</a>. La revocación tendrá efectos desde su correcta recepción.
          </Article>

          <Article title="Legislación aplicable">
            Todas las relaciones y condiciones que afecten a esta web estarán sometidas a la legislación española.
          </Article>
        </div>
      </section>
    </main>
  );
};

function Article({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-2xl bg-white p-6 md:p-8 ring-1 ring-zinc-200">
      <h2 className="text-lg md:text-xl font-bold text-zinc-900">{title}</h2>
      <div className="prose prose-zinc max-w-none prose-p:mt-3 prose-a:text-emerald-800">{children}</div>
    </article>
  );
}
