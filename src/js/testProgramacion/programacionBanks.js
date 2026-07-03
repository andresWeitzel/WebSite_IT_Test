import { normalizeQuestions, normalizeBankFile } from '../../data/questions/normalize.js';
import basicoCodigoBank from '../../data/questions/programacion/basico.codigo.json';
import medioCodigoBank from '../../data/questions/programacion/medio.codigo.json';
import avanzadoCodigoBank from '../../data/questions/programacion/avanzado.codigo.json';
import {
  preguntasTestBasicoProgramacion01,
  preguntasTestBasicoProgramacion02,
  preguntasTestBasicoProgramacion03,
  preguntasTestBasicoProgramacion04,
  preguntasTestBasicoProgramacion05,
  preguntasTestBasicoProgramacion06,
} from './preguntasTestBasicoProgramacion.js';
import {
  preguntasTestMedioProgramacion01,
  preguntasTestMedioProgramacion02,
  preguntasTestMedioProgramacion03,
  preguntasTestMedioProgramacion04,
  preguntasTestMedioProgramacion05,
  preguntasTestMedioProgramacion06,
} from './preguntasTestMedioProgramacion.js';
import {
  preguntasTestAvanzadoProgramacion01,
  preguntasTestAvanzadoProgramacion02,
  preguntasTestAvanzadoProgramacion03,
  preguntasTestAvanzadoProgramacion04,
  preguntasTestAvanzadoProgramacion05,
  preguntasTestAvanzadoProgramacion06,
} from './preguntasTestAvanzadoProgramacion.js';

function asTheorySets(...rawSets) {
  return rawSets.map((set) => normalizeQuestions(set));
}

/**
 * Registro central de bancos de preguntas de programación.
 * Teoría: módulos JS legacy (migrables a JSON por set).
 * Código: JSON en src/data/questions/programacion/*.codigo.json
 */
export const PROGRAMACION_BANKS = {
  basico: {
    teoria: asTheorySets(
      preguntasTestBasicoProgramacion01,
      preguntasTestBasicoProgramacion02,
      preguntasTestBasicoProgramacion03,
      preguntasTestBasicoProgramacion04,
      preguntasTestBasicoProgramacion05,
      preguntasTestBasicoProgramacion06
    ),
    codigo: normalizeBankFile(basicoCodigoBank),
  },
  medio: {
    teoria: asTheorySets(
      preguntasTestMedioProgramacion01,
      preguntasTestMedioProgramacion02,
      preguntasTestMedioProgramacion03,
      preguntasTestMedioProgramacion04,
      preguntasTestMedioProgramacion05,
      preguntasTestMedioProgramacion06
    ),
    codigo: normalizeBankFile(medioCodigoBank),
  },
  avanzado: {
    teoria: asTheorySets(
      preguntasTestAvanzadoProgramacion01,
      preguntasTestAvanzadoProgramacion02,
      preguntasTestAvanzadoProgramacion03,
      preguntasTestAvanzadoProgramacion04,
      preguntasTestAvanzadoProgramacion05,
      preguntasTestAvanzadoProgramacion06
    ),
    codigo: normalizeBankFile(avanzadoCodigoBank),
  },
};
