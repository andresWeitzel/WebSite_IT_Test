import { escapeHtml } from '../utils/dom.js';

let activeModal = null;

export function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  activeModal = modal;
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add('is-open'));
  document.body.classList.add('modal-open');

  const focusable = modal.querySelector('[data-modal-close], .btn');
  focusable?.focus();
}

export function closeModal(modal) {
  if (!modal) return;

  modal.classList.remove('is-open');
  document.body.classList.remove('modal-open');

  window.setTimeout(() => {
    modal.hidden = true;
    if (activeModal === modal) activeModal = null;
  }, 200);
}

export function initModals() {
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-modal-open]');
    if (trigger) {
      event.preventDefault();
      openModal(trigger.dataset.modalOpen);
      return;
    }

    const closeBtn = event.target.closest('[data-modal-close]');
    if (closeBtn) {
      event.preventDefault();
      closeModal(closeBtn.closest('.modal'));
      return;
    }

    if (event.target.classList.contains('modal__backdrop')) {
      closeModal(event.target.closest('.modal'));
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && activeModal) {
      closeModal(activeModal);
    }
  });
}

export function renderModal({ id, title, body, footerExtra = '' }) {
  return `
    <div class="modal" id="${id}" hidden>
      <div class="modal__backdrop" aria-hidden="true"></div>
      <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="${id}-title">
        <div class="modal__header">
          <h2 class="modal__title" id="${id}-title">${escapeHtml(title)}</h2>
          <button type="button" class="modal__close" data-modal-close aria-label="Cerrar">&times;</button>
        </div>
        <div class="modal__body">${body}</div>
        <div class="modal__footer">
          ${footerExtra}
          <button type="button" class="btn btn--ghost" data-modal-close>Cerrar</button>
        </div>
      </div>
    </div>
  `;
}
