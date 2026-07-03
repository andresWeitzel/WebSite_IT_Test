import { createStandardVariants, getStorageKey, getAllTestKeys } from '../test/variantPresets.js';
import { PROGRAMACION_BANKS } from './programacionBanks.js';

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
      'programacion',
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
      'programacion',
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
      'programacion',
      {
        rapido: 'Repaso intenso de temas avanzados.',
        extendido: 'TDA, redes, sistemas distribuidos y arquitectura.',
        codigo: 'Snippets de algoritmos y JavaScript moderno.',
      }
    ),
  },
];

export const PROGRAMACION_INFO = `Cada nivel ofrece cuatro modalidades: rápido (10), clásico (20), extendido (30) y lectura práctica (10 fragmentos). El contenido se versiona en el repositorio del proyecto.`;

export { getStorageKey, getAllTestKeys };
