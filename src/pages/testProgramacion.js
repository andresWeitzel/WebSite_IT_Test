import { mountLayout } from '../layout/mountLayout.js';
import { ROUTES } from '../data/site.js';
import { initProgramacionPage } from '../js/testProgramacion/initProgramacionPage.js';

mountLayout({ activePath: ROUTES.testProgramacion });
initProgramacionPage();
