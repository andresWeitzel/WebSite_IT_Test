import { escapeHtml } from '../utils/dom.js';

function renderEntries(entries = []) {
  return entries
    .map(
      (entry) => `
        <dt><strong>${escapeHtml(entry.term)}</strong></dt>
        <dd>${escapeHtml(entry.text)}</dd>
      `
    )
    .join('');
}

function renderSubsections(subsections = []) {
  return subsections
    .map(
      (section) => `
        <section class="material-topic__subsection">
          <h4 class="material-topic__subsection-title">${escapeHtml(section.title)}</h4>
          <dl>${renderEntries(section.entries)}</dl>
        </section>
      `
    )
    .join('');
}

function renderTopicBody(topic) {
  const intro = topic.intro
    ? `<p class="material-topic__intro">${escapeHtml(topic.intro)}</p>`
    : '';

  if (topic.subsections?.length) {
    return `${intro}${renderSubsections(topic.subsections)}`;
  }

  return `${intro}<dl>${renderEntries(topic.entries ?? [])}</dl>`;
}

export function renderStudyTopicCard(topic) {
  return `
    <div class="card material-topic-card material-topic" data-study-topic="${escapeHtml(topic.id)}">
      <div class="card-header">
        <h3 class="mb-0">
          <button class="btn btn-link material-topic__trigger" type="button" aria-expanded="false">
            <span class="material-topic__title">${escapeHtml(topic.title)}</span>
            <span class="material-topic__chevron" aria-hidden="true"></span>
          </button>
        </h3>
      </div>
      <div class="material-topic__body" id="${escapeHtml(topic.id)}" hidden>
        <div class="card-body text-justify material-topic__content">
          ${renderTopicBody(topic)}
        </div>
      </div>
    </div>
  `;
}

export function renderStudyTopicsHtml(topics) {
  return topics.map((topic) => renderStudyTopicCard(topic)).join('');
}
