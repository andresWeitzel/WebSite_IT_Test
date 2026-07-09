import { ROUTES } from '../../data/site.js';
import { openModal, closeModal, renderModal } from '../../components/modal.js';
import { renderTopicsAccordion } from '../../components/topicsAccordion.js';
import { escapeHtml } from '../../utils/dom.js';
import { createTestRunner, formatAttemptLabel, formatBestLabel } from './testRunner.js';
import { markPageReady } from '../../utils/pageReady.js';
import {
  getAttempts,
  getBestScore,
  getLastResult,
  getTotalAttempts,
  recordAttempt,
} from './testStorage.js';

function renderVariantTile(level, variant, areaId, storageKeyFn) {
  const storageKey = storageKeyFn(level.id, variant.id);
  const attempts = getAttempts(areaId, storageKey);
  const best = getBestScore(areaId, storageKey);
  const last = getLastResult(areaId, storageKey);

  return `
    <article class="variant-tile variant-tile--${variant.id}">
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

function renderLevelCard(level, areaId, storageKeyFn) {
  const totalAttempts = level.variants.reduce(
    (sum, variant) => sum + getAttempts(areaId, storageKeyFn(level.id, variant.id)),
    0
  );
  const bestOverall = Math.max(
    0,
    ...level.variants.map((variant) => getBestScore(areaId, storageKeyFn(level.id, variant.id)))
  );

  return `
    <details class="level-card level-card--variants">
      <summary class="level-card__summary">
        <div class="level-card__summary-main">
          <div class="level-card__head">
            <span class="level-card__badge">${escapeHtml(level.badge)}</span>
            <h3 class="level-card__title">${escapeHtml(level.title)}</h3>
          </div>
          <ul class="level-card__meta">
            <li>${formatAttemptLabel(totalAttempts)}</li>
            <li>${bestOverall > 0 ? `Mejor puntaje: ${bestOverall}%` : 'Probá distintas modalidades'}</li>
          </ul>
        </div>
        <span class="level-card__chevron" aria-hidden="true"></span>
      </summary>
      <div class="level-card__body">
        <p class="level-card__text">${escapeHtml(level.description)}</p>
        <div class="variant-grid">
          ${level.variants.map((variant) => renderVariantTile(level, variant, areaId, storageKeyFn)).join('')}
        </div>
      </div>
    </details>
  `;
}

function runnerKey(levelId, variantId) {
  return `${levelId}:${variantId}`;
}

export function initTestAreaPage({
  areaId,
  pageTitle,
  pageDescription,
  eyebrow = 'Área IT',
  levels,
  infoText,
  infoModalId,
  getStorageKey,
  getAllTestKeys,
  attemptsLabel,
}) {
  const app = document.getElementById('area-app') ?? document.getElementById(`${areaId}-app`);
  const modalsRoot = document.getElementById('site-modals');
  if (!app || !modalsRoot) return;

  const modalId = infoModalId ?? `${areaId}-info`;

  app.innerHTML = `
    <section class="area-page area-page--${areaId}">
      <div class="container area-page__inner">
        <header class="area-page__header">
          <a class="area-page__back" href="/">← Volver al inicio</a>
          <p class="area-page__eyebrow">${escapeHtml(eyebrow)}</p>
          <h1 class="area-page__title">${escapeHtml(pageTitle)}</h1>
          <p class="area-page__description">${escapeHtml(pageDescription)}</p>
          <p class="area-page__summary" data-total-attempts></p>
        </header>

        <div class="level-grid">
          ${levels.map((level) => renderLevelCard(level, areaId, getStorageKey)).join('')}
        </div>

        ${renderTopicsAccordion(levels)}

        <div class="area-page__info">
          <button type="button" class="btn btn--outline" data-modal-open="${modalId}">Más información</button>
        </div>
      </div>
    </section>
  `;

  modalsRoot.insertAdjacentHTML(
    'beforeend',
    renderModal({
      id: modalId,
      title: pageTitle,
      body: `<p>${infoText}</p><p><a class="text-link" href="${ROUTES.material}">Ir al material de estudio</a></p>`,
    })
  );

  const runners = new Map();

  function registerTest(level, variant) {
    const storageKey = getStorageKey(level.id, variant.id);
    const testModalId = `test-${areaId}-${level.id}-${variant.id}`;
    const mountId = `test-mount-${areaId}-${level.id}-${variant.id}`;
    const modalTitle = `${level.title} — ${variant.title}`;
    const levelTitle = `Nivel ${level.title} · ${variant.title}`;

    modalsRoot.insertAdjacentHTML(
      'beforeend',
      `
      <div class="modal modal--wide" id="${testModalId}" hidden>
        <div class="modal__backdrop" aria-hidden="true"></div>
        <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="${testModalId}-title">
          <div class="modal__header">
            <h2 class="modal__title" id="${testModalId}-title">${escapeHtml(modalTitle)}</h2>
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
    const runner = createTestRunner({
      areaId,
      storageKey,
      levelId: level.id,
      levelTitle,
      resolveQuestions: variant.resolveQuestions,
    });

    runners.set(runnerKey(level.id, variant.id), { runner, modalId: testModalId, mountEl, storageKey });
  }

  levels.forEach((level) => {
    level.variants.forEach((variant) => registerTest(level, variant));
  });

  function refreshLevelStats() {
    levels.forEach((level) => {
      const levelCard = [...app.querySelectorAll('.level-card--variants')].find(
        (el) => el.querySelector('.level-card__title')?.textContent === level.title
      );
      if (!levelCard) return;

      const totalAttempts = level.variants.reduce(
        (sum, variant) => sum + getAttempts(areaId, getStorageKey(level.id, variant.id)),
        0
      );
      const bestOverall = Math.max(
        0,
        ...level.variants.map((variant) => getBestScore(areaId, getStorageKey(level.id, variant.id)))
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
          <li>${formatAttemptLabel(getAttempts(areaId, storageKey))}</li>
          <li>${formatBestLabel(getBestScore(areaId, storageKey), getLastResult(areaId, storageKey))}</li>
        `;
      });
    });

    const total = getTotalAttempts(areaId, getAllTestKeys());
    const summary = app.querySelector('[data-total-attempts]');
    if (summary) {
      summary.textContent =
        total === 0
          ? `Todavía no realizaste tests ${attemptsLabel}.`
          : `Llevás ${total} intento${total === 1 ? '' : 's'} ${attemptsLabel}.`;
    }
  }

  runners.forEach(({ runner, modalId: testModalId, mountEl, storageKey }) => {
    mountEl?.addEventListener('test-close', () => {
      closeModal(document.getElementById(testModalId));
    });

    mountEl?.addEventListener('test-retry', () => {
      const { useSetA } = recordAttempt(areaId, storageKey);
      runner.render(mountEl, useSetA);
      refreshLevelStats();
    });

    mountEl?.addEventListener('test-finished', () => {
      refreshLevelStats();
    });
  });

  app.querySelectorAll('[data-start-test]').forEach((button) => {
    button.addEventListener('click', () => {
      const levelId = button.dataset.startTest;
      const variantId = button.dataset.variant;
      const entry = runners.get(runnerKey(levelId, variantId));
      if (!entry) return;

      const { runner, modalId: testModalId, mountEl, storageKey } = entry;
      const { useSetA } = recordAttempt(areaId, storageKey);
      runner.render(mountEl, useSetA);
      refreshLevelStats();
      openModal(testModalId);
    });
  });

  refreshLevelStats();
  initCollapsibleLevelCards(app);
  markPageReady();
}

function initCollapsibleLevelCards(root) {
  const cards = root.querySelectorAll('.level-card--variants');
  if (!cards.length) return;

  const mobileQuery = window.matchMedia('(max-width: 768px)');

  function syncOpenState() {
    cards.forEach((card) => {
      if (mobileQuery.matches) {
        card.removeAttribute('open');
      } else {
        card.setAttribute('open', '');
      }
    });
  }

  syncOpenState();
  mobileQuery.addEventListener('change', syncOpenState);

  cards.forEach((card) => {
    card.addEventListener('toggle', () => {
      if (!mobileQuery.matches || !card.open) return;
      cards.forEach((other) => {
        if (other !== card) other.removeAttribute('open');
      });
    });
  });
}
