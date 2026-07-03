import { mountLayout } from '../layout/mountLayout.js';
import { ROUTES } from '../data/site.js';
import { initMaterialEstudioPage } from '../js/material/initMaterialEstudioPage.js';
import { initLegacyBootstrapContent } from './bootstrapPage.js';

mountLayout({ activePath: ROUTES.material });
initMaterialEstudioPage();
await initLegacyBootstrapContent();
