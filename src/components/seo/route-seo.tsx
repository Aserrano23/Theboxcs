import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

/**
 * SEO específico por ruta. Se monta junto a <DefaultSeo /> y sobreescribe título/description.
 */
export function RouteSeo() {
  const { pathname } = useLocation();

  const entries: Array<{
    match: RegExp;
    title: string;
    description: string;
  }> = [
    {
      match: /^\/$/,
      title: "The Box Castellón | CrossFit en Castellón, fuerza y acondicionamiento",
      description:
        "Box de CrossFit en Castellón. Entrenamientos de fuerza y acondicionamiento, comunidad y planificación a medida.",
    },
    {
      match: /^\/nosotros\/?$/,
      title: "Nosotros | The Box Castellón",
      description:
        "Conoce nuestra filosofía Old School, el equipo y cómo entrenamos para mejorar salud, fuerza y rendimiento.",
    },
    {
      match: /^\/old-school-training\/?$/,
      title: "Old School Training | The Box Castellón",
      description:
        "Método de entrenamiento basado en movimientos funcionales, disciplina y progreso seguro.",
    },
    {
      match: /^\/vocabulario\/?$/,
      title: "Vocabulario Old School | The Box Castellón",
      description:
        "Términos y conceptos clave de nuestra filosofía de entrenamiento en The Box Castellón.",
    },
    {
      match: /^\/regas-old-school-training\/?$/,
      title: "Old School Rules | Normas del box — The Box Castellón",
      description:
        "Normas de convivencia y entrenamiento para mantener el box seguro, respetuoso y eficiente.",
    },
    {
      match: /^\/el-box\/?$/,
      title: "El Box | Instalaciones y equipamiento — The Box Castellón",
      description:
        "Sala diáfana de 400 m², jaulas, zonas de halterofilia y material específico para entrenar al máximo nivel.",
    },
    {
      match: /^\/galeria\/?$/,
      title: "Galería | The Box Castellón",
      description: "Echa un vistazo al ambiente del box y a nuestras instalaciones.",
    },
    {
      match: /^\/precios\/?$/,
      title: "Precios | Planes y bonos — The Box Castellón",
      description:
        "Consulta precios de clases y bonos. Elige el plan que mejor encaja con tu objetivo y disponibilidad.",
    },
    {
      match: /^\/contacto\/?$/,
      title: "Contacto | The Box Castellón",
      description:
        "Escríbenos o ven a vernos: C/ José Pascual Viciano 10N, Castellón. Resolvemos tus dudas y te ayudamos a empezar.",
    },
    // Infinitum Salud
    {
      match: /^\/entrenamiento-personal\/?$/,
      title: "Entrenamiento personal online | Infinitum Salud & The Box Castellón",
      description:
        "Planificación personalizada con revisiones mensuales para entrenar desde casa o tu gimnasio.",
    },
    {
      match: /^\/nutricion\/?$/,
      title: "Nutrición | Plan personalizado, ISAK y seguimiento — The Box Castellón",
      description:
        "Evaluación, menú semanal, lista de la compra y medición corporal (básica o ISAK) con informe.",
    },
    {
      match: /^\/psicologia\/?$/,
      title: "Psicología | Evaluación, objetivos y terapia — The Box Castellón",
      description:
        "Consulta de evaluación inicial, fijación de objetivos y actividades para continuar el proceso entre sesiones.",
    },
    // Legal
    {
      match: /^\/aviso-legal\/?$/,
      title: "Aviso legal | The Box Castellón",
      description: "Información legal y datos del prestador del servicio.",
    },
    {
      match: /^\/cookies\/?$/,
      title: "Política de cookies | The Box Castellón",
      description: "Uso de cookies técnicas y analíticas y cómo gestionar tu consentimiento.",
    },
    {
      match: /^\/privacidad\/?$/,
      title: "Política de privacidad | The Box Castellón",
      description:
        "Tratamiento de datos personales, finalidades y derechos de acceso, rectificación y supresión.",
    },
  ];

  const match = entries.find((e) => e.match.test(pathname));
  if (!match) return null;

  return (
    <Helmet>
      <title>{match.title}</title>
      <meta name="description" content={match.description} />
    </Helmet>
  );
}
