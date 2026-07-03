export const AREAS = [
  {
    id: 'programacion',
    title: 'Programación',
    description:
      'POO, tipos de datos, estructuras, arquitectura, hardware y fundamentos de software.',
    image: '/images/body/hexa.jpg',
    gradient: 'linear-gradient(135deg, #0e7490 0%, #164e63 100%)',
    href: '/html/testProgramacion.html',
    available: true,
    modalId: 'area-programacion',
    infoTitle: 'Test de Programación',
    infoBody:
      'Preguntas en tres niveles de dificultad para mantenerte en constante aprendizaje sobre programación y fundamentos de informática.',
  },
  {
    id: 'redes',
    title: 'Redes',
    description:
      'Infraestructura, protocolos, servicios de red, hardware y conectividad.',
    image: '/images/body/redes.jpg',
    gradient: 'linear-gradient(135deg, #0369a1 0%, #1e3a5f 100%)',
    href: '/html/testRedes.html',
    available: false,
    modalId: 'area-redes',
    infoTitle: 'Test de Redes Informáticas',
    infoBody:
      'Evaluá tu conocimiento en redes con tests por nivel. Ideal para repasar antes de certificaciones o entrevistas técnicas.',
  },
  {
    id: 'seguridad',
    title: 'Seguridad Informática',
    description:
      'Ingeniería social, vulnerabilidades, tipos de malware y buenas prácticas de seguridad.',
    image: '/images/body/seguridad4.jpg',
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #431407 100%)',
    href: '/html/testSeguridadInformatica.html',
    available: false,
    modalId: 'area-seguridad',
    infoTitle: 'Test de Seguridad Informática',
    infoBody:
      'Poné a prueba lo que sabés sobre ciberseguridad, amenazas comunes y protección de sistemas.',
  },
  {
    id: 'electronica',
    title: 'Electrónica',
    description:
      'Arquitectura de hardware, sistemas de numeración, comunicación e implementaciones.',
    image: '/images/body/electronica.jpeg',
    gradient: 'linear-gradient(135deg, #4d7c0f 0%, #1a2e05 100%)',
    href: '/html/testElectronica.html',
    available: false,
    modalId: 'area-electronica',
    infoTitle: 'Test de Electrónica',
    infoBody:
      'Repasá conceptos de electrónica digital y hardware con preguntas organizadas por dificultad.',
  },
];

export const COURSES = {
  title: 'Cursos gratuitos del autor',
  description:
    'El canal está dividido en Informática, Redes, Robótica, Automatización, Electricidad y más.',
  image: '/images/body/cusos.jpg',
  youtubeUrl: 'https://www.youtube.com/channel/UCuSVXmBcMURyTvbmbcgZalQ/featured',
  materialUrl: 'https://github.com/andresWeitzel/Material_de_Estudio',
  infoBody: `El canal de YouTube está organizado por áreas: automatización, robótica, informática, Linux y más. Cada sección incluye playlists por tema, empezando por contenido de baja complejidad. Todos los cursos son gratuitos.`,
};
