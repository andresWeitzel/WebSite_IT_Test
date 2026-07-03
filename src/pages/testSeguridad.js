import { mountLayout } from '../layout/mountLayout.js';
import { ROUTES } from '../data/site.js';
import { initTestAreaPage } from '../js/test/initTestAreaPage.js';
import {
  SEGURIDAD_LEVELS,
  SEGURIDAD_INFO,
  getStorageKey,
  getAllTestKeys,
} from '../js/testSeguridad/levels.js';

mountLayout({ activePath: ROUTES.testSeguridad });
initTestAreaPage({
  areaId: 'seguridad',
  pageTitle: 'Test de Seguridad Informática',
  pageDescription:
    'Amenazas, controles, vulnerabilidades y respuesta a incidentes. Cuatro modalidades por nivel.',
  levels: SEGURIDAD_LEVELS,
  infoText: SEGURIDAD_INFO,
  getStorageKey,
  getAllTestKeys: () => getAllTestKeys(SEGURIDAD_LEVELS),
  attemptsLabel: 'en seguridad informática',
});
