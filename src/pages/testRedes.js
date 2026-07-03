import { mountLayout } from '../layout/mountLayout.js';
import { ROUTES } from '../data/site.js';
import { initTestAreaPage } from '../js/test/initTestAreaPage.js';
import {
  REDES_INFRA_LEVELS,
  REDES_INFRA_INFO,
  getStorageKey,
  getAllTestKeys,
} from '../js/testRedesInfra/levels.js';

mountLayout({ activePath: ROUTES.testRedesInfra });
initTestAreaPage({
  areaId: 'redes-infra',
  pageTitle: 'Test de Redes e Infraestructura',
  pageDescription:
    'Protocolos, DevOps, contenedores y cloud. Elegí nivel y modalidad para practicar.',
  levels: REDES_INFRA_LEVELS,
  infoText: REDES_INFRA_INFO,
  getStorageKey,
  getAllTestKeys: () => getAllTestKeys(REDES_INFRA_LEVELS),
  attemptsLabel: 'en redes e infraestructura',
});
