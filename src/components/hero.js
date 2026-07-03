import { SITE } from '../data/site.js';
import { escapeHtml } from '../utils/dom.js';

export function renderHero() {
  return `
    <section class="hero">
      <div class="container hero__inner">
        <p class="hero__eyebrow">Plataforma de práctica IT</p>
        <h1 class="hero__title">${escapeHtml(SITE.tagline)}</h1>
        <p class="hero__description">${escapeHtml(SITE.description)}</p>
        <div class="hero__stats">
          <div class="hero__stat">
            <span class="hero__stat-value">4</span>
            <span class="hero__stat-label">Áreas</span>
          </div>
          <div class="hero__stat">
            <span class="hero__stat-value" data-available-count>1</span>
            <span class="hero__stat-label">Disponible ahora</span>
          </div>
          <div class="hero__stat">
            <span class="hero__stat-value">∞</span>
            <span class="hero__stat-label">Intentos</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
