import { mountLayout } from '../layout/mountLayout.js';
import { ROUTES } from '../data/site.js';
import { initMaterialEstudioPage, finalizeMaterialTopics } from '../js/material/initMaterialEstudioPage.js';
import { initLegacyBootstrapContent } from './bootstrapPage.js';
import { markPageReady } from '../utils/pageReady.js';

async function bootMaterialPage() {
  mountLayout({ activePath: ROUTES.material });
  initMaterialEstudioPage();
  await initLegacyBootstrapContent();
  finalizeMaterialTopics();
  markPageReady();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    bootMaterialPage();
  });
} else {
  bootMaterialPage();
}
