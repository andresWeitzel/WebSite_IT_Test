import { ROUTES } from '../data/site.js';
import { escapeHtml } from '../utils/dom.js';

export function renderTopicsAccordion(levels, options = {}) {
  const { title = 'Temas por nivel', showLinks = true } = options;

  const items = levels
    .map(
      (level, index) => `
      <details class="topics-accordion__item"${index === 0 ? ' open' : ''}>
        <summary class="topics-accordion__summary">
          <span class="topics-accordion__level">${escapeHtml(level.title)}</span>
          <span class="topics-accordion__badge">${escapeHtml(level.badge)}</span>
        </summary>
        <div class="topics-accordion__body">
          <p class="topics-accordion__intro">${escapeHtml(level.description)}</p>
          <ul class="topics-accordion__list">
            ${level.topics
              .map(
                (topic) => `
              <li class="topics-accordion__topic">
                <span class="topics-accordion__topic-icon" aria-hidden="true">▸</span>
                <div>
                  <strong>${escapeHtml(topic.title)}</strong>
                  <span>${escapeHtml(topic.text)}</span>
                </div>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
      </details>
    `
    )
    .join('');

  const links = showLinks
    ? `
      <div class="topics-accordion__links">
        <a class="btn btn--outline" href="${ROUTES.material}">Material de estudio</a>
        <a class="btn btn--outline" href="https://www.youtube.com/channel/UCuSVXmBcMURyTvbmbcgZalQ/featured" target="_blank" rel="noopener noreferrer">Canal del autor</a>
      </div>
    `
    : '';

  return `
    <section class="topics-accordion glass-panel" aria-labelledby="topics-accordion-title">
      <h2 id="topics-accordion-title" class="topics-accordion__title">${escapeHtml(title)}</h2>
      <div class="topics-accordion__items">${items}</div>
      ${links}
    </section>
  `;
}
