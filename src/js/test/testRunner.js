import { escapeHtml } from '../../utils/dom.js';
import { getBestScore, saveResult } from './testStorage.js';

function countAnswered(container, total) {
  let answered = 0;
  for (let i = 0; i < total; i += 1) {
    if (container.querySelector(`input[name="q-${i}"]:checked`)) answered += 1;
  }
  return answered;
}

function updateProgress(container, total) {
  const answered = countAnswered(container, total);
  const bar = container.querySelector('[data-progress-bar]');
  const label = container.querySelector('[data-progress-label]');

  if (bar) bar.style.width = `${(answered / total) * 100}%`;
  if (label) label.textContent = `${answered} de ${total} respondidas`;
}

function renderCodeBlock(item) {
  if (!item.codigo) return '';

  const lang = item.lenguaje ? `<span class="test-question__code-lang">${escapeHtml(item.lenguaje)}</span>` : '';

  return `
    <div class="test-question__code">
      ${lang}
      <pre><code>${escapeHtml(item.codigo)}</code></pre>
    </div>
  `;
}

function renderQuestionsHtml(questions) {
  return questions
    .map((item, index) => {
      const options = Object.entries(item.respuestas)
        .map(
          ([letter, text]) => `
          <label class="test-option">
            <input type="radio" name="q-${index}" value="${letter}">
            <span class="test-option__marker">${letter.toUpperCase()}</span>
            <span class="test-option__text">${escapeHtml(text)}</span>
          </label>
        `
        )
        .join('');

      const typeBadge =
        item.tipo === 'codigo'
          ? '<span class="test-question__type">Fragmento práctico</span>'
          : '';

      return `
        <article class="test-question${item.tipo === 'codigo' ? ' test-question--code' : ''}" data-question-index="${index}">
          ${typeBadge}
          <h3 class="test-question__title">${escapeHtml(item.pregunta)}</h3>
          ${renderCodeBlock(item)}
          <div class="test-question__options">${options}</div>
        </article>
      `;
    })
    .join('');
}

function gradeTest(container, questions) {
  let correct = 0;

  questions.forEach((item, index) => {
    const selected = container.querySelector(`input[name="q-${index}"]:checked`);
    const value = selected?.value ?? null;
    const isCorrect = value === item.solucion;

    if (isCorrect) correct += 1;

    const questionEl = container.querySelector(`[data-question-index="${index}"]`);
    questionEl?.classList.add(isCorrect ? 'test-question--correct' : 'test-question--incorrect');

    container.querySelectorAll(`input[name="q-${index}"]`).forEach((input) => {
      input.disabled = true;
      if (input.value === item.solucion) {
        input.closest('.test-option')?.classList.add('test-option--solution');
      }
    });
  });

  return { correct, total: questions.length };
}

function resultMessage(levelId, correct, total, percentage) {
  if (percentage === 100) {
    if (levelId === 'basico') return '¡Perfecto! Probá el nivel medio o otra modalidad básica.';
    if (levelId === 'medio') return '¡Excelente! Desafiarte con el nivel avanzado.';
    return '¡Increíble! Dominás este nivel.';
  }

  if (percentage >= 60) {
    return 'Buen trabajo. Repasá las incorrectas y volvé a intentar.';
  }

  return 'Seguí practicando con el material de estudio y reintentá.';
}

export function createTestRunner({
  areaId,
  storageKey,
  levelId,
  levelTitle,
  resolveQuestions,
}) {
  let questions = [];
  let submitted = false;
  let container = null;

  function render(containerEl, useSetA) {
    container = containerEl;
    submitted = false;
    questions = resolveQuestions(useSetA);

    containerEl.innerHTML = `
      <div class="test-runner">
        <div class="test-runner__header">
          <p class="test-runner__eyebrow">${escapeHtml(levelTitle)}</p>
          <div class="test-runner__progress">
            <div class="test-runner__progress-track">
              <div class="test-runner__progress-bar" data-progress-bar style="width: 0%"></div>
            </div>
            <span class="test-runner__progress-label" data-progress-label>0 de ${questions.length} respondidas</span>
          </div>
        </div>
        <div class="test-runner__questions" data-questions>
          ${renderQuestionsHtml(questions)}
        </div>
        <div class="test-runner__result" data-result hidden></div>
        <div class="test-runner__actions">
          <button type="button" class="btn btn--ghost" data-action="close">Salir</button>
          <button type="button" class="btn btn--primary" data-action="submit">Enviar respuestas</button>
          <button type="button" class="btn btn--outline" data-action="retry" hidden>Reintentar</button>
        </div>
      </div>
    `;

    containerEl.querySelector('[data-questions]')?.addEventListener('change', () => {
      if (!submitted) updateProgress(containerEl, questions.length);
    });

    containerEl.querySelector('[data-action="submit"]')?.addEventListener('click', () => submit());
    containerEl.querySelector('[data-action="retry"]')?.addEventListener('click', () => {
      containerEl.dispatchEvent(new CustomEvent('test-retry', { bubbles: true }));
    });
    containerEl.querySelector('[data-action="close"]')?.addEventListener('click', () => {
      containerEl.dispatchEvent(new CustomEvent('test-close', { bubbles: true }));
    });
  }

  function submit() {
    if (submitted || !container) return;

    const unanswered = questions.length - countAnswered(container, questions.length);
    if (unanswered > 0) {
      const resultEl = container.querySelector('[data-result]');
      resultEl.hidden = false;
      resultEl.className = 'test-runner__result test-runner__result--warning';
      resultEl.innerHTML = `<p>Te faltan <strong>${unanswered}</strong> pregunta(s) por responder.</p>`;
      return;
    }

    submitted = true;
    const { correct, total } = gradeTest(container, questions);
    const percentage = saveResult(areaId, storageKey, correct, total);
    const best = getBestScore(areaId, storageKey);

    const resultEl = container.querySelector('[data-result]');
    const submitBtn = container.querySelector('[data-action="submit"]');
    const retryBtn = container.querySelector('[data-action="retry"]');

    resultEl.hidden = false;
    resultEl.className = 'test-runner__result';
    resultEl.innerHTML = `
      <div class="test-score">
        <div class="test-score__circle" style="--score: ${percentage}">
          <span class="test-score__value">${percentage}%</span>
        </div>
        <div class="test-score__copy">
          <h3>${correct} de ${total} correctas</h3>
          <p>${resultMessage(levelId, correct, total, percentage)}</p>
          <p class="test-score__meta">Mejor puntaje: <strong>${best}%</strong></p>
        </div>
      </div>
    `;

    submitBtn.hidden = true;
    retryBtn.hidden = false;

    container.dispatchEvent(
      new CustomEvent('test-finished', {
        bubbles: true,
        detail: { areaId, storageKey, levelId, correct, total, percentage },
      })
    );
  }

  return { render };
}

export function formatAttemptLabel(attempts) {
  if (attempts === 0) return 'Sin intentos previos';
  if (attempts === 1) return '1 intento realizado';
  return `${attempts} intentos realizados`;
}

export function formatBestLabel(best, last) {
  if (best > 0) return `Mejor puntaje: ${best}%`;
  if (last) return `Último: ${last.percentage}%`;
  return 'Aún sin puntaje guardado';
}
