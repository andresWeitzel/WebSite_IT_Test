import { ROUTES } from '../../data/site.js';
import { ROADMAP } from '../../data/areas.js';
import { renderRoadmapSection } from '../../components/roadmapSection.js';

export function renderCalendarEventModal() {
  return `
    <div class="modal" id="calendar-event-modal" hidden>
      <div class="modal__backdrop" aria-hidden="true"></div>
      <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="calendar-event-title">
        <div class="modal__header">
          <h2 class="modal__title" id="calendar-event-title"></h2>
          <button type="button" class="modal__close" data-modal-close aria-label="Cerrar">&times;</button>
        </div>
        <div class="modal__body calendar-event-modal__body">
          <p class="calendar-event-modal__meta">
            <span class="calendar-event-modal__category"></span>
            <span class="calendar-event-modal__date"></span>
          </p>
          <p class="calendar-event-modal__description"></p>
          <a class="calendar-event-modal__link text-link" href="#" target="_blank" rel="noopener noreferrer" hidden>
            Ver enlace relacionado →
          </a>
        </div>
        <div class="modal__footer">
          <button type="button" class="btn btn--ghost" data-modal-close>Cerrar</button>
        </div>
      </div>
    </div>
  `;
}

export function initNovedadesPage() {
  const main = document.querySelector('.page-content');
  if (!main) return;

  const calendar = document.getElementById('calendar');

  main.innerHTML = `
    <section class="area-page novedades-page">
      <div class="container area-page__inner">
        <header class="area-page__header">
          <a class="area-page__back" href="/">← Volver al inicio</a>
          <p class="area-page__eyebrow">Actualizaciones</p>
          <h1 class="area-page__title">Novedades y futuro</h1>
          <p class="area-page__description">
            Calendario de hitos del proyecto y hoja de ruta de lo que estamos construyendo en Test IT.
          </p>
        </header>

        <div class="novedades-page__grid">
          <div class="glass-panel novedades-page__calendar-wrap" id="calendar-mount">
            <div class="novedades-page__block-header">
              <h2 class="novedades-page__block-title">Calendario de hitos</h2>
              <p class="novedades-page__block-hint">Hacé clic en un evento para ver detalles</p>
            </div>
            <div class="calendar-legend" id="calendar-legend" aria-label="Leyenda de categorías"></div>
          </div>
          <div class="glass-panel novedades-page__roadmap-wrap" id="roadmap-mount"></div>
        </div>

        <div class="novedades-page__links">
          <a class="btn btn--outline" href="${ROUTES.home}">Ver áreas de test</a>
          <a class="btn btn--outline" href="${ROUTES.material}">Material de estudio</a>
        </div>
      </div>
    </section>
  `;

  const mount = document.getElementById('calendar-mount');
  if (calendar && mount) {
    mount.appendChild(calendar);
  }

  const roadmapMount = document.getElementById('roadmap-mount');
  if (roadmapMount) {
    roadmapMount.innerHTML = renderRoadmapSection(ROADMAP, { embedded: true });
  }
}
