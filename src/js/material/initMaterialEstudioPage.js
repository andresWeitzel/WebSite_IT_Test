import { ROUTES } from '../../data/site.js';
import { AREAS } from '../../data/areas.js';
import { EXTRA_STUDY_TOPICS } from '../../data/studyMaterial.js';
import { renderStudyTopicsHtml } from '../../components/studyMaterialTopics.js';

const MATERIAL_SECTION_BY_AREA = {
  programacion: 'seccionProgramacion',
  'redes-infra': 'seccionRedes',
  seguridad: 'seccionSegInformatica',
  'fundamentos-it': 'seccionFundamentosIT',
};

function getMaterialAreaNav() {
  return AREAS.map((area) => ({
    id: area.id,
    label: area.title,
    icon: area.icon,
    target: MATERIAL_SECTION_BY_AREA[area.id],
    testHref: area.href,
  }));
}

function findLegacyRoot(main) {
  return (
    document.getElementById('material-legacy-root') ??
    main.querySelector('#material-legacy-root') ??
    main.querySelector('.material-legacy') ??
    main.querySelector('.test')
  );
}

function renderMaterialShell(legacyMount) {
  const areaNav = getMaterialAreaNav();

  const section = document.createElement('section');
  section.className = 'area-page material-page';
  section.innerHTML = `
    <div class="container area-page__inner material-page__layout">
      <header class="area-page__header" id="material-page-top">
        <a class="area-page__back" href="/">← Volver al inicio</a>
        <p class="area-page__eyebrow">Recursos</p>
        <h1 class="area-page__title">Material de estudio</h1>
        <p class="area-page__description">
          Elegí un área en el índice y expandí un tema a la vez para repasar sin scroll infinito.
        </p>
      </header>

      <aside class="material-nav glass-panel" aria-label="Índice por área">
        <h2 class="material-nav__title">Áreas</h2>
        <nav class="material-nav__list material-nav__tabs" role="tablist">
          ${areaNav
            .map(
              (item, index) => `
            <div class="material-nav__tab-row">
              <button
                type="button"
                class="material-nav__tab"
                role="tab"
                id="material-tab-${item.id}"
                data-material-area="${item.target}"
                aria-selected="${index === 0 ? 'true' : 'false'}"
                aria-controls="${item.target}"
              >
                <span class="material-nav__tab-icon" aria-hidden="true">${item.icon}</span>
                <span class="material-nav__tab-label">${item.label}</span>
              </button>
              <a
                class="material-nav__tab-test"
                href="${item.testHref}"
                title="Ir al test de ${item.label}"
              >
                Test
              </a>
            </div>
          `
            )
            .join('')}
        </nav>
      </aside>

      <div class="glass-panel material-page__content" id="material-content">
        <p class="material-content-hint">Un tema abierto por área. Usá el índice para cambiar de sección.</p>
      </div>
    </div>
  `;

  const contentMount = section.querySelector('#material-content');
  if (legacyMount) {
    contentMount.appendChild(legacyMount);
    legacyMount.classList.remove('m-lg-5', 'test');
    legacyMount.classList.add('material-legacy');
    legacyMount.id = 'material-legacy-root';
    injectFundamentosSection(legacyMount);
    appendExtraStudyMaterial(legacyMount);
  } else {
    contentMount.innerHTML = `
      <div class="material-page__empty">
        <p>No se encontró el contenido de estudio en esta página.</p>
        <p class="material-page__empty-hint">Probá recargar o volvé al inicio para elegir un área de test.</p>
        <div class="material-page__empty-actions">
          <button type="button" class="btn btn--outline" data-material-reload>Recargar</button>
          <a class="btn btn--outline" href="${ROUTES.home}">Volver al inicio</a>
        </div>
      </div>
    `;
  }

  return section;
}

export function initMaterialEstudioPage() {
  const main = document.querySelector('.page-content');
  if (!main) return;

  try {
    const legacyBlock = findLegacyRoot(main);
    legacyBlock?.querySelector('.alert')?.remove();

    const page = renderMaterialShell(legacyBlock);
    main.replaceChildren(page);

    if (legacyBlock) {
      const contentRoot = page.querySelector('#material-content');
      enhanceLegacyAccordions(contentRoot);
      initMaterialStudyUX(page, contentRoot);
    }

    page.querySelector('[data-material-reload]')?.addEventListener('click', () => location.reload());
  } catch (error) {
    console.error('Error al inicializar Material de estudio:', error);
    const page = renderMaterialShell(null);
    main.replaceChildren(page);
    page.querySelector('[data-material-reload]')?.addEventListener('click', () => location.reload());
  }
}

function injectFundamentosSection(root) {
  if (root.querySelector('#seccionFundamentosIT')) return;

  const topics = EXTRA_STUDY_TOPICS.seccionFundamentosIT ?? [];
  const section = document.createElement('div');
  section.className = 'accordion material-area-section material-area-panel';
  section.id = 'seccionFundamentosIT';
  section.innerHTML = `
    <h2 class="material-area-section__title">Fundamentos IT</h2>
    ${renderStudyTopicsHtml(topics)}
  `;

  root.appendChild(section);
}

function appendExtraStudyMaterial(root) {
  Object.entries(EXTRA_STUDY_TOPICS).forEach(([sectionId, topics]) => {
    if (sectionId === 'seccionFundamentosIT') return;

    const section = root.querySelector(`#${sectionId}`);
    if (!section || !topics.length) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'material-extra-topics';
    wrapper.innerHTML = renderStudyTopicsHtml(topics);
    section.appendChild(wrapper);
  });
}

function enhanceLegacyAccordions(root) {
  root.querySelectorAll('.accordion[id^="seccion"]').forEach((section) => {
    section.classList.add('material-area-section', 'material-area-panel');
  });

  root.querySelectorAll('.accordion > h2.text-white, .accordion > h2.material-area-section__title').forEach((heading) => {
    heading.classList.remove('text-white', 'p-2', 'text-center');
    heading.classList.add('material-area-section__title');
  });

  root.querySelectorAll('.material-area-panel .card').forEach((card) => {
    card.classList.add('material-topic-card', 'material-topic');

    const trigger = card.querySelector('.card-header button, .card-header .btn-link');
    const titleEl = trigger?.querySelector('h4');
    if (trigger && titleEl) {
      const titleText = titleEl.textContent.trim();
      titleEl.remove();
      trigger.innerHTML = `
        <span class="material-topic__title">${titleText}</span>
        <span class="material-topic__chevron" aria-hidden="true"></span>
      `;
      trigger.classList.add('material-topic__trigger');
      trigger.removeAttribute('data-toggle');
      trigger.removeAttribute('data-target');
      trigger.removeAttribute('data-bs-toggle');
      trigger.removeAttribute('data-bs-target');
    }

    const body = card.querySelector('.collapse, .material-topic__body');
    if (body) {
      body.classList.remove('collapse', 'show', 'collapsing');
      body.classList.add('material-topic__body');
      body.hidden = true;
    }
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  const redesTitle = root.querySelector('#seccionRedes .material-area-section__title');
  if (redesTitle) redesTitle.textContent = 'Redes e Infraestructura';

  const segTitle = root.querySelector('#seccionSegInformatica .material-area-section__title');
  if (segTitle) segTitle.textContent = 'Seguridad Informática';

  const progTitle = root.querySelector('#seccionProgramacion .material-area-section__title');
  if (progTitle) progTitle.textContent = 'Programación';
}

function initMaterialStudyUX(page, contentRoot) {
  const panels = [...contentRoot.querySelectorAll('.material-area-panel')];
  const tabs = [...page.querySelectorAll('[data-material-area]')];

  if (!panels.length || !tabs.length) return;

  panels.forEach((panel) => initTopicAccordion(panel));

  const showArea = (areaId) => {
    panels.forEach((panel) => {
      const isActive = panel.id === areaId;
      panel.hidden = !isActive;
      panel.classList.toggle('material-area-panel--active', isActive);
    });

    tabs.forEach((tab) => {
      const isSelected = tab.dataset.materialArea === areaId;
      tab.classList.toggle('material-nav__tab--active', isSelected);
      tab.setAttribute('aria-selected', String(isSelected));
    });

    const activePanel = panels.find((p) => p.id === areaId);
    if (activePanel) {
      closeAllTopics(activePanel);
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => showArea(tab.dataset.materialArea));
  });

  showArea(tabs[0].dataset.materialArea);
}

function initTopicAccordion(areaPanel) {
  const topics = [...areaPanel.querySelectorAll('.material-topic')];

  topics.forEach((card) => {
    const trigger = card.querySelector('.material-topic__trigger');
    const body = card.querySelector('.material-topic__body');
    if (!trigger || !body) return;

    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      const isOpen = card.classList.contains('material-topic--open');

      closeAllTopics(areaPanel);

      if (!isOpen) {
        openTopic(card, trigger, body);
      }
    });
  });
}

function closeAllTopics(areaPanel) {
  areaPanel.querySelectorAll('.material-topic').forEach((card) => {
    const trigger = card.querySelector('.material-topic__trigger');
    const body = card.querySelector('.material-topic__body');
    if (body) {
      body.hidden = true;
      body.style.display = '';
    }
    trigger?.setAttribute('aria-expanded', 'false');
    card.classList.remove('material-topic--open');
  });
}

/** Limpia restos de Bootstrap collapse tras cargar la librería legacy. */
export function finalizeMaterialTopics() {
  document.querySelectorAll('.material-topic').forEach((card) => {
    const body = card.querySelector('.material-topic__body');
    const trigger = card.querySelector('.material-topic__trigger');
    if (body) {
      body.classList.remove('collapse', 'show', 'collapsing');
      body.hidden = true;
      body.style.display = '';
    }
    trigger?.setAttribute('aria-expanded', 'false');
    card.classList.remove('material-topic--open');
  });
  document.querySelectorAll('.material-topic__trigger').forEach((trigger) => {
    trigger.removeAttribute('data-toggle');
    trigger.removeAttribute('data-target');
    trigger.removeAttribute('data-bs-toggle');
    trigger.removeAttribute('data-bs-target');
  });
}

function openTopic(card, trigger, body) {
  body.hidden = false;
  body.classList.remove('collapse', 'collapsing');
  body.style.display = '';
  trigger.setAttribute('aria-expanded', 'true');
  card.classList.add('material-topic--open');
}

