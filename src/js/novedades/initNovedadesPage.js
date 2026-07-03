import { ROUTES } from '../../data/site.js';

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
          <h1 class="area-page__title">Calendario de novedades</h1>
          <p class="area-page__description">
            Hitos del proyecto, pausas y retomadas de contenido. Explorá las fechas en el calendario.
          </p>
        </header>
        <div class="glass-panel novedades-page__calendar-wrap" id="calendar-mount"></div>
      </div>
    </section>
  `;

  const mount = document.getElementById('calendar-mount');
  if (calendar && mount) {
    mount.appendChild(calendar);
  }
}
