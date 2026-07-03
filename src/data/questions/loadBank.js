import { normalizeBankFile, normalizeQuestions } from './normalize.js';

export function loadTheorySets(bankFile) {
  if (bankFile?.sets) {
    return bankFile.sets.map((set) => normalizeQuestions(set.questions ?? set));
  }
  if (Array.isArray(bankFile)) {
    return bankFile.map((set) => normalizeQuestions(set));
  }
  return [];
}

export function loadPracticaBank(bankFile) {
  return normalizeBankFile(bankFile);
}
