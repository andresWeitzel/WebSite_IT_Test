import { escapeHtml } from '../utils/dom.js';

const STATUS_LABELS = {
  done: 'Completado',
  current: 'En progreso',
  planned: 'Planificado',
};

export function renderRoadmapSection(roadmap, { embedded = false } = {}) {
  const steps = roadmap.phases
    .map(
      (phase, index) => `
      <li class="roadmap-step roadmap-step--${phase.status}">
        <div class="roadmap-step__track" aria-hidden="true">
          <span class="roadmap-step__dot"></span>
          ${index < roadmap.phases.length - 1 ? '<span class="roadmap-step__line"></span>' : ''}
        </div>
        <article class="roadmap-step__card glass-panel">
          <div class="roadmap-step__meta">
            <span class="roadmap-step__phase">${escapeHtml(phase.label)}</span>
            <span class="roadmap-step__status">${STATUS_LABELS[phase.status] ?? phase.status}</span>
          </div>
          <h3 class="roadmap-step__title">${escapeHtml(phase.title)}</h3>
          <p class="roadmap-step__text">${escapeHtml(phase.text)}</p>
        </article>
      </li>
    `
    )
    .join('');

  const heading = `
    <div class="section-heading">
      <h2 id="roadmap-title" class="section-heading__title">${escapeHtml(roadmap.title)}</h2>
      <p class="section-heading__subtitle">${escapeHtml(roadmap.subtitle)}</p>
    </div>
  `;

  const embeddedClass = embedded ? ' roadmap-section--embedded' : '';

  if (embedded) {
    return `
      <section class="roadmap-section${embeddedClass}" aria-labelledby="roadmap-title">
        ${heading}
        <ol class="roadmap-timeline">${steps}</ol>
      </section>
    `;
  }

  return `
    <section class="roadmap-section${embeddedClass}" aria-labelledby="roadmap-title">
      <div class="container">
        ${heading}
        <ol class="roadmap-timeline">${steps}</ol>
      </div>
    </section>
  `;
}
