import { ROUTES } from '../data/site.js';
import { escapeHtml } from '../utils/dom.js';

const LEVEL_ORDER = { basico: 1, medio: 2, avanzado: 3 };

function getLevelOrder(level) {
  return LEVEL_ORDER[level.id] ?? 0;
}

function renderTopicCard(topic, index) {
  return `
    <li class="topics-accordion__topic">
      <span class="topics-accordion__topic-index" aria-hidden="true">${index + 1}</span>
      <div class="topics-accordion__topic-content">
        <strong class="topics-accordion__topic-title">${escapeHtml(topic.title)}</strong>
        <p class="topics-accordion__topic-text">${escapeHtml(topic.text)}</p>
      </div>
    </li>
  `;
}

export function renderTopicsAccordion(levels, options = {}) {
  const { title = 'Temas por nivel', showLinks = true } = options;
  const topicCount = levels.reduce((sum, level) => sum + level.topics.length, 0);

  const items = levels
    .map(
      (level) => `
      <details class="topics-accordion__item topics-accordion__item--${escapeHtml(level.id)}">
        <summary class="topics-accordion__summary">
          <span class="topics-accordion__summary-main">
            <span class="topics-accordion__level-mark" aria-hidden="true">${getLevelOrder(level)}</span>
            <span class="topics-accordion__level-group">
              <span class="topics-accordion__level">${escapeHtml(level.title)}</span>
              <span class="topics-accordion__count">${level.topics.length} temas</span>
            </span>
          </span>
          <span class="topics-accordion__summary-meta">
            <span class="topics-accordion__badge">${escapeHtml(level.badge)}</span>
            <span class="topics-accordion__chevron" aria-hidden="true"></span>
          </span>
        </summary>
        <div class="topics-accordion__body">
          <p class="topics-accordion__intro">${escapeHtml(level.description)}</p>
          <ul class="topics-accordion__list">
            ${level.topics.map((topic, index) => renderTopicCard(topic, index)).join('')}
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
      <header class="topics-accordion__header">
        <h2 id="topics-accordion-title" class="topics-accordion__title">${escapeHtml(title)}</h2>
        <p class="topics-accordion__subtitle">${topicCount} bloques de contenido repartidos en ${levels.length} niveles</p>
      </header>
      <div class="topics-accordion__items">${items}</div>
      ${links}
    </section>
  `;
}

export function initTopicsAccordion(root = document) {
  const items = root.querySelectorAll('.topics-accordion__item');
  if (!items.length) return;

  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      items.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}
