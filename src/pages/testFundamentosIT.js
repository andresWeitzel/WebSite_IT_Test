import { mountLayout } from '../layout/mountLayout.js';
import { ROUTES } from '../data/site.js';
import { initTestAreaPage } from '../js/test/initTestAreaPage.js';
import {
  FUNDAMENTOS_IT_LEVELS,
  FUNDAMENTOS_IT_INFO,
  getStorageKey,
  getAllTestKeys,
} from '../js/testFundamentosIT/levels.js';

mountLayout({ activePath: ROUTES.testFundamentosIT });
initTestAreaPage({
  areaId: 'fundamentos-it',
  pageTitle: 'Test de Fundamentos IT',
  pageDescription:
    'Hardware, Windows, soporte técnico, Active Directory e ITIL. Practicá por nivel y modalidad.',
  levels: FUNDAMENTOS_IT_LEVELS,
  infoText: FUNDAMENTOS_IT_INFO,
  getStorageKey,
  getAllTestKeys: () => getAllTestKeys(FUNDAMENTOS_IT_LEVELS),
  attemptsLabel: 'en fundamentos IT',
});
