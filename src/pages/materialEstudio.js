import { mountLayout } from '../layout/mountLayout.js';
import { ROUTES } from '../data/site.js';
import { initMaterialEstudioPage, finalizeMaterialTopics } from '../js/material/initMaterialEstudioPage.js';
import { initLegacyBootstrapContent } from './bootstrapPage.js';
import { markPageReady } from '../utils/pageReady.js';

async function bootMaterialPage() {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  mountLayout({ activePath: ROUTES.material, excludeNav: ['ayuda'] });
  initMaterialEstudioPage();
  await initLegacyBootstrapContent();
  finalizeMaterialTopics();
  markPageReady();
  window.scrollTo(0, 0);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    bootMaterialPage();
  });
} else {
  bootMaterialPage();
}
