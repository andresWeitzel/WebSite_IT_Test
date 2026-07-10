import { SEO_FAQS } from '../data/seo.js';
import { escapeHtml } from '../utils/dom.js';

export function renderFaqSection(faqs = SEO_FAQS) {
  const items = faqs
    .map(
      (faq, index) => `
      <details class="faq-section__item"${index === 0 ? ' open' : ''}>
        <summary class="faq-section__question">${escapeHtml(faq.question)}</summary>
        <p class="faq-section__answer">${escapeHtml(faq.answer)}</p>
      </details>
    `
    )
    .join('');

  return `
    <section class="faq-section" aria-labelledby="faq-title" id="preguntas-frecuentes">
      <div class="container">
        <div class="section-heading">
          <h2 id="faq-title" class="section-heading__title">Preguntas frecuentes</h2>
          <p class="section-heading__subtitle">
            Respuestas rápidas sobre cómo funciona IT Test, los niveles y el material de estudio.
          </p>
        </div>
        <div class="faq-section__list">${items}</div>
      </div>
    </section>
  `;
}
