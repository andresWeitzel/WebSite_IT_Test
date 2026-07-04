/** Categorías de eventos del calendario de Novedades */
export const EVENT_CATEGORIES = {
  historico: { label: 'Histórico', color: '#64748b' },
  hito: { label: 'Hito', color: '#22d3ee' },
  release: { label: 'Lanzamiento', color: '#34d399' },
  planificado: { label: 'Planificado', color: '#fbbf24' },
};

/** Eventos del proyecto — históricos, actuales y planificados */
export const CALENDAR_EVENTS = [
  {
    id: 'proj-start',
    title: 'Se creó el proyecto',
    start: '2020-12-22',
    category: 'historico',
    description:
      'Inicio del repositorio SitioWebTest_IT en GitHub. Primera versión del sitio de tests IT.',
    url: 'https://github.com/andresWeitzel/SitioWebTest_IT',
  },
  {
    id: 'content-creation',
    title: 'Creación de contenido',
    start: '2020-12-25',
    end: '2020-12-28',
    category: 'historico',
    description: 'Primera carga de preguntas y material de estudio al repositorio.',
  },
  {
    id: 'standby',
    title: 'Pausa del proyecto',
    start: '2020-12-31',
    end: '2021-01-05',
    category: 'historico',
    description: 'Período de stand-by antes del retorno activo al desarrollo.',
    display: 'background',
    color: '#475569',
  },
  {
    id: 'return',
    title: 'Retorno al desarrollo',
    start: '2021-01-05',
    category: 'historico',
    description: 'Reanudación del trabajo en el sitio y nuevas áreas de test.',
  },
  {
    id: 'vite-migration',
    title: 'Migración a Vite',
    start: '2025-06-01',
    end: '2025-07-15',
    category: 'hito',
    description:
      'Etapa 1 de la hoja de ruta: migración del build, diseño renovado y motor de tests con puntajes locales.',
  },
  {
    id: 'four-areas',
    title: 'Cuatro áreas activas',
    start: '2025-07-01',
    category: 'release',
    description:
      'Programación, Redes e Infraestructura, Seguridad Informática y Fundamentos IT disponibles con tests por nivel.',
  },
  {
    id: 'modalities',
    title: 'Modalidades de test',
    start: '2025-08-01',
    end: '2025-09-30',
    category: 'hito',
    description:
      'Etapa 2: rápido, clásico, extendido y lectura práctica en cada nivel, con bancos versionados.',
  },
  {
    id: 'study-exp',
    title: 'Experiencia de estudio',
    start: '2025-10-01',
    end: '2026-06-30',
    category: 'hito',
    description:
      'Etapa actual: material reorganizado, mejoras de interfaz, más preguntas y explicaciones al finalizar cada test.',
  },
  {
    id: 'cert-mode',
    title: 'Modo certificación',
    start: '2026-07-01',
    end: '2026-12-31',
    category: 'planificado',
    description:
      'Tests cronometrados, insignias por área y resumen exportable de tu progreso.',
  },
  {
    id: 'authoring',
    title: 'Autoría y validación',
    start: '2027-01-01',
    category: 'planificado',
    description:
      'Panel para cargar preguntas en JSON y chequeos automáticos de calidad en el build.',
  },
];

/** Convierte eventos internos al formato de FullCalendar */
export function toFullCalendarEvents() {
  return CALENDAR_EVENTS.map((event) => {
    const category = EVENT_CATEGORIES[event.category];
    const fcEvent = {
      id: event.id,
      title: event.title,
      start: event.start,
      extendedProps: {
        description: event.description,
        category: event.category,
        categoryLabel: category?.label ?? event.category,
      },
    };

    if (event.end) fcEvent.end = event.end;
    if (event.url) fcEvent.url = event.url;
    if (event.display) fcEvent.display = event.display;
    fcEvent.color = event.color ?? category?.color;
    fcEvent.borderColor = fcEvent.color;

    return fcEvent;
  });
}
