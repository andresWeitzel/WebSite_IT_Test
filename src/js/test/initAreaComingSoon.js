import { ROUTES } from '../../data/site.js';
import { renderModal } from '../../components/modal.js';
import { escapeHtml } from '../../utils/dom.js';

export function initAreaComingSoon({ areaId, title, description, infoText, gradient }) {
  const app = document.getElementById('area-app');
  const modalsRoot = document.getElementById('site-modals');
  if (!app) return;

  app.innerHTML = `
    <section class="area-page">
      <div class="container area-page__inner">
        <header class="area-page__header">
          <a class="area-page__back" href="/">← Volver al inicio</a>
          <p class="area-page__eyebrow">Área IT</p>
          <h1 class="area-page__title">Test de ${escapeHtml(title)}</h1>
          <p class="area-page__description">${escapeHtml(description)}</p>
        </header>

        <div class="coming-soon-card glass-panel" style="--area-gradient: ${gradient}">
          <span class="coming-soon-card__badge">Próximamente</span>
          <h2>Estamos preparando los tests de esta área</h2>
          <p>
            La estructura ya está lista. Mientras tanto podés repasar con el material de estudio
            o explorar los tests de programación.
          </p>
          <div class="coming-soon-card__actions">
            <a class="btn btn--primary" href="${ROUTES.testProgramacion}">Ir a Programación</a>
            <a class="btn btn--outline" href="${ROUTES.material}">Material de estudio</a>
            <button type="button" class="btn btn--outline" data-modal-open="${areaId}-info">Más info</button>
          </div>
        </div>
      </div>
    </section>
  `;

  if (modalsRoot) {
    modalsRoot.insertAdjacentHTML(
      'beforeend',
      renderModal({
        id: `${areaId}-info`,
        title: `Test de ${title}`,
        body: `<p>${escapeHtml(infoText)}</p><p><a class="text-link" href="${ROUTES.material}">Ir al material de estudio</a></p>`,
      })
    );
  }
}
