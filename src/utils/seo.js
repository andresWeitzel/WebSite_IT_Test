import { escapeHtml } from '../utils/dom.js';

export function injectJsonLd(data, id = 'seo-jsonld') {
  if (typeof document === 'undefined' || !data) return;

  const existing = id ? document.getElementById(id) : null;
  const script = existing ?? document.createElement('script');
  script.type = 'application/ld+json';
  if (id) script.id = id;
  script.textContent = JSON.stringify(data);
  if (!existing) {
    document.head.appendChild(script);
  }
}

export function renderSkipLink(targetId = 'main-content') {
  return `<a class="skip-link" href="#${escapeHtml(targetId)}">Saltar al contenido</a>`;
}
