import { absoluteUrl, buildBreadcrumbJsonLd } from '../data/seo.js';
import { escapeHtml } from '../utils/dom.js';
import { injectJsonLd } from '../utils/seo.js';

export function renderBreadcrumbs(items = []) {
  if (!items.length) return '';

  const list = items
    .map((item, index) => {
      const isLast = index === items.length - 1;
      if (isLast) {
        return `
          <li class="breadcrumbs__item" aria-current="page">
            <span class="breadcrumbs__current">${escapeHtml(item.name)}</span>
          </li>
        `;
      }

      return `
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="${escapeHtml(item.path)}">${escapeHtml(item.name)}</a>
          <span class="breadcrumbs__sep" aria-hidden="true">/</span>
        </li>
      `;
    })
    .join('');

  return `
    <nav class="breadcrumbs" aria-label="Miga de pan">
      <div class="container breadcrumbs__inner">
        <ol class="breadcrumbs__list">${list}</ol>
      </div>
    </nav>
  `;
}

export function mountBreadcrumbs(items = []) {
  if (!items.length) return;

  injectJsonLd(buildBreadcrumbJsonLd(items), 'seo-breadcrumbs-jsonld');

  const main = document.querySelector('main.page-content, main');
  if (!main) return;

  const existing = document.querySelector('.breadcrumbs');
  if (existing) existing.remove();

  main.insertAdjacentHTML('afterbegin', renderBreadcrumbs(items));
}

export function breadcrumbAbsoluteItems(items) {
  return items.map((item) => ({
    ...item,
    absolute: absoluteUrl(item.path),
  }));
}
