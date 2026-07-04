import { SITE, NAV_LINKS } from '../data/site.js';
import { escapeHtml } from '../utils/dom.js';

export function renderNavbar({ activePath = '/' } = {}) {
  const links = NAV_LINKS.map((link) => {
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
    return `
      <li class="nav__item">
        <a class="nav__link${activeClass}" href="${link.href}">${escapeHtml(link.label)}</a>
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
        <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="Abrir menú">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav__menu" id="nav-menu">
          ${links}
        </ul>
      </nav>
    </header>
  `;
}

function closeMobileNav() {
  const menu = document.querySelector('.nav__menu');
  const toggle = document.querySelector('.nav__toggle');
  menu?.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
}

export function initNavbar() {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');

  toggle?.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu?.querySelectorAll('.nav__link:not([data-modal-open])').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  menu?.querySelectorAll('[data-modal-open]').forEach((trigger) => {
    trigger.addEventListener('click', closeMobileNav);
  });
}

export { closeMobileNav };
