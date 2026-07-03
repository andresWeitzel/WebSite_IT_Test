/** Iconos y metadatos por modalidad — únicos en toda la app */
export const VARIANT_META = {
  rapido: {
    icon: '⚡',
    title: 'Rápido',
    badge: '10 preguntas',
    defaultDescription: 'Repaso ágil del nivel.',
  },
  clasico: {
    icon: '🎯',
    title: 'Clásico',
    badge: '20 preguntas',
    defaultDescription: 'Formato tradicional de conceptos teóricos.',
  },
  extendido: {
    icon: '🧩',
    title: 'Extendido',
    badge: '30 preguntas',
    defaultDescription: 'Recorrido completo del banco teórico del nivel.',
  },
  codigo: {
    icon: '⌨️',
    title: 'Lectura práctica',
    badge: '10 fragmentos',
    defaultDescription: 'Analizá snippets y elegí la respuesta correcta.',
  },
};

/** Icono de la modalidad práctica según área */
export const AREA_PRACTICE_ICONS = {
  programacion: '💻',
  'redes-infra': '🌐',
  seguridad: '🛡️',
  'fundamentos-it': '🖥️',
};

export function getVariantIcon(variantId, areaId) {
  if (variantId === 'codigo') {
    return AREA_PRACTICE_ICONS[areaId] ?? VARIANT_META.codigo.icon;
  }
  return VARIANT_META[variantId]?.icon ?? '✦';
}
