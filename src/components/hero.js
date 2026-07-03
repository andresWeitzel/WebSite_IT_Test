import { escapeHtml } from '../utils/dom.js';

export function renderHero({ areas = [] }) {
  const availableCount = areas.filter((a) => a.available).length;
  const totalModalities = areas.reduce((sum, a) => sum + (a.stats?.modalities ?? 4) * (a.stats?.levels ?? 3), 0);

  return `
    <section class="hero">
      <div class="container hero__inner">
        <p class="hero__eyebrow">Plataforma de práctica IT</p>
        <h1 class="hero__title">${escapeHtml('Test de Conocimientos IT')}</h1>
        <p class="hero__description">
          Practicá con tests ilimitados en programación, redes e infraestructura, seguridad y soporte IT.
          Cada área tiene niveles y modalidades distintas.
        </p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="#areas-title">Explorar áreas</a>
          <a class="btn btn--outline" href="/html/materialEstudio.html">Material de estudio</a>
        </div>
        <div class="hero__stats">
          <div class="hero__stat">
            <span class="hero__stat-value">${areas.length}</span>
            <span class="hero__stat-label">Áreas IT</span>
          </div>
          <div class="hero__stat">
            <span class="hero__stat-value">${availableCount}</span>
            <span class="hero__stat-label">Disponibles</span>
          </div>
          <div class="hero__stat">
            <span class="hero__stat-value">${totalModalities}</span>
            <span class="hero__stat-label">Tests distintos</span>
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
