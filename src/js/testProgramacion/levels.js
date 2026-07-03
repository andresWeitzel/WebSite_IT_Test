import { mergeSets } from '../../data/questions/mergeSets.js';
import { PROGRAMACION_BANKS } from './programacionBanks.js';

function createStandardVariants(teoriaSets, codigoBank, copy = {}) {
  return [
    {
      id: 'rapido',
      title: 'Rápido',
      badge: '10 preguntas',
      description: copy.rapido ?? 'Repaso ágil de conceptos del nivel.',
      icon: '⚡',
      resolveQuestions: (useSetA) => mergeSets(teoriaSets, useSetA ? [0, 1] : [4, 5]),
    },
    {
      id: 'clasico',
      title: 'Clásico',
      badge: '20 preguntas',
      description: copy.clasico ?? 'Formato tradicional de conceptos teóricos.',
      icon: '📋',
      resolveQuestions: (useSetA) => mergeSets(teoriaSets, useSetA ? [0, 1, 2, 3] : [2, 3, 4, 5]),
    },
    {
      id: 'extendido',
      title: 'Extendido',
      badge: '30 preguntas',
      description: copy.extendido ?? 'Recorrido completo del banco teórico del nivel.',
      icon: '📚',
      resolveQuestions: () => mergeSets(teoriaSets, [0, 1, 2, 3, 4, 5]),
    },
    {
      id: 'codigo',
      title: 'Lectura de código',
      badge: '10 fragmentos',
      description: copy.codigo ?? 'Analizá snippets y elegí la salida o comportamiento correcto.',
      icon: '💻',
      resolveQuestions: () => codigoBank,
    },
  ];
}

export const PROGRAMACION_LEVELS = [
  {
    id: 'basico',
    title: 'Básico',
    badge: '4 modalidades',
    description: 'Fundamentos, POO introductoria y lectura de código.',
    topics: [
      { title: 'Base de datos', text: 'Definición, tipos y nomenclatura básica.' },
      { title: 'Fundamentos', text: 'Variables, constantes y algoritmos.' },
      { title: 'POO', text: 'Objetos, interfaces y modelo entidad-relación.' },
      { title: 'Código', text: 'Interpretar fragmentos JavaScript simples.' },
    ],
    variants: createStandardVariants(
      PROGRAMACION_BANKS.basico.teoria,
      PROGRAMACION_BANKS.basico.codigo,
      {
        rapido: 'Repaso ágil de conceptos fundamentales.',
        codigo: 'Fragmentos JavaScript introductorios.',
      }
    ),
  },
  {
    id: 'medio',
    title: 'Medio',
    badge: '4 modalidades',
    description: 'Paradigmas, POO intermedia, patrones y APIs.',
    topics: [
      { title: 'Paradigmas', text: 'Imperativo, funcional y otros enfoques.' },
      { title: 'POO', text: 'Polimorfismo, recursividad y conceptos clave.' },
      { title: 'Patrones', text: 'Prototype, comportamiento y más.' },
      { title: 'Código', text: 'Arrays funcionales, objetos y ES6 intermedio.' },
    ],
    variants: createStandardVariants(
      PROGRAMACION_BANKS.medio.teoria,
      PROGRAMACION_BANKS.medio.codigo,
      {
        rapido: 'Conceptos intermedios en formato breve.',
        extendido: 'Paradigmas, patrones, estructuras y buenas prácticas.',
        codigo: 'map, filter, destructuring y más.',
      }
    ),
  },
  {
    id: 'avanzado',
    title: 'Avanzado',
    badge: '4 modalidades',
    description: 'TDA, algoritmos, redes, sistemas y código avanzado.',
    topics: [
      { title: 'Árboles y grafos', text: 'Estructuras de datos analíticas.' },
      { title: 'Algoritmos', text: 'Búsqueda, backtracking y ordenamiento.' },
      { title: 'Redes y hardware', text: 'Sockets, protocolos y memoria.' },
      { title: 'Código', text: 'Recursión, promesas, closures y estructuras.' },
    ],
    variants: createStandardVariants(
      PROGRAMACION_BANKS.avanzado.teoria,
      PROGRAMACION_BANKS.avanzado.codigo,
      {
        rapido: 'Repaso intenso de temas avanzados.',
        extendido: 'TDA, redes, sistemas distribuidos y arquitectura.',
        codigo: 'Snippets de algoritmos y JavaScript moderno.',
      }
    ),
  },
];

export const PROGRAMACION_INFO = `Cada nivel (básico, medio y avanzado) ofrece cuatro modalidades: rápido (10 preguntas), clásico (20), extendido (30) y lectura de código (10 fragmentos). Las preguntas teóricas alternan bloques por intento; el contenido vive en bancos versionados del proyecto.`;

export function getStorageKey(levelId, variantId = null) {
  return variantId ? `${levelId}-${variantId}` : levelId;
}

export function getAllTestKeys() {
  const keys = [];

  PROGRAMACION_LEVELS.forEach((level) => {
    level.variants.forEach((variant) => keys.push(getStorageKey(level.id, variant.id)));
  });

  return keys;
}
