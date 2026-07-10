import { AREAS, COURSES, PRACTICE_PATH } from './data/areas.js';
import { ROUTES, SITE } from './data/site.js';
import { buildFaqJsonLd, buildHowToJsonLd } from './data/seo.js';
import { renderAreasGrid } from './components/areaCard.js';
import { renderCoursesSection } from './components/coursesSection.js';
import { renderFaqSection } from './components/faqSection.js';
import { renderFooter } from './components/footer.js';
import { renderHero } from './components/hero.js';
import { renderHelpModal } from './components/helpModal.js';
import { renderRoadmapSection } from './components/roadmapSection.js';
import { initModals, renderModal } from './components/modal.js';
import { initNavbar, renderNavbar } from './components/navbar.js';
import { mountPageTabs } from './components/pageTabs.js';
import { injectJsonLd, renderSkipLink } from './utils/seo.js';
import { markPageReady } from './utils/pageReady.js';
import './styles/main.css';

const app = document.getElementById('app');

function renderAreaModals() {
  return AREAS.map((area) =>
    renderModal({
      id: area.modalId,
      title: area.infoTitle,
      body: `<p>${area.infoBody}</p><p><a class="text-link" href="${area.href}">Ir al test</a> · <a class="text-link" href="${ROUTES.material}">Material de estudio</a></p>`,
    })
  ).join('');
}

function renderApp() {
  app.innerHTML = `
    ${renderSkipLink('main-content')}
    <div id="site-chrome" class="site-chrome">
      ${renderNavbar({ activePath: ROUTES.home })}
    </div>
    <main id="main-content">
      ${renderHero({ areas: AREAS })}
      ${renderAreasGrid(AREAS)}
      ${renderRoadmapSection(PRACTICE_PATH)}
      <section class="info-banner container" aria-label="Información">
        <div class="info-banner__card">
          <h2 class="info-banner__title">${SITE.tagline}</h2>
          <p>${SITE.description}</p>
        </div>
      </section>
      ${renderCoursesSection()}
      ${renderFaqSection()}
    </main>
    ${renderFooter()}
    ${renderHelpModal()}
    ${renderModal({
      id: 'contacto',
      title: 'Contacto',
      body: `<p><a class="text-link" href="mailto:${SITE.email}">${SITE.email}</a></p>`,
    })}
    ${renderAreaModals()}
  `;
}

renderApp();
injectJsonLd(buildFaqJsonLd(), 'seo-faq-jsonld');
injectJsonLd(buildHowToJsonLd(), 'seo-howto-jsonld');
mountPageTabs({ activePath: ROUTES.home, container: document.getElementById('site-chrome') });
initNavbar();
initModals();
markPageReady();
