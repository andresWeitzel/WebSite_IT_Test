import { ROUTES } from '../../data/site.js';
import { ROADMAP } from '../../data/areas.js';
import { renderRoadmapSection } from '../../components/roadmapSection.js';

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
            <h2 class="novedades-page__block-title">Calendario</h2>
          </div>
          <div class="novedades-page__roadmap" id="roadmap-mount"></div>
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
    roadmapMount.innerHTML = renderRoadmapSection(ROADMAP);
    roadmapMount.querySelector('.roadmap-section')?.classList.add('roadmap-section--embedded');
  }
}
