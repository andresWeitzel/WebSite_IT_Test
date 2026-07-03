import { COURSES } from '../data/areas.js';
import { escapeHtml } from '../utils/dom.js';

export function renderCoursesSection() {
  return `
    <section class="courses-section" aria-labelledby="courses-title">
      <div class="container">
        <div class="courses-card">
          <div class="courses-card__media">
            <img
              src="${COURSES.image}"
              alt="Miniatura del canal de cursos"
              loading="lazy"
              onerror="this.closest('.courses-card__media').classList.add('courses-card__media--fallback')"
            >
          </div>
          <div class="courses-card__body">
            <div class="courses-card__tabs" role="tablist" aria-label="Enlaces relacionados">
              <a class="courses-card__tab courses-card__tab--active" href="${COURSES.youtubeUrl}" target="_blank" rel="noopener noreferrer">Cursos</a>
              <a class="courses-card__tab" href="${COURSES.materialUrl}" target="_blank" rel="noopener noreferrer">Material</a>
              <button type="button" class="courses-card__tab" data-modal-open="cursos-info">Info</button>
            </div>
            <h2 id="courses-title" class="courses-card__title">${escapeHtml(COURSES.title)}</h2>
            <p class="courses-card__text">${escapeHtml(COURSES.description)}</p>
            <a class="btn btn--primary" href="${COURSES.youtubeUrl}" target="_blank" rel="noopener noreferrer">Ver cursos en YouTube</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
