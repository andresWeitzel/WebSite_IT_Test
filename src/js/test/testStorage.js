const PREFIX = 'testit';

function fullKey(areaId, testKey, suffix) {
  return `${PREFIX}_${areaId}_${testKey}_${suffix}`;
}

export function recordAttempt(areaId, testKey) {
  const attempts = Number(localStorage.getItem(fullKey(areaId, testKey, 'attempts')) || 0) + 1;
  localStorage.setItem(fullKey(areaId, testKey, 'attempts'), String(attempts));

  return {
    attempts,
    useSetA: attempts % 2 === 0,
  };
}

export function getAttempts(areaId, testKey) {
  return Number(localStorage.getItem(fullKey(areaId, testKey, 'attempts')) || 0);
}

export function saveResult(areaId, testKey, correct, total) {
  const currentBest = Number(localStorage.getItem(fullKey(areaId, testKey, 'best')) || 0);
  const percentage = Math.round((correct / total) * 100);

  if (percentage > currentBest) {
    localStorage.setItem(fullKey(areaId, testKey, 'best'), String(percentage));
  }

  localStorage.setItem(
    fullKey(areaId, testKey, 'last'),
    JSON.stringify({
      correct,
      total,
      percentage,
      date: new Date().toISOString(),
    })
  );

  return percentage;
}

export function getBestScore(areaId, testKey) {
  return Number(localStorage.getItem(fullKey(areaId, testKey, 'best')) || 0);
}

export function getLastResult(areaId, testKey) {
  const raw = localStorage.getItem(fullKey(areaId, testKey, 'last'));
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function getTotalAttempts(areaId, testKeys) {
  return testKeys.reduce((sum, key) => sum + getAttempts(areaId, key), 0);
}
