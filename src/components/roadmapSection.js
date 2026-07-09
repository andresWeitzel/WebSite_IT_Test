import { escapeHtml } from '../utils/dom.js';

const STATUS_LABELS = {
  done: 'Completado',
  current: 'Empezá aquí',
  planned: 'Siguiente',
  area: 'Disponible',
};

function renderStepStatus(phase) {
  if (phase.status === 'step') return '';
  const label = STATUS_LABELS[phase.status] ?? phase.status;
  return `<span class="roadmap-step__status">${escapeHtml(label)}</span>`;
}

function renderModalities(modalities) {
  if (!modalities?.length) return '';

  const items = modalities
    .map(
      (modality) => `
      <li class="practice-modalities__item">
        <span class="practice-modalities__name">${escapeHtml(modality.name)}</span>
        <span class="practice-modalities__hint">${escapeHtml(modality.hint)}</span>
      </li>
    `
    )
    .join('');

  return `
    <div class="practice-modalities glass-panel">
      <h3 class="practice-modalities__title">Las 4 modalidades por nivel</h3>
      <ul class="practice-modalities__list">${items}</ul>
    </div>
  `;
}

function renderProfiles(profiles) {
  if (!profiles?.length) return '';

  const cards = profiles
    .map(
      (profile) => `
      <article class="practice-profile glass-panel">
        <header class="practice-profile__header">
          <span class="practice-profile__icon" aria-hidden="true">${profile.icon ?? '✦'}</span>
          <div>
            <h3 class="practice-profile__title">${escapeHtml(profile.title)}</h3>
            <p class="practice-profile__hint">${escapeHtml(profile.hint)}</p>
          </div>
        </header>
        <p class="practice-profile__path">
          ${profile.steps.map((step) => `<span>${escapeHtml(step)}</span>`).join('<span class="practice-profile__arrow" aria-hidden="true">→</span>')}
        </p>
        ${
          profile.href
            ? `<a class="practice-profile__cta" href="${profile.href}">Empezar por aquí</a>`
            : ''
        }
      </article>
    `
    )
    .join('');

  return `
    <div class="practice-profiles">
      <h3 class="practice-profiles__title">¿Por dónde empezar según tu perfil?</h3>
      <div class="practice-profiles__grid">${cards}</div>
    </div>
  `;
}

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
            <span class="roadmap-step__phase">
              ${phase.icon ? `<span class="roadmap-step__icon" aria-hidden="true">${phase.icon}</span>` : ''}
              ${escapeHtml(phase.label)}
            </span>
            ${renderStepStatus(phase)}
          </div>
          <h3 class="roadmap-step__title">${escapeHtml(phase.title)}</h3>
          <p class="roadmap-step__text">${escapeHtml(phase.text)}</p>
          ${
            phase.href
              ? `<a class="roadmap-step__cta" href="${phase.href}">${escapeHtml(phase.ctaLabel ?? 'Ir al test')}</a>`
              : ''
          }
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

  const extras = `
    ${renderModalities(roadmap.modalities)}
    ${renderProfiles(roadmap.profiles)}
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
        ${extras}
      </div>
    </section>
  `;
}
