import { mountLayout } from '../layout/mountLayout.js';
import { ROUTES } from '../data/site.js';
import { initTestAreaPage } from '../js/test/initTestAreaPage.js';
import {
  PROGRAMACION_LEVELS,
  PROGRAMACION_INFO,
  getStorageKey,
  getAllTestKeys,
} from '../js/testProgramacion/levels.js';

mountLayout({ activePath: ROUTES.testProgramacion });
initTestAreaPage({
  areaId: 'programacion',
  pageTitle: 'Test de Programación',
  pageDescription: 'Elegí un nivel y una modalidad, respondé las preguntas y revisá tu puntaje al finalizar.',
  levels: PROGRAMACION_LEVELS,
  infoText: PROGRAMACION_INFO,
  infoModalId: 'programacion-info',
  getStorageKey,
  getAllTestKeys: () => getAllTestKeys(PROGRAMACION_LEVELS),
  attemptsLabel: 'en programación',
});
