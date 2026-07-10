/** Base URL de producción (SEO, canonical, Open Graph). */
export const SITE_URL = 'https://it-tests.netlify.app';

export const SEO_DEFAULTS = {
  siteName: 'IT Test',
  locale: 'es_AR',
  language: 'es',
  author: 'Andrés Weitzel',
  themeColor: '#0a1220',
  twitterCard: 'summary_large_image',
  ogImage: `${SITE_URL}/images/body/code.jpg`,
  ogImageAlt: 'IT Test — plataforma de tests de conocimientos IT',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
};

/**
 * Metadatos SEO por ruta (path relativo al origen).
 * Usado como fuente de verdad para HTML estático, sitemap y JSON-LD.
 */
export const SEO_PAGES = {
  home: {
    path: '/',
    title: 'IT Test — Tests de conocimientos IT gratis',
    description:
      'Practicá tests ilimitados de programación, redes, seguridad informática y fundamentos IT. Niveles básico, medio y avanzado con 4 modalidades por nivel.',
    keywords:
      'test IT, tests programación, test redes, seguridad informática, fundamentos IT, práctica IT, quizzes IT, material de estudio IT',
    type: 'website',
  },
  novedades: {
    path: '/html/novedades.html',
    title: 'Novedades y calendario — IT Test',
    description:
      'Calendario de actividad de IT Test: hitos del proyecto, sugerencias de práctica y novedades actualizadas por mes y día.',
    keywords: 'novedades IT Test, calendario práctica IT, actualizaciones tests IT',
    type: 'website',
    breadcrumb: 'Novedades',
  },
  material: {
    path: '/html/materialEstudio.html',
    title: 'Material de estudio IT — IT Test',
    description:
      'Material de estudio gratuito de programación, redes, seguridad informática y fundamentos IT. Repasá conceptos y practicá con tests.',
    keywords:
      'material de estudio IT, algoritmos, POO, bases de datos, redes, seguridad informática, criptografía, malware',
    type: 'article',
    breadcrumb: 'Material de estudio',
  },
  programacion: {
    path: '/html/testProgramacion.html',
    title: 'Test de Programación — IT Test',
    description:
      'Tests de programación con 3 niveles y 4 modalidades: rápido, clásico, extendido y lectura de código. Más de 90 preguntas teóricas y prácticas.',
    keywords: 'test programación, quiz JavaScript, POO, algoritmos, lectura de código, práctica programación',
    type: 'website',
    breadcrumb: 'Programación',
  },
  redes: {
    path: '/html/testRedes.html',
    title: 'Test de Redes e Infraestructura — IT Test',
    description:
      'Tests de redes e infraestructura: OSI, TCP/IP, DNS, Docker, Kubernetes, CI/CD y lectura práctica de comandos y configuraciones.',
    keywords: 'test redes, infraestructura IT, Docker, Kubernetes, TCP/IP, DNS, DevOps quiz',
    type: 'website',
    breadcrumb: 'Redes e Infraestructura',
  },
  seguridad: {
    path: '/html/testSeguridadInformatica.html',
    title: 'Test de Seguridad Informática — IT Test',
    description:
      'Tests de ciberseguridad: phishing, malware, OWASP, hardening, SIEM y respuesta a incidentes. Cuatro modalidades por nivel.',
    keywords: 'test seguridad informática, ciberseguridad, OWASP, phishing, malware, quiz seguridad',
    type: 'website',
    breadcrumb: 'Seguridad Informática',
  },
  fundamentos: {
    path: '/html/testFundamentosIT.html',
    title: 'Test de Fundamentos IT — IT Test',
    description:
      'Tests de fundamentos IT y mesa de ayuda: hardware, Windows, Active Directory, tickets, ITIL y escenarios reales de soporte.',
    keywords: 'test fundamentos IT, help desk, Active Directory, Windows, ITIL, soporte técnico',
    type: 'website',
    breadcrumb: 'Fundamentos IT',
  },
  electronica: {
    path: '/html/testElectronica.html',
    title: 'Electrónica (redirige a Fundamentos IT) — IT Test',
    description: 'Esta página redirige al test de Fundamentos IT.',
    keywords: 'fundamentos IT',
    type: 'website',
    noindex: true,
    canonicalPath: '/html/testFundamentosIT.html',
  },
};

/** Preguntas frecuentes indexables (FAQPage + UI). */
export const SEO_FAQS = [
  {
    question: '¿Qué es IT Test?',
    answer:
      'IT Test es una plataforma web gratuita para practicar y evaluar conocimientos IT con tests ilimitados en programación, redes e infraestructura, seguridad informática y fundamentos IT.',
  },
  {
    question: '¿Cuántos niveles y modalidades tiene cada área?',
    answer:
      'Cada área tiene tres niveles (básico, medio y avanzado) y cuatro modalidades por nivel: rápido (10 preguntas), clásico (20), extendido (30) y lectura práctica (10 fragmentos o escenarios).',
  },
  {
    question: '¿Se guardan mis puntajes?',
    answer:
      'Sí. Los intentos, el mejor puntaje y el último resultado se guardan en el localStorage de tu navegador, sin necesidad de crear una cuenta.',
  },
  {
    question: '¿Hay material de estudio?',
    answer:
      'Sí. En Material de estudio encontrás teoría por área (programación, redes, seguridad y fundamentos) y enlaces para practicar con los tests correspondientes.',
  },
  {
    question: '¿IT Test es gratis?',
    answer:
      'Sí. Todos los tests, modalidades y el material de estudio son de acceso libre. El proyecto es open source.',
  },
];

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getSeoPageByPath(pathname) {
  const normalized = pathname?.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  return Object.values(SEO_PAGES).find((page) => page.path === normalized || page.path === pathname) ?? null;
}

export function buildBreadcrumbItems(pathname) {
  const page = getSeoPageByPath(pathname);
  const items = [{ name: 'Inicio', path: '/' }];
  if (page?.breadcrumb && page.path !== '/') {
    items.push({ name: page.breadcrumb, path: page.path });
  }
  return items;
}

export function buildBreadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqJsonLd(faqs = SEO_FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildHowToJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo empezar en IT Test',
    description: 'Pasos para practicar con un test de conocimientos IT en la plataforma.',
    inLanguage: 'es-AR',
    totalTime: 'PT10M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Elegí un área',
        text: 'Entrá al inicio y seleccioná Programación, Redes, Seguridad o Fundamentos IT.',
        url: absoluteUrl('/'),
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Seleccioná nivel y modalidad',
        text: 'Elegí básico, medio o avanzado, y una modalidad: rápido, clásico, extendido o lectura práctica.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Completá el test',
        text: 'Respondé las preguntas, enviá tus respuestas y revisá el puntaje con corrección inmediata.',
      },
    ],
  };
}
