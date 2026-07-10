import { ROUTES, SITE } from '../data/site.js';
import { AREAS } from '../data/areas.js';
import { escapeHtml } from '../utils/dom.js';

const FOOTER_LINKS = [
  { label: 'Material de estudio', href: ROUTES.material },
  { label: 'Novedades', href: ROUTES.novedades },
  { label: 'Ayuda', modal: 'ayuda' },
  { label: 'Contacto', modal: 'contacto' },
];

const FOOTER_AREA_LABELS = {
  programacion: 'Programación',
  'redes-infra': 'Redes',
  seguridad: 'Seguridad',
  'fundamentos-it': 'Fundamentos IT',
};

export function renderFooter() {
  const areaLinks = AREAS.map(
    (area) => `
      <li>
        <a class="site-footer__link" href="${area.href}">
          <span class="site-footer__link-icon" aria-hidden="true">${area.icon}</span>
          <span class="site-footer__link-text">${escapeHtml(FOOTER_AREA_LABELS[area.id] ?? area.title)}</span>
        </a>
      </li>
    `
  ).join('');

  const resourceLinks = FOOTER_LINKS.map((link) => {
    if (link.modal) {
      return `<li><button type="button" class="site-footer__link site-footer__link--button" data-modal-open="${link.modal}">${escapeHtml(link.label)}</button></li>`;
    }
    return `<li><a class="site-footer__link" href="${link.href}">${escapeHtml(link.label)}</a></li>`;
  }).join('');

  return `
    <footer class="site-footer">
      <div class="container site-footer__inner">
        <div class="site-footer__grid">
          <div class="site-footer__brand">
            <a class="site-footer__brand-link" href="${ROUTES.home}">
              <img src="/images/iconos/lapiz.svg" alt="Logo de IT Test" width="28" height="28">
              <span>${escapeHtml(SITE.name)}</span>
            </a>
            <p class="site-footer__tagline">
              Plataforma open source para practicar y medir conocimientos IT con tests ilimitados.
            </p>
          </div>

          <div class="site-footer__column site-footer__column--areas">
            <h3 class="site-footer__heading">Áreas de test</h3>
            <ul class="site-footer__list">${areaLinks}</ul>
          </div>

          <div class="site-footer__column site-footer__column--resources">
            <h3 class="site-footer__heading">Recursos</h3>
            <ul class="site-footer__list">${resourceLinks}</ul>
          </div>

          <div class="site-footer__column site-footer__column--author">
            <h3 class="site-footer__heading">Autor</h3>
            <ul class="site-footer__list">
              <li>
                <a class="site-footer__link" href="${SITE.links.youtube}" target="_blank" rel="noopener noreferrer me">Canal de YouTube</a>
              </li>
              <li>
                <a class="site-footer__link" href="${SITE.links.github}" target="_blank" rel="noopener noreferrer me">GitHub del autor</a>
              </li>
              <li>
                <a class="site-footer__link" href="${SITE.links.repo ?? 'https://github.com/andresWeitzel/WebSite_Test_IT'}" target="_blank" rel="noopener noreferrer">Repositorio del proyecto</a>
              </li>
              <li>
                <a class="site-footer__link" href="${SITE.links.material}" target="_blank" rel="noopener noreferrer">Material en GitHub</a>
              </li>
              <li>
                <a class="site-footer__link" href="mailto:${SITE.email}">${escapeHtml(SITE.email)}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="site-footer__bottom">
          <p class="site-footer__credit">
            Desarrollado por ${escapeHtml(SITE.author)} · Open Source · ${SITE.year}
          </p>
        </div>
      </div>
    </footer>
  `;
}
