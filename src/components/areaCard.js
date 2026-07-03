import { escapeHtml } from '../utils/dom.js';

export function renderAreaCard(area) {
  const badge = area.available
    ? '<span class="area-card__badge area-card__badge--available">Disponible</span>'
    : '<span class="area-card__badge area-card__badge--soon">Próximamente</span>';

  const primaryAction = area.available
    ? `<a class="btn btn--primary" href="${area.href}">Comenzar</a>`
    : `<a class="btn btn--outline" href="${area.href}">Ver área</a>`;

  return `
    <article class="area-card" data-area="${area.id}">
      <div class="area-card__media" style="--area-gradient: ${area.gradient}">
        <img
          class="area-card__image"
          src="${area.image}"
          alt=""
          loading="lazy"
          onerror="this.hidden=true"
        >
        ${badge}
      </div>
      <div class="area-card__body">
        <h3 class="area-card__title">${escapeHtml(area.title)}</h3>
        <p class="area-card__text">${escapeHtml(area.description)}</p>
        <div class="area-card__actions">
          ${primaryAction}
          <button type="button" class="btn btn--outline" data-modal-open="${area.modalId}">Más info</button>
        </div>
      </div>
    </article>
  `;
}

export function renderAreasGrid(areas) {
  return `
    <section class="areas-section" aria-labelledby="areas-title">
      <div class="container">
        <div class="section-heading">
          <h2 id="areas-title" class="section-heading__title">Elegí un área</h2>
          <p class="section-heading__subtitle">Cuatro especialidades IT con tests por nivel de dificultad.</p>
        </div>
        <div class="areas-grid">
          ${areas.map(renderAreaCard).join('')}
        </div>
      </div>
    </section>
  `;
}
