import { SITE } from '../data/site.js';
import { escapeHtml } from '../utils/dom.js';

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container site-footer__inner">
        <div class="site-footer__cta">
          <h2 class="site-footer__title">Más información</h2>
          <p class="site-footer__text">Proyecto open source para practicar y evaluar conocimientos IT.</p>
        </div>
        <div class="site-footer__links">
          <a class="footer-link" href="${SITE.links.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub del autor">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.18.82a7.49 7.49 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.51-1.04 2.18-.82 2.18-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
          </a>
          <button type="button" class="footer-link" data-modal-open="contacto" aria-label="Contacto">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zM1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V5H1V3.5zm13 9.5h-13a.5.5 0 0 1-.5-.5V6h14v6.5a.5.5 0 0 1-.5.5z"/></svg>
          </button>
          <a class="footer-link" href="${SITE.links.youtube}" target="_blank" rel="noopener noreferrer" aria-label="Canal de YouTube">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.215 1.995l.008.089v.3c-.003.822-.033 4.987-.335 6.11a2.01 2.01 0 0 1-1.415 1.42c-.38.101-.883.172-1.995.215l-.089.008H8.051c-.822-.003-4.987-.033-6.11-.335a2.01 2.01 0 0 1-1.415-1.42c-.101-.38-.172-.883-.215-1.995l-.008-.089v-.3c.003-.822.033-4.987.335-6.11a2.01 2.01 0 0 1 1.415-1.42c.38-.101.883-.172 1.995-.215l.089-.008zM8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>
          </a>
          <a class="footer-link" href="${SITE.links.material}" target="_blank" rel="noopener noreferrer" aria-label="Material de estudio">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M.5 3.5A1.5 1.5 0 0 1 2 2h12a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 12.5v-9zM2 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-9A.5.5 0 0 0 14 3H2z"/><path fill="currentColor" d="M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/></svg>
          </a>
        </div>
        <p class="site-footer__credit">
          Desarrollado y diseñado por ${escapeHtml(SITE.author)} · Open Source · ${SITE.year}
        </p>
      </div>
    </footer>
  `;
}
