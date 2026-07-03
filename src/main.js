import { AREAS, COURSES } from './data/areas.js';
import { ROUTES, SITE, HELP_TEXT } from './data/site.js';
import { renderAreasGrid } from './components/areaCard.js';
import { renderCoursesSection } from './components/coursesSection.js';
import { renderFooter } from './components/footer.js';
import { renderHero } from './components/hero.js';
import { initModals, renderModal } from './components/modal.js';
import { initNavbar, renderNavbar } from './components/navbar.js';
import './styles/main.css';

const app = document.getElementById('app');

function renderAreaModals() {
  return AREAS.map((area) =>
    renderModal({
      id: area.modalId,
      title: area.infoTitle,
      body: `<p>${area.infoBody}</p><p><a class="text-link" href="/html/materialEstudio.html">Ir al material de estudio</a></p>`,
    })
  ).join('');
}

function renderApp() {
  const availableCount = AREAS.filter((area) => area.available).length;

  app.innerHTML = `
    ${renderNavbar({ activePath: ROUTES.home })}
    <main>
      ${renderHero()}
      ${renderAreasGrid(AREAS)}
      <section class="info-banner container" aria-label="Información">
        <div class="info-banner__card">
          <h2 class="info-banner__title">${SITE.tagline}</h2>
          <p>${SITE.description}</p>
        </div>
      </section>
      ${renderCoursesSection()}
    </main>
    ${renderFooter()}
    ${renderModal({ id: 'ayuda', title: 'Ayuda', body: `<p>${HELP_TEXT.replace(/\n/g, '</p><p>')}</p>` })}
    ${renderModal({
      id: 'contacto',
      title: 'Contacto',
      body: `<p><a class="text-link" href="mailto:${SITE.email}">${SITE.email}</a></p>`,
    })}
    ${renderModal({
      id: 'cursos-info',
      title: 'Acerca de los cursos',
      body: `<p>${COURSES.infoBody}</p><p><a class="text-link" href="${COURSES.youtubeUrl}" target="_blank" rel="noopener noreferrer">Ir al canal de YouTube</a></p>`,
    })}
    ${renderAreaModals()}
  `;

  const countEl = document.querySelector('[data-available-count]');
  if (countEl) countEl.textContent = String(availableCount);
}

renderApp();
initNavbar();
initModals();
