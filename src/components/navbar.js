import { SITE, NAV_LINKS, TEST_PAGE_TABS } from '../data/site.js';
import { escapeHtml } from '../utils/dom.js';

export function renderNavbar({ activePath = '/', excludeNav = [] } = {}) {
  const links = NAV_LINKS.filter((link) => !excludeNav.includes(link.navId)).map((link) => {
    if (link.modal) {
      return `
        <li class="nav__item">
          <button type="button" class="nav__link nav__link--button" data-modal-open="${link.modal}">
            ${escapeHtml(link.label)}
          </button>
        </li>
      `;
    }

    const isActive = link.path === activePath;
    const activeClass = isActive ? ' nav__link--active' : '';
    const label = link.shortLabel
      ? `<span class="nav__label-full">${escapeHtml(link.label)}</span><span class="nav__label-short">${escapeHtml(link.shortLabel)}</span>`
      : escapeHtml(link.label);
    return `
      <li class="nav__item">
        <a class="nav__link${activeClass}" href="${link.href}">${label}</a>
      </li>
    `;
  }).join('');

  const testLinks = TEST_PAGE_TABS.map((tab) => {
    const isActive = tab.path === activePath;
    const activeClass = isActive ? ' nav__link--active' : '';
    const icon = tab.icon ? `<span class="nav__link-icon" aria-hidden="true">${tab.icon}</span>` : '';

    return `
      <li class="nav__item nav__item--test">
        <a class="nav__link nav__link--test${activeClass}" href="${tab.href}" ${isActive ? 'aria-current="page"' : ''}>
          ${icon}
          <span>${escapeHtml(tab.label)}</span>
        </a>
      </li>
    `;
  }).join('');

  return `
    <header class="site-header">
      <nav class="nav container" aria-label="Principal">
        <a class="nav__brand" href="/">
          <img src="/images/iconos/lapiz.svg" width="32" height="32" alt="" class="nav__logo" loading="lazy">
          <span>${escapeHtml(SITE.name)}</span>
        </a>
        <button
          class="nav__toggle"
          type="button"
          aria-expanded="false"
          aria-controls="nav-menu"
          aria-label="Abrir menú"
        >
          <span class="nav__toggle-bars" aria-hidden="true">
            <span class="nav__toggle-bar"></span>
            <span class="nav__toggle-bar"></span>
            <span class="nav__toggle-bar"></span>
          </span>
        </button>
        <ul class="nav__menu" id="nav-menu">
          <li class="nav__menu-heading" aria-hidden="true">Navegación</li>
          ${links}
          <li class="nav__menu-heading nav__menu-heading--tests" aria-hidden="true">Tests por área</li>
          ${testLinks}
        </ul>
      </nav>
    </header>
  `;
}

function setMobileNavOpen(isOpen) {
  const menu = document.querySelector('.nav__menu');
  const toggle = document.querySelector('.nav__toggle');
  menu?.classList.toggle('is-open', isOpen);
  toggle?.setAttribute('aria-expanded', String(isOpen));
  toggle?.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  document.body.classList.toggle('nav-open', isOpen);
}

function closeMobileNav() {
  setMobileNavOpen(false);
}

export function initNavbar() {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');

  toggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = !menu?.classList.contains('is-open');
    setMobileNavOpen(isOpen);
  });

  document.addEventListener('click', (event) => {
    if (!menu?.classList.contains('is-open')) return;
    const target = event.target;
    if (target instanceof Node && !menu.contains(target) && !toggle?.contains(target)) {
      closeMobileNav();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileNav();
  });

  menu?.querySelectorAll('.nav__link:not([data-modal-open])').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  menu?.querySelectorAll('[data-modal-open]').forEach((trigger) => {
    trigger.addEventListener('click', closeMobileNav);
  });
}

export { closeMobileNav };
