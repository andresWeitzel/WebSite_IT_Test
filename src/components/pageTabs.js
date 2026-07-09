import { TEST_PAGE_TABS } from '../data/site.js';
import { escapeHtml } from '../utils/dom.js';

function isTabActive(tab, activePath) {
  return Boolean(activePath && tab.path === activePath);
}

function renderTabLink(tab, activePath) {
  const activeClass = isTabActive(tab, activePath) ? ' page-tabs__link--active' : '';
  const label = tab.shortLabel
    ? `<span class="page-tabs__label-full">${escapeHtml(tab.label)}</span><span class="page-tabs__label-short">${escapeHtml(tab.shortLabel)}</span>`
    : escapeHtml(tab.label);
  const icon = tab.icon ? `<span class="page-tabs__icon" aria-hidden="true">${tab.icon}</span>` : '';

  return `
    <a class="page-tabs__link${activeClass}" href="${tab.href}" ${isTabActive(tab, activePath) ? 'aria-current="page"' : ''} aria-label="${escapeHtml(tab.label)}">
      ${icon}
      ${label}
    </a>
  `;
}

export function renderPageTabs({ activePath = '/' } = {}) {
  return `
    <nav class="page-tabs" id="site-subnav" aria-label="Tests por área">
      <div class="container page-tabs__inner">
        <p class="page-tabs__label">Tests</p>
        <div class="page-tabs__scroll">
          <div class="page-tabs__group page-tabs__group--tests" role="group" aria-label="Áreas de test">
            ${TEST_PAGE_TABS.map((tab) => renderTabLink(tab, activePath)).join('')}
          </div>
        </div>
      </div>
    </nav>
  `;
}

export function mountPageTabs({ activePath = '/', container } = {}) {
  const host = container ?? document.querySelector('.site-chrome') ?? document.getElementById('site-header');
  if (!host) return;

  host.querySelector('#site-subnav')?.remove();
  host.insertAdjacentHTML('beforeend', renderPageTabs({ activePath }));

  const scroll = host.querySelector('.page-tabs__scroll');
  const activeTab = host.querySelector('.page-tabs__group--tests .page-tabs__link--active');
  if (scroll && activeTab) {
    const offset = activeTab.offsetLeft - scroll.clientWidth / 2 + activeTab.clientWidth / 2;
    scroll.scrollTo({ left: Math.max(0, offset) });
  }
}
