import { COURSES } from '../data/areas.js';
import { ROUTES } from '../data/site.js';
import { escapeHtml } from '../utils/dom.js';

export function renderCoursesSection() {
  const topics = COURSES.topics
    .map((topic) => `<span class="courses-card__chip">${escapeHtml(topic)}</span>`)
    .join('');

  return `
    <section class="courses-section" aria-labelledby="courses-title">
      <div class="container">
        <div class="courses-card glass-panel">
          <div class="courses-card__media">
            <img
              src="${COURSES.image}"
              alt=""
              loading="lazy"
              onerror="this.closest('.courses-card__media').classList.add('courses-card__media--fallback')"
            >
            <div class="courses-card__media-overlay">
              <span class="courses-card__media-badge">100% gratuito</span>
            </div>
          </div>
          <div class="courses-card__body">
            <p class="courses-card__eyebrow">Complemento recomendado</p>
            <h2 id="courses-title" class="courses-card__title">${escapeHtml(COURSES.title)}</h2>
            <p class="courses-card__text">${escapeHtml(COURSES.description)}</p>
            <div class="courses-card__chips" aria-label="Temas del canal">${topics}</div>
            <ul class="courses-card__highlights">
              ${COURSES.highlights
                .map((item) => `<li>${escapeHtml(item)}</li>`)
                .join('')}
            </ul>
            <div class="courses-card__actions">
              <a class="btn btn--primary" href="${COURSES.youtubeUrl}" target="_blank" rel="noopener noreferrer">
                Ver canal en YouTube
              </a>
              <a class="btn btn--outline" href="${COURSES.materialUrl}" target="_blank" rel="noopener noreferrer">
                Repositorio de material
              </a>
              <a class="btn btn--outline" href="${ROUTES.material}">
                Material en el sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
