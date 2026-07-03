import { ROUTES } from '../../data/site.js';
import { openModal, closeModal, renderModal } from '../../components/modal.js';
import { escapeHtml } from '../../utils/dom.js';
import { createTestRunner, formatAttemptLabel, formatBestLabel } from '../test/testRunner.js';
import {
  getAttempts,
  getBestScore,
  getLastResult,
  getTotalAttempts,
  recordAttempt,
} from '../test/testStorage.js';
import {
  PROGRAMACION_INFO,
  PROGRAMACION_LEVELS,
  getStorageKey,
  getAllTestKeys,
} from './levels.js';

const AREA_ID = 'programacion';

function renderVariantTile(level, variant) {
  const storageKey = getStorageKey(level.id, variant.id);
  const attempts = getAttempts(AREA_ID, storageKey);
  const best = getBestScore(AREA_ID, storageKey);
  const last = getLastResult(AREA_ID, storageKey);

  return `
    <article class="variant-tile">
      <div class="variant-tile__head">
        <span class="variant-tile__icon" aria-hidden="true">${variant.icon}</span>
        <div>
          <h4 class="variant-tile__title">${escapeHtml(variant.title)}</h4>
          <span class="variant-tile__badge">${escapeHtml(variant.badge)}</span>
        </div>
      </div>
      <p class="variant-tile__text">${escapeHtml(variant.description)}</p>
      <ul class="variant-tile__meta">
        <li>${formatAttemptLabel(attempts)}</li>
        <li>${formatBestLabel(best, last)}</li>
      </ul>
      <button
        type="button"
        class="btn btn--primary variant-tile__cta"
        data-start-test="${level.id}"
        data-variant="${variant.id}"
      >
        Comenzar
      </button>
    </article>
  `;
}

function renderLevelCard(level) {
  const totalAttempts = level.variants.reduce(
    (sum, variant) => sum + getAttempts(AREA_ID, getStorageKey(level.id, variant.id)),
    0
  );
  const bestScores = level.variants.map((variant) =>
    getBestScore(AREA_ID, getStorageKey(level.id, variant.id))
  );
  const bestOverall = Math.max(0, ...bestScores);

  return `
    <article class="level-card level-card--variants">
      <div class="level-card__head">
        <span class="level-card__badge">${escapeHtml(level.badge)}</span>
        <h3 class="level-card__title">${escapeHtml(level.title)}</h3>
      </div>
      <p class="level-card__text">${escapeHtml(level.description)}</p>
      <ul class="level-card__meta">
        <li>${formatAttemptLabel(totalAttempts)}</li>
        <li>${bestOverall > 0 ? `Mejor puntaje: ${bestOverall}%` : 'Probá distintas modalidades'}</li>
      </ul>
      <div class="variant-grid">
        ${level.variants.map((variant) => renderVariantTile(level, variant)).join('')}
      </div>
    </article>
  `;
}

function renderTopicsPanel(levels) {
  const tabs = levels
    .map(
      (level, index) => `
      <button
        type="button"
        class="topics-panel__tab${index === 0 ? ' topics-panel__tab--active' : ''}"
        data-topic-tab="${level.id}"
      >
        ${escapeHtml(level.title)}
      </button>
    `
    )
    .join('');

  const panels = levels
    .map(
      (level, index) => `
      <div class="topics-panel__content${index === 0 ? ' is-active' : ''}" data-topic-panel="${level.id}">
        <ul class="topics-list">
          ${level.topics
            .map(
              (topic) => `
            <li>
              <strong>${escapeHtml(topic.title)}</strong>
              <span>${escapeHtml(topic.text)}</span>
            </li>
          `
            )
            .join('')}
        </ul>
      </div>
    `
    )
    .join('');

  return `
    <section class="topics-panel glass-panel" aria-labelledby="topics-title">
      <h2 id="topics-title" class="topics-panel__title">Temas por nivel</h2>
      <div class="topics-panel__tabs" role="tablist">${tabs}</div>
      <div class="topics-panel__panels">${panels}</div>
      <div class="topics-panel__links">
        <a class="btn btn--outline" href="${ROUTES.material}">Material de estudio</a>
        <a class="btn btn--outline" href="https://www.youtube.com/channel/UCuSVXmBcMURyTvbmbcgZalQ/featured" target="_blank" rel="noopener noreferrer">Canal del autor</a>
      </div>
    </section>
  `;
}

function bindTopicsTabs(root) {
  const tabs = root.querySelectorAll('[data-topic-tab]');
  const panels = root.querySelectorAll('[data-topic-panel]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.topicTab;
      tabs.forEach((item) => item.classList.toggle('topics-panel__tab--active', item === tab));
      panels.forEach((panel) =>
        panel.classList.toggle('is-active', panel.dataset.topicPanel === id)
      );
    });
  });
}

function refreshLevelStats(root) {
  PROGRAMACION_LEVELS.forEach((level) => {
    const levelCard = [...root.querySelectorAll('.level-card')].find(
      (el) => el.querySelector('.level-card__title')?.textContent === level.title
    );
    if (!levelCard) return;

    const totalAttempts = level.variants.reduce(
      (sum, variant) => sum + getAttempts(AREA_ID, getStorageKey(level.id, variant.id)),
      0
    );
    const bestOverall = Math.max(
      0,
      ...level.variants.map((variant) => getBestScore(AREA_ID, getStorageKey(level.id, variant.id)))
    );

    const meta = levelCard.querySelector('.level-card__meta');
    if (meta) {
      meta.innerHTML = `
        <li>${formatAttemptLabel(totalAttempts)}</li>
        <li>${bestOverall > 0 ? `Mejor puntaje: ${bestOverall}%` : 'Probá distintas modalidades'}</li>
      `;
    }

    level.variants.forEach((variant) => {
      const tile = levelCard.querySelector(`[data-variant="${variant.id}"]`)?.closest('.variant-tile');
      const tileMeta = tile?.querySelector('.variant-tile__meta');
      if (!tileMeta) return;

      const storageKey = getStorageKey(level.id, variant.id);
      tileMeta.innerHTML = `
        <li>${formatAttemptLabel(getAttempts(AREA_ID, storageKey))}</li>
        <li>${formatBestLabel(getBestScore(AREA_ID, storageKey), getLastResult(AREA_ID, storageKey))}</li>
      `;
    });
  });

  const total = getTotalAttempts(AREA_ID, getAllTestKeys());
  const summary = root.querySelector('[data-total-attempts]');
  if (summary) {
    summary.textContent =
      total === 0
        ? 'Todavía no realizaste tests en esta área.'
        : `Llevás ${total} intento${total === 1 ? '' : 's'} en programación.`;
  }
}

function runnerKey(levelId, variantId = null) {
  return variantId ? `${levelId}:${variantId}` : levelId;
}

export function initProgramacionPage() {
  const app = document.getElementById('programacion-app');
  const modalsRoot = document.getElementById('site-modals');
  if (!app || !modalsRoot) return;

  app.innerHTML = `
    <section class="area-page">
      <div class="container area-page__inner">
        <header class="area-page__header">
          <a class="area-page__back" href="/">← Volver al inicio</a>
          <p class="area-page__eyebrow">Área IT</p>
          <h1 class="area-page__title">Test de Programación</h1>
          <p class="area-page__description">
            Elegí un nivel y una modalidad, respondé las preguntas y revisá tu puntaje al finalizar.
          </p>
          <p class="area-page__summary" data-total-attempts></p>
        </header>

        <div class="level-grid">
          ${PROGRAMACION_LEVELS.map(renderLevelCard).join('')}
        </div>

        ${renderTopicsPanel(PROGRAMACION_LEVELS)}

        <div class="area-page__info">
          <button type="button" class="btn btn--outline" data-modal-open="programacion-info">Más información</button>
        </div>
      </div>
    </section>
  `;

  modalsRoot.insertAdjacentHTML(
    'beforeend',
    renderModal({
      id: 'programacion-info',
      title: 'Niveles de test de programación',
      body: `<p>${PROGRAMACION_INFO}</p><p><a class="text-link" href="${ROUTES.material}">Ir al material de estudio</a></p>`,
    })
  );

  const runners = new Map();

  function registerTest(level, variant = null) {
    const storageKey = getStorageKey(level.id, variant?.id ?? null);
    const modalId = variant ? `test-${level.id}-${variant.id}` : `test-${level.id}`;
    const mountId = variant ? `test-mount-${level.id}-${variant.id}` : `test-mount-${level.id}`;
    const modalTitle = variant ? `${level.title} — ${variant.title}` : `Test ${level.title}`;
    const levelTitle = variant ? `Nivel ${level.title} · ${variant.title}` : `Nivel ${level.title}`;

    modalsRoot.insertAdjacentHTML(
      'beforeend',
      `
      <div class="modal modal--wide" id="${modalId}" hidden>
        <div class="modal__backdrop" aria-hidden="true"></div>
        <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="${modalId}-title">
          <div class="modal__header">
            <h2 class="modal__title" id="${modalId}-title">${escapeHtml(modalTitle)}</h2>
            <button type="button" class="modal__close" data-modal-close aria-label="Cerrar">&times;</button>
          </div>
          <div class="modal__body modal__body--flush">
            <div class="test-mount" id="${mountId}"></div>
          </div>
        </div>
      </div>
    `
    );

    const mountEl = document.getElementById(mountId);
    const resolveQuestions = variant.resolveQuestions;

    const runner = createTestRunner({
      areaId: AREA_ID,
      storageKey,
      levelId: level.id,
      levelTitle,
      resolveQuestions,
    });

    runners.set(runnerKey(level.id, variant?.id ?? null), { runner, modalId, mountEl, storageKey });
  }

  PROGRAMACION_LEVELS.forEach((level) => {
    level.variants.forEach((variant) => registerTest(level, variant));
  });

  runners.forEach(({ runner, modalId, mountEl, storageKey }) => {
    mountEl?.addEventListener('test-close', () => {
      closeModal(document.getElementById(modalId));
    });

    mountEl?.addEventListener('test-retry', () => {
      const { useSetA } = recordAttempt(AREA_ID, storageKey);
      runner.render(mountEl, useSetA);
      refreshLevelStats(app);
    });

    mountEl?.addEventListener('test-finished', () => {
      refreshLevelStats(app);
    });
  });

  app.querySelectorAll('[data-start-test]').forEach((button) => {
    button.addEventListener('click', () => {
      const levelId = button.dataset.startTest;
      const variantId = button.dataset.variant || null;
      const entry = runners.get(runnerKey(levelId, variantId));
      if (!entry) return;

      const { runner, modalId, mountEl, storageKey } = entry;
      const { useSetA } = recordAttempt(AREA_ID, storageKey);
      runner.render(mountEl, useSetA);
      refreshLevelStats(app);
      openModal(modalId);
    });
  });

  bindTopicsTabs(app);
  refreshLevelStats(app);
}
