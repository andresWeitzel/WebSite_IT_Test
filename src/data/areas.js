import { ROUTES } from './site.js';

export const AREAS = [
  {
    id: 'programacion',
    title: 'Programación',
    icon: '💻',
    description:
      'Desde fundamentos y POO hasta algoritmos y código JavaScript. Tres niveles con tests teóricos y fragmentos prácticos.',
    image: '/images/body/hexa.jpg',
    gradient: 'linear-gradient(135deg, #0e7490 0%, #164e63 100%)',
    href: '/html/testProgramacion.html',
    available: true,
    modalId: 'area-programacion',
    infoTitle: 'Test de Programación',
    infoBody:
      'Cuatro modalidades por nivel: rápido, clásico, extendido y lectura de código. Más de 90 preguntas teóricas y fragmentos prácticos.',
    stats: { levels: 3, modalities: 4 },
  },
  {
    id: 'redes-infra',
    title: 'Redes e Infraestructura',
    icon: '🌐',
    description:
      'Modelo OSI, TCP/IP, DNS y servicios de red, sumado a Docker, CI/CD, cloud y automatización con Terraform y Kubernetes.',
    image: '/images/body/redes.jpg',
    gradient: 'linear-gradient(135deg, #0369a1 0%, #1e3a5f 100%)',
    href: '/html/testRedes.html',
    available: true,
    modalId: 'area-redes-infra',
    infoTitle: 'Test de Redes e Infraestructura',
    infoBody:
      'Networking, Docker, Kubernetes, CI/CD, Terraform y lectura práctica de comandos y configuraciones.',
    stats: { levels: 3, modalities: 4 },
  },
  {
    id: 'seguridad',
    title: 'Seguridad Informática',
    icon: '🛡️',
    description:
      'Amenazas, controles y buenas prácticas: desde phishing y malware hasta OWASP, hardening y respuesta a incidentes.',
    image: '/images/body/seguridad4.jpg',
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #431407 100%)',
    href: '/html/testSeguridadInformatica.html',
    available: true,
    modalId: 'area-seguridad',
    infoTitle: 'Test de Seguridad Informática',
    infoBody:
      'Desde phishing y malware hasta OWASP, SIEM y análisis de logs. Cuatro modalidades en cada nivel.',
    stats: { levels: 3, modalities: 4 },
  },
  {
    id: 'fundamentos-it',
    title: 'Fundamentos IT',
    icon: '🖥️',
    description:
      'Mesa de ayuda y operaciones: hardware, Windows, Active Directory, tickets, ITIL y escenarios reales de soporte.',
    image: '/images/body/electronica.jpeg',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #3730a3 55%, #6d28d9 100%)',
    href: '/html/testFundamentosIT.html',
    available: true,
    modalId: 'area-fundamentos-it',
    infoTitle: 'Test de Fundamentos IT',
    infoBody:
      'Orientado a soporte técnico, identidad corporativa, productividad y procedimientos de mesa de ayuda.',
    stats: { levels: 3, modalities: 4 },
  },
];

/** Guía de uso en el home: cómo practicar, no repetir las tarjetas de área. */
export const PRACTICE_PATH = {
  title: 'Cómo practicar bien',
  subtitle:
    'Un flujo concreto para progresar: teoría primero, tests cortos para calibrar y recién después subir nivel y modalidad.',
  phases: [
    {
      status: 'current',
      label: 'Paso 1',
      icon: '📖',
      title: 'Repasá el material del área',
      text: 'Antes del primer intento, leé los temas en Material de estudio. Conocer el mapa alinea vocabulario y reduce sorpresas en las preguntas.',
      href: ROUTES.material,
      ctaLabel: 'Abrir material',
    },
    {
      status: 'step',
      label: 'Paso 2',
      icon: '⚡',
      title: 'Calibrá con rápido + básico',
      text: 'Elegí tu área y empezá en nivel básico con modalidad rápida. Son pocas preguntas: sirve para detectar en qué tema te falta base.',
      href: '#areas-title',
      ctaLabel: 'Ver áreas',
    },
    {
      status: 'step',
      label: 'Paso 3',
      icon: '🎯',
      title: 'Profundizá con clásico o extendido',
      text: 'Cuando el básico te salga cómodo, probá clásico o extendido en el mismo nivel. Ahí hay más escenarios y lectura de código o comandos.',
    },
    {
      status: 'step',
      label: 'Paso 4',
      icon: '📈',
      title: 'Subí de nivel con criterio',
      text: 'Pasá a medio cuando repitas buenos resultados en básico. Avanzado asume que dominás el nivel anterior: no apures el salto.',
    },
    {
      status: 'step',
      label: 'Paso 5',
      icon: '🔀',
      title: 'Cruzá áreas relacionadas',
      text: 'Redes encaja con seguridad; fundamentos IT con todo lo demás. Alternar áreas afines refuerza lo aprendido sin quemarte en una sola.',
    },
  ],
  modalities: [
    { name: 'Rápido', hint: 'Calentamiento y diagnóstico' },
    { name: 'Clásico', hint: 'Ritmo estándar por nivel' },
    { name: 'Extendido', hint: 'Más preguntas, más profundidad' },
    { name: 'Lectura', hint: 'Código, logs y comandos' },
  ],
  profiles: [
    {
      id: 'helpdesk',
      title: 'Mesa de ayuda',
      icon: '🎧',
      hint: 'Soporte y operaciones',
      steps: ['Fundamentos IT', 'Redes', 'Seguridad'],
      href: ROUTES.testFundamentosIT,
    },
    {
      id: 'infra',
      title: 'Infra y redes',
      icon: '🌐',
      hint: 'Servicios y plataforma',
      steps: ['Redes e Infra', 'Seguridad', 'Programación'],
      href: ROUTES.testRedesInfra,
    },
    {
      id: 'dev',
      title: 'Desarrollo',
      icon: '💻',
      hint: 'Código y lógica',
      steps: ['Programación', 'Fundamentos IT', 'Seguridad'],
      href: ROUTES.testProgramacion,
    },
  ],
};

/** Resumen de áreas para la página de Novedades (sidebar). */
export const AREAS_OVERVIEW = {
  title: 'Áreas de test activas',
  subtitle: 'Cuatro bloques con 3 niveles y 4 modalidades cada uno.',
  phases: AREAS.map((area) => ({
    status: 'area',
    label: area.title,
    icon: area.icon,
    title: area.infoTitle,
    text: area.infoBody,
    href: area.href,
  })),
};

export const COURSES = {
  title: 'Cursos gratuitos del autor',
  description:
    'Playlists en YouTube organizadas por tema y complejidad progresiva. Ideal para reforzar lo que practicás en los tests antes de subir de nivel.',
  youtubeUrl: 'https://www.youtube.com/channel/UCuSVXmBcMURyTvbmbcgZalQ/featured',
  materialUrl: 'https://github.com/andresWeitzel/Material_de_Estudio',
  topics: ['Informática', 'Redes', 'Linux', 'Automatización', 'Robótica', 'Electricidad'],
  highlights: [
    'Contenido gratuito y actualizado por el autor del sitio',
    'Playlists por área, de baja a mayor complejidad',
    'Complementa el material de estudio integrado en IT Test',
  ],
  infoBody: `El canal de YouTube está organizado por áreas: automatización, robótica, informática, Linux y más. Cada sección incluye playlists por tema, empezando por contenido de baja complejidad. Todos los cursos son gratuitos.`,
};
