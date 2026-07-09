import { AREAS } from '../data/areas.js';
import { ROUTES, SITE } from '../data/site.js';
import { escapeHtml } from '../utils/dom.js';
import { renderModal } from './modal.js';

export function renderHelpModalBody() {
  const areaSteps = AREAS.map(
    (area) => `
      <li class="help-modal__area">
        <span class="help-modal__area-icon" aria-hidden="true">${area.icon}</span>
        <div>
          <a class="text-link help-modal__area-link" href="${area.href}">${escapeHtml(area.title)}</a>
          <p class="help-modal__area-desc">${escapeHtml(area.description)}</p>
        </div>
      </li>
    `
  ).join('');

  return `
    <div class="help-modal">
      <p class="help-modal__intro">
        IT Test te permite practicar conocimientos IT con tests ilimitados, cuatro modalidades por nivel y puntajes guardados en tu navegador.
      </p>

      <h3 class="help-modal__heading">Cómo empezar</h3>
      <ol class="help-modal__steps">
        <li>Elegí un área desde el <a class="text-link" href="${ROUTES.home}">inicio</a>.</li>
        <li>Seleccioná el nivel (básico, medio o avanzado).</li>
        <li>Elegí una modalidad: rápido, clásico, extendido o lectura práctica.</li>
        <li>Respondé las preguntas y revisá tu puntaje al finalizar.</li>
      </ol>

      <h3 class="help-modal__heading">Áreas disponibles</h3>
      <ul class="help-modal__areas">${areaSteps}</ul>

      <div class="help-modal__resources">
        <a class="help-modal__resource" href="${ROUTES.material}">
          <span class="help-modal__resource-label">Material de estudio</span>
          <span class="help-modal__resource-hint">Teoría, videos y definiciones por área</span>
        </a>
        <a class="help-modal__resource" href="${ROUTES.novedades}">
          <span class="help-modal__resource-label">Novedades</span>
          <span class="help-modal__resource-hint">Calendario de hitos y hoja de ruta</span>
        </a>
        <a class="help-modal__resource" href="${SITE.links.youtube}" target="_blank" rel="noopener noreferrer">
          <span class="help-modal__resource-label">Cursos en YouTube</span>
          <span class="help-modal__resource-hint">Playlists gratuitas del autor</span>
        </a>
      </div>

      <p class="help-modal__footer-note">
        ¿Encontraste un error? Escribinos a
        <a class="text-link" href="mailto:${SITE.email}">${escapeHtml(SITE.email)}</a>.
      </p>
    </div>
  `;
}

export function renderHelpModal() {
  return renderModal({
    id: 'ayuda',
    title: 'Ayuda',
    body: renderHelpModalBody(),
    wide: true,
  });
}
