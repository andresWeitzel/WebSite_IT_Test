import { SITE, HELP_TEXT } from '../data/site.js';
import { renderFooter } from '../components/footer.js';
import { initModals, renderModal } from '../components/modal.js';
import { initNavbar, renderNavbar } from '../components/navbar.js';
import '../styles/layout.css';
import '../styles/legacy-pages.css';
import '../styles/pages.css';
import '../styles/test.css';

function renderShellModals() {
  return [
    renderModal({
      id: 'ayuda',
      title: 'Ayuda',
      body: `<p>${HELP_TEXT.replace(/\n/g, '</p><p>')}</p>`,
    }),
    renderModal({
      id: 'contacto',
      title: 'Contacto',
      body: `<p><a class="text-link" href="mailto:${SITE.email}">${SITE.email}</a></p>`,
    }),
  ].join('');
}

/**
 * Monta navbar, footer y modales compartidos en páginas legacy.
 * @param {{ activePath: string, extraModals?: string }} options
 */
export function mountLayout({ activePath, extraModals = '' }) {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  const modalsEl = document.getElementById('site-modals');

  if (!headerEl || !footerEl || !modalsEl) {
    throw new Error('Faltan contenedores #site-header, #site-footer o #site-modals');
  }

  headerEl.innerHTML = renderNavbar({ activePath });
  footerEl.innerHTML = renderFooter();
  modalsEl.innerHTML = renderShellModals() + extraModals;

  initNavbar();
  initModals();
}
