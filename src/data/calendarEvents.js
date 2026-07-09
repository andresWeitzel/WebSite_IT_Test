import { ROUTES } from './site.js';

/** Categorías de eventos del calendario de Novedades */
export const EVENT_CATEGORIES = {
  historico: { label: 'Histórico', color: '#64748b' },
  hito: { label: 'Hito', color: '#22d3ee' },
  release: { label: 'Lanzamiento', color: '#34d399' },
  planificado: { label: 'Planificado', color: '#fbbf24' },
  practica: { label: 'Práctica', color: '#a78bfa' },
  sugerencia: { label: 'Sugerencia', color: '#38bdf8' },
};

const AREA_ROTATION = [
  {
    title: 'Programación',
    href: ROUTES.testProgramacion,
    topics: ['POO', 'algoritmos', 'JavaScript', 'lectura de código'],
  },
  {
    title: 'Redes e Infraestructura',
    href: ROUTES.testRedesInfra,
    topics: ['TCP/IP', 'DNS', 'Docker', 'CI/CD'],
  },
  {
    title: 'Seguridad Informática',
    href: ROUTES.testSeguridad,
    topics: ['phishing', 'OWASP', 'hardening', 'respuesta a incidentes'],
  },
  {
    title: 'Fundamentos IT',
    href: ROUTES.testFundamentosIT,
    topics: ['soporte', 'Active Directory', 'tickets', 'ITIL'],
  },
];

const DAILY_SUGGESTIONS = [
  'Probá la modalidad rápida en nivel básico para calibrar sin presión.',
  'Repasá un tema en Material de estudio antes de un test extendido.',
  'Alterná entre dos áreas relacionadas para fijar conceptos.',
  'Usá lectura práctica cuando quieras ejercicios con código o comandos.',
  'Repetí un test clásico si tu último puntaje fue menor al 70%.',
  'Anotá los temas que fallaste y buscalos en el material del área.',
  'Subí de nivel solo cuando el básico te salga cómodo varias veces.',
];

const MONTHLY_THEMES = [
  'Enero: ordená tu ruta — empezá por fundamentos o por tu área objetivo.',
  'Febrero: reforzá redes y protocolos con tests cortos diarios.',
  'Marzo: meté seguridad en la rutina; amenazas y controles van de la mano.',
  'Abril: profundizá programación con lectura de código.',
  'Mayo: consolidá con modalidad extendida en el nivel que domines.',
  'Junio: repaso general cruzando las cuatro áreas.',
  'Julio: simulá presión con clásico en nivel medio.',
  'Agosto: volvé a material nuevo y contrastá con preguntas del test.',
  'Septiembre: enfocate en lectura práctica y escenarios reales.',
  'Octubre: medí progreso comparando mejores puntajes del mes.',
  'Noviembre: cerrá huecos en el nivel medio antes de avanzado.',
  'Diciembre: repaso liviano con tests rápidos para mantener ritmo.',
];

/** Eventos fijos del proyecto — históricos, actuales y planificados */
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
    category: 'hito',
    description:
      'Etapa 1 de la hoja de ruta: migración del build, diseño renovado y motor de tests con puntajes locales. Periodo: jun–jul 2025.',
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
    category: 'hito',
    description:
      'Etapa 2: rápido, clásico, extendido y lectura práctica en cada nivel, con bancos versionados. Periodo: ago–sep 2025.',
  },
  {
    id: 'study-exp',
    title: 'Experiencia de estudio',
    start: '2025-10-01',
    category: 'hito',
    description:
      'Etapa actual: material reorganizado, mejoras de interfaz, más preguntas y explicaciones al finalizar cada test. Periodo: oct 2025 – jun 2026.',
  },
  {
    id: 'cert-mode',
    title: 'Modo certificación',
    start: '2026-07-01',
    category: 'planificado',
    description:
      'Tests cronometrados, insignias por área y resumen exportable de tu progreso. Planificado: jul–dic 2026.',
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

function pad2(value) {
  return String(value).padStart(2, '0');
}

function toDateKey(year, month, day) {
  return `${year}-${pad2(month + 1)}-${pad2(day)}`;
}

function parseDateKey(key) {
  const [year, month, day] = key.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function monthSeed(year, month) {
  return ((year * 12 + month + 1) * 9301 + 49297) % 233280;
}

function seededPick(seed, max) {
  return seed % max;
}

function eventOverlapsRange(event, rangeStart, rangeEnd) {
  const start = parseDateKey(event.start);
  const end = event.end ? parseDateKey(event.end) : start;
  return start < rangeEnd && end >= rangeStart;
}

function mapToFullCalendarEvent(event) {
  const category = EVENT_CATEGORIES[event.category];
  const fcEvent = {
    id: event.id,
    title: event.title,
    start: event.start,
    extendedProps: {
      description: event.description,
      category: event.category,
      categoryLabel: category?.label ?? event.category,
      dynamic: Boolean(event.dynamic),
    },
  };

  if (event.end) fcEvent.end = event.end;
  if (event.url) fcEvent.url = event.url;
  if (event.display) fcEvent.display = event.display;
  fcEvent.color = event.color ?? category?.color;
  fcEvent.borderColor = fcEvent.color;

  return fcEvent;
}

function getMondaysInMonth(year, month) {
  const days = [];
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= totalDays; day += 1) {
    const date = new Date(year, month, day);
    if (date.getDay() === 1) days.push(day);
  }

  return days;
}

function generateMonthEvents(year, month, now) {
  const events = [];
  const area = AREA_ROTATION[month % AREA_ROTATION.length];
  const seed = monthSeed(year, month);
  const totalDays = new Date(year, month + 1, 0).getDate();
  const isCurrentMonth = now.getFullYear() === year && now.getMonth() === month;
  const isFutureMonth =
    year > now.getFullYear() || (year === now.getFullYear() && month > now.getMonth());

  events.push({
    id: `focus-${year}-${month}`,
    title: `Área del mes: ${area.title}`,
    start: toDateKey(year, month, 1),
    category: 'practica',
    description: `Este mes conviene reforzar ${area.title}. Temas sugeridos: ${area.topics.join(', ')}.`,
    url: area.href,
    dynamic: true,
  });

  events.push({
    id: `theme-${year}-${month}`,
    title: 'Tema mensual',
    start: toDateKey(year, month, Math.min(10, totalDays)),
    category: 'sugerencia',
    description: MONTHLY_THEMES[month],
    dynamic: true,
  });

  const practiceDay = getMondaysInMonth(year, month)[1] ?? getMondaysInMonth(year, month)[0];
  if (practiceDay) {
    events.push({
      id: `practice-${year}-${month}`,
      title: 'Sesión de práctica sugerida',
      start: toDateKey(year, month, practiceDay),
      category: 'practica',
      description: `Bloque de 20–30 minutos en ${area.title}: un test rápido y repaso de errores en Material de estudio.`,
      url: area.href,
      dynamic: true,
    });
  }

  const midDay = Math.min(15 + seededPick(seed, 5), totalDays);
  events.push({
    id: `mid-${year}-${month}`,
    title: 'Checkpoint de mitad de mes',
    start: toDateKey(year, month, midDay),
    category: 'sugerencia',
    description: isFutureMonth
      ? `Planificá un test clásico en ${area.title} para medir avance a mitad de mes.`
      : `¿Cómo venís con ${area.title}? Repetí el nivel que estés estudiando y compará tu mejor puntaje.`,
    url: area.href,
    dynamic: true,
  });

  const storyDay = Math.min(6 + seededPick(seed + 7, 9), totalDays);
  if (!isFutureMonth) {
    const storyTemplates = [
      `Se amplió el banco de preguntas de ${area.title} con escenarios de ${area.topics[seededPick(seed, area.topics.length)]}.`,
      `Mejora de explicaciones al finalizar tests en ${area.title}.`,
      `Ajustes de interfaz en la página de ${area.title} para móvil.`,
      `Nuevos fragmentos de lectura práctica en ${area.title}.`,
      `Repaso recomendado de ${area.topics[seededPick(seed + 3, area.topics.length)]} en Material de estudio.`,
    ];

    events.push({
      id: `story-${year}-${month}`,
      title: 'Actualización de contenido',
      start: toDateKey(year, month, storyDay),
      category: year < 2025 || (year === 2025 && month < 6) ? 'historico' : 'hito',
      description: storyTemplates[seededPick(seed + 11, storyTemplates.length)],
      dynamic: true,
    });
  }

  if (isCurrentMonth) {
    const today = now.getDate();
    const suggestion = DAILY_SUGGESTIONS[seededPick(now.getDate() + month, DAILY_SUGGESTIONS.length)];

    events.push({
      id: `today-${toDateKey(year, month, today)}`,
      title: 'Sugerencia de hoy',
      start: toDateKey(year, month, today),
      category: 'sugerencia',
      description: suggestion,
      dynamic: true,
    });

    const upcomingDay = Math.min(today + 3, totalDays);
    if (upcomingDay > today) {
      events.push({
        id: `upcoming-${year}-${month}-${upcomingDay}`,
        title: 'Próximo recordatorio',
        start: toDateKey(year, month, upcomingDay),
        category: 'practica',
        description: `Reservá un rato para un test extendido en ${area.title} y anotá los temas a repasar.`,
        url: area.href,
        dynamic: true,
      });
    }
  }

  return events;
}

function generateDynamicEvents(rangeStart, rangeEnd, now = new Date()) {
  const events = [];
  const cursor = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), 1);
  const limit = new Date(rangeEnd.getFullYear(), rangeEnd.getMonth(), 1);

  while (cursor < limit) {
    events.push(...generateMonthEvents(cursor.getFullYear(), cursor.getMonth(), now));
    cursor.setMonth(cursor.getMonth() + 1);
  }

  return events;
}

/** Eventos visibles en un rango de fechas (estáticos + generados por mes/día). */
export function getCalendarEventsForRange(rangeStart, rangeEnd, now = new Date()) {
  const staticEvents = CALENDAR_EVENTS.filter((event) => eventOverlapsRange(event, rangeStart, rangeEnd));
  const dynamicEvents = generateDynamicEvents(rangeStart, rangeEnd, now);
  const merged = [...staticEvents, ...dynamicEvents];

  const byId = new Map();
  merged.forEach((event) => {
    if (!byId.has(event.id)) byId.set(event.id, event);
  });

  return [...byId.values()].map(mapToFullCalendarEvent);
}

/** @deprecated Usar getCalendarEventsForRange */
export function toFullCalendarEvents() {
  const start = new Date();
  start.setMonth(start.getMonth() - 1, 1);
  const end = new Date();
  end.setMonth(end.getMonth() + 2, 1);
  return getCalendarEventsForRange(start, end);
}
