import { ROUTES } from '../../data/site.js';
import { AREAS } from '../../data/areas.js';

const AREA_NAV = [
  { id: 'programacion', label: 'Programación', target: 'seccionProgramacion' },
  { id: 'redes-infra', label: 'Redes e Infraestructura', target: 'seccionRedes' },
  { id: 'seguridad', label: 'Seguridad Informática', target: 'seccionSegInformatica' },
  { id: 'fundamentos-it', label: 'Fundamentos IT', target: 'seccionFundamentosIT' },
];

export function initMaterialEstudioPage() {
  const main = document.querySelector('.page-content');
  if (!main) return;

  const legacyBlock = main.querySelector('.test');
  if (!legacyBlock) return;

  legacyBlock.querySelector('.alert')?.remove();

  const wrapper = document.createElement('section');
  wrapper.className = 'area-page material-page';
  wrapper.innerHTML = `
    <div class="container area-page__inner material-page__layout">
      <header class="area-page__header">
        <a class="area-page__back" href="/">← Volver al inicio</a>
        <p class="area-page__eyebrow">Recursos</p>
        <h1 class="area-page__title">Material de estudio</h1>
        <p class="area-page__description">
          Teoría, videos y definiciones por área. Usá el índice para saltar directo al tema que necesitás repasar.
        </p>
      </header>

      <aside class="material-nav glass-panel" aria-label="Índice por área">
        <h2 class="material-nav__title">Índice</h2>
        <nav class="material-nav__list">
          ${AREA_NAV.map(
            (item) => `
            <a class="material-nav__link" href="#${item.target}" data-material-jump="${item.target}">
              <span>${item.label}</span>
            </a>
          `
          ).join('')}
        </nav>
        <div class="material-nav__tests">
          <p class="material-nav__hint">¿Listo para practicar?</p>
          ${AREAS.map(
            (area) => `
            <a class="material-nav__test-link" href="${area.href}">
              <span class="material-nav__test-icon" aria-hidden="true">${area.icon}</span>
              <span>${area.title}</span>
            </a>
          `
          ).join('')}
        </div>
      </aside>

      <div class="glass-panel material-page__content" id="material-content"></div>
    </div>
  `;

  const contentMount = wrapper.querySelector('#material-content');
  contentMount.appendChild(legacyBlock);
  legacyBlock.classList.remove('m-lg-5', 'test');
  legacyBlock.classList.add('material-legacy');

  injectFundamentosSection(legacyBlock);

  main.innerHTML = '';
  main.appendChild(wrapper);

  enhanceLegacyAccordions(contentMount);
  bindMaterialNav(wrapper);
}

function injectFundamentosSection(root) {
  if (root.querySelector('#seccionFundamentosIT')) return;

  const section = document.createElement('div');
  section.className = 'accordion mt-5 material-area-section';
  section.id = 'seccionFundamentosIT';
  section.innerHTML = `
    <h2 class="material-area-section__title">FUNDAMENTOS IT</h2>
    <div class="card">
      <div class="card-header" id="headingFundamentosIT">
        <h2 class="mb-0">
          <button class="btn btn-link btn-block collapsed text-info" type="button" data-toggle="collapse" data-target="#collapseFundamentosIT" aria-expanded="false">
            <h4>Soporte técnico y operaciones</h4>
          </button>
        </h2>
      </div>
      <div id="collapseFundamentosIT" class="collapse" data-parent="#seccionFundamentosIT">
        <div class="card-body text-justify">
          <dl>
            <dt><strong>¿Qué es el soporte IT?</strong></dt>
            <dd>Área que resuelve incidencias de hardware, software, accesos y conectividad de los usuarios.</dd>
            <dt><strong>Active Directory</strong></dt>
            <dd>Servicio de directorio de Microsoft para gestionar identidades, equipos y políticas en red.</dd>
            <dt><strong>ITIL</strong></dt>
            <dd>Marco de buenas prácticas para gestión de servicios: tickets, SLAs, cambios e incidentes.</dd>
            <dt><strong>DevOps vs Soporte</strong></dt>
            <dd>DevOps automatiza despliegue e infraestructura; soporte IT atiende usuarios y mantiene el puesto de trabajo.</dd>
          </dl>
        </div>
      </div>
    </div>
  `;

  root.appendChild(section);
}

function enhanceLegacyAccordions(root) {
  root.querySelectorAll('.accordion > h2.text-white, .accordion > h2.material-area-section__title').forEach((heading) => {
    const section = heading.parentElement;
    section.classList.add('material-area-section');
    heading.classList.remove('text-white', 'p-2', 'text-center');
    heading.classList.add('material-area-section__title');
  });

  root.querySelectorAll('.card').forEach((card) => {
    card.classList.add('material-topic-card');
  });

  const redesTitle = root.querySelector('#seccionRedes h2');
  if (redesTitle) redesTitle.textContent = 'REDES E INFRAESTRUCTURA';
}

function bindMaterialNav(root) {
  root.querySelectorAll('[data-material-jump]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.dataset.materialJump;
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      root.querySelectorAll('.material-nav__link').forEach((l) => l.classList.toggle('is-active', l === link));
    });
  });
}
