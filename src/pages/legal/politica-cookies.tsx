export const PoliticaCookies = () => {
  const lastUpdate = "11 de septiembre de 2023";
  const web = "https://www.theboxcastellon.com";
  const entidad = {
    nombre: "Sisu Hybrid Training Sl",
    direccion: "Av. Burriana 20, 4º p11 · 12005 Castellón (Castellón)",
    email: "theboxcastellon@outlook.com",
    web,
  } as const;

  return (
    <main>
      {/* Encabezado */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Política de cookies</h1>
          <p className="mt-4 max-w-3xl text-white/85">
            Esta política de cookies fue actualizada por última vez el {lastUpdate} y se aplica a los ciudadanos y
            residentes legales permanentes del Espacio Económico Europeo y Suiza.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <Article title="1. Introducción">
            Nuestra web, <a className="text-emerald-800 hover:underline" href={web} target="_blank" rel="noreferrer">{web}</a>
            {" "}(en adelante, «la web») utiliza cookies y otras tecnologías relacionadas (para mayor comodidad, todas las
            tecnologías se denominan «cookies»). Las cookies también son colocadas por terceros a los que hemos
            contratado. En el siguiente documento te informamos sobre el uso de cookies en nuestra web.
          </Article>

          <Article title="2. ¿Qué son las cookies?">
            Una cookie es un pequeño archivo que se envía junto con las páginas de esta web y que tu navegador almacena
            en el disco duro de tu ordenador u otro dispositivo. La información almacenada puede ser devuelta a nuestros
            servidores o a los servidores de terceros apropiados durante una visita posterior.
          </Article>

          <Article title="3. ¿Qué son los scripts?">
            Un script es un fragmento de código de programa que se utiliza para hacer que nuestra web funcione
            correctamente y de forma interactiva. Este código se ejecuta en nuestro servidor o en tu dispositivo.
          </Article>

          <Article title="4. ¿Qué es una baliza web?">
            Una baliza web (o etiqueta de píxel) es una pequeña e invisible pieza de texto o imagen en una web que se
            utiliza para monitorear el tráfico. Para ello, se almacenan varios datos sobre ti mediante estas balizas web.
          </Article>

          <Article title="5. Cookies – técnicas o funcionales">
            Algunas cookies aseguran que ciertas partes de la web funcionen correctamente y que tus preferencias de
            usuario sigan recordándose. Al colocar cookies funcionales, te facilitamos la visita a nuestra web. De esta
            manera, no necesitas introducir repetidamente la misma información cuando nos visitas y, por ejemplo, los
            artículos pueden permanecer en tu cesta de la compra hasta que hayas pagado. Podemos colocar estas cookies
            sin tu consentimiento.
          </Article>

          <Article title="6. Cookies usadas">
            <div className="rounded-2xl bg-white ring-1 ring-zinc-200 divide-y">
              <ServiceRow name="Google Analytics" purpose="Estadísticas" consent="Consent to service google-analytics" />
              <ServiceRow name="WordPress" purpose="Funcional" consent="Consent to service wordpress" />
              <ServiceRow name="Elementor" purpose="Estadísticas (anónimas)" consent="Consent to service elementor" />
              <ServiceRow name="Complianz" purpose="Funcional" consent="Consent to service complianz" />
              <ServiceRow name="Varios" purpose="Propósito pendiente de investigación" consent="Consent to service varios" />
            </div>
            <p className="mt-3 text-sm text-zinc-600">
              * La presencia real de estas cookies puede variar según la configuración actual del sitio y los servicios
              activos.
            </p>
          </Article>

          <Article title="7. Consentimiento">
            Cuando visites nuestra web por primera vez, te mostraremos una ventana emergente con una explicación sobre
            las cookies. Tan pronto como hagas clic en «Guardar preferencias», aceptas que usemos las categorías de
            cookies y plugins que hayas seleccionado en la ventana emergente, tal y como se describe en esta política de
            cookies. Puedes desactivar el uso de cookies a través de tu navegador; no obstante, nuestra web puede dejar de
            funcionar correctamente.
            <p className="mt-3 text-sm text-zinc-600">
              Has cargado la política de cookies sin compatibilidad con JavaScript. En AMP, puedes utilizar el botón de
              gestionar el consentimiento en la parte inferior de la página.
            </p>
          </Article>

          <Article title="8. Activación/desactivación y borrado de cookies">
            Puedes utilizar tu navegador de Internet para eliminar las cookies de forma automática o manual. También
            puedes especificar que ciertas cookies no pueden ser colocadas. Otra opción es cambiar los ajustes de tu
            navegador para que recibas un mensaje cada vez que se coloca una cookie. Para obtener más información sobre
            estas opciones, consulta la sección de ayuda de tu navegador. Ten en cuenta que nuestra web puede no
            funcionar correctamente si desactivas todas las cookies. Si borras las cookies de tu navegador, se volverán a
            colocar después de tu consentimiento cuando vuelvas a visitar nuestra web.
          </Article>

          <Article title="9. Tus derechos con respecto a los datos personales">
            Tienes los siguientes derechos con respecto a tus datos personales:
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Derecho a saber por qué se necesitan tus datos, qué sucederá con ellos y durante cuánto tiempo se conservarán.</li>
              <li>Derecho de acceso a tus datos personales que conocemos.</li>
              <li>Derecho de rectificación: completar, rectificar, borrar o bloquear tus datos personales.</li>
              <li>Si das tu consentimiento para el tratamiento, derecho a revocarlo y a que se eliminen tus datos.</li>
              <li>Derecho a la portabilidad de tus datos a otro responsable del tratamiento.</li>
              <li>Derecho de oposición al tratamiento; lo cumpliremos salvo motivos justificados.</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, por favor, contáctanos. Si tienes alguna queja sobre cómo gestionamos tus datos,
              nos gustaría que nos la hicieras saber, pero también tienes derecho a presentar una reclamación ante la
              autoridad de control (Agencia Española de Protección de Datos u organismo competente).
            </p>
          </Article>

          <Article title="10. Datos de contacto">
            <div className="space-y-1">
              <p><strong>{entidad.nombre}</strong></p>
              <p>{entidad.direccion}</p>
              <p>España</p>
              <p>
                Web: <a className="text-emerald-800 hover:underline" href={entidad.web} target="_blank" rel="noreferrer">{entidad.web}</a>
              </p>
              <p>
                Correo electrónico: <a className="text-emerald-800 hover:underline" href={`mailto:${entidad.email}`}>{entidad.email}</a>
              </p>
            </div>
            <p className="mt-4 text-sm text-zinc-600">
              Esta política de cookies se sincronizó el {lastUpdate}.
            </p>
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
      <div className="prose prose-zinc max-w-none prose-p:mt-3 prose-a:text-emerald-800">
        {children}
      </div>
    </article>
  );
}

function ServiceRow({ name, purpose, consent }: { name: string; purpose: string; consent: string }) {
  return (
    <div className="grid gap-2 p-4 sm:grid-cols-3 sm:items-center">
      <div className="font-medium text-zinc-900">{name}</div>
      <div className="text-sm text-zinc-700">{purpose}</div>
      <div className="text-xs text-zinc-500 sm:text-right">{consent}</div>
    </div>
  );
}