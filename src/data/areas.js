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
    image: '/images/body/abstract2.jpg',
    imageClass: 'area-card__image--soft',
    gradient: 'linear-gradient(135deg, rgba(51, 65, 85, 0.85) 0%, rgba(30, 58, 95, 0.9) 55%, rgba(49, 46, 129, 0.88) 100%)',
    href: '/html/testFundamentosIT.html',
    available: true,
    modalId: 'area-fundamentos-it',
    infoTitle: 'Test de Fundamentos IT',
    infoBody:
      'Orientado a soporte técnico, identidad corporativa, productividad y procedimientos de mesa de ayuda.',
    stats: { levels: 3, modalities: 4 },
  },
];

export const COURSES = {
  title: 'Cursos gratuitos del autor',
  description:
    'Playlists en YouTube organizadas por tema y complejidad progresiva. Ideal para reforzar lo que practicás en los tests antes de subir de nivel.',
  image: '/images/body/cusos.jpg',
  youtubeUrl: 'https://www.youtube.com/channel/UCuSVXmBcMURyTvbmbcgZalQ/featured',
  materialUrl: 'https://github.com/andresWeitzel/Material_de_Estudio',
  topics: ['Informática', 'Redes', 'Linux', 'Automatización', 'Robótica', 'Electricidad'],
  highlights: [
    'Contenido gratuito y actualizado por el autor del sitio',
    'Playlists por área, de baja a mayor complejidad',
    'Complementa el material de estudio integrado en Test IT',
  ],
  infoBody: `El canal de YouTube está organizado por áreas: automatización, robótica, informática, Linux y más. Cada sección incluye playlists por tema, empezando por contenido de baja complejidad. Todos los cursos son gratuitos.`,
};

export const ROADMAP = {
  title: 'Hoja de ruta',
  subtitle: 'Evolución del proyecto y próximos pasos',
  phases: [
    {
      status: 'done',
      label: 'Etapa 1',
      title: 'Base moderna del sitio',
      text: 'Migración a Vite, diseño renovado, motor de tests con puntajes locales y cuatro áreas activas.',
    },
    {
      status: 'done',
      label: 'Etapa 2',
      title: 'Modalidades y bancos de preguntas',
      text: 'Rápido, clásico, extendido y lectura práctica en cada nivel, con contenido versionado en el repositorio.',
    },
    {
      status: 'current',
      label: 'Ahora',
      title: 'Experiencia de estudio',
      text: 'Material reorganizado, mejoras de interfaz, más preguntas y explicaciones al finalizar cada test.',
    },
    {
      status: 'planned',
      label: 'Próximo',
      title: 'Modo certificación',
      text: 'Tests cronometrados, insignias por área y resumen exportable de tu progreso.',
    },
    {
      status: 'planned',
      label: 'Futuro',
      title: 'Autoría y validación',
      text: 'Panel para cargar preguntas en JSON y chequeos automáticos de calidad en el build.',
    },
  ],
};
