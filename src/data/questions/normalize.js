/**
 * Formato canónico de pregunta (JSON en src/data/questions/).
 *
 * {
 *   "id": "prog-med-cod-01",
 *   "type": "theory" | "code",
 *   "question": "Texto de la pregunta",
 *   "options": { "a": "...", "b": "...", "c": "..." },
 *   "answer": "a",
 *   "code": "...",           // solo type: code
 *   "language": "JavaScript",
 *   "tags": ["poo", "sql"],
 *   "explanation": "..."     // opcional, para feedback futuro
 * }
 *
 * El motor de tests consume el formato normalizado legacy:
 * pregunta, respuestas, solucion, tipo, codigo, lenguaje.
 */

export function normalizeQuestion(raw) {
  if (!raw || typeof raw !== 'object') return raw;

  const type = raw.type ?? (raw.tipo === 'codigo' ? 'code' : raw.tipo ?? 'theory');
  const isCode = type === 'code' || raw.tipo === 'codigo';

  return {
    id: raw.id ?? null,
    pregunta: raw.question ?? raw.pregunta ?? '',
    respuestas: raw.options ?? raw.respuestas ?? {},
    solucion: raw.answer ?? raw.solucion ?? '',
    tipo: isCode ? 'codigo' : undefined,
    codigo: raw.code ?? raw.codigo,
    lenguaje: raw.language ?? raw.lenguaje,
    tags: raw.tags ?? [],
    explanation: raw.explanation ?? null,
  };
}

export function normalizeQuestions(items) {
  if (!Array.isArray(items)) return [];
  return items.map(normalizeQuestion);
}

export function normalizeBankFile(bankFile) {
  if (Array.isArray(bankFile)) return normalizeQuestions(bankFile);
  if (bankFile?.questions) return normalizeQuestions(bankFile.questions);
  return [];
}
