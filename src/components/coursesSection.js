import { COURSES } from '../data/areas.js';
import { ROUTES } from '../data/site.js';
import { renderCoursesIllustration } from './coursesIllustration.js';
import { escapeHtml } from '../utils/dom.js';

export function renderCoursesSection() {
  const topics = COURSES.topics
    .map((topic) => `<span class="courses-card__chip">${escapeHtml(topic)}</span>`)
    .join('');

  return `
    <section class="courses-section" aria-labelledby="courses-title">
      <div class="container">
        <div class="courses-card glass-panel">
          <a
            class="courses-card__media"
            href="${COURSES.youtubeUrl}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir canal de YouTube con cursos gratuitos"
          >
            <div class="courses-card__media-visual" aria-hidden="true">
              ${renderCoursesIllustration()}
            </div>
            <div class="courses-card__media-overlay">
              <span class="courses-card__media-badge">100% gratuito</span>
            </div>
          </a>
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
