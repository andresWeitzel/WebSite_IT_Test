import { mergeSets } from '../../data/questions/mergeSets.js';
import { VARIANT_META, getVariantIcon } from '../../data/variants.js';

export function createStandardVariants(teoriaSets, practicaBank, areaId, copy = {}) {
  const variantIds = ['rapido', 'clasico', 'extendido', 'codigo'];

  return variantIds.map((id) => {
    const meta = VARIANT_META[id];
    const icon = getVariantIcon(id, areaId);

    const base = {
      id,
      title: id === 'codigo' ? 'Lectura práctica' : meta.title,
      badge: meta.badge,
      description: copy[id] ?? meta.defaultDescription,
      icon,
    };

    if (id === 'rapido') {
      return {
        ...base,
        resolveQuestions: (useSetA) => mergeSets(teoriaSets, useSetA ? [0, 1] : [4, 5]),
      };
    }
    if (id === 'clasico') {
      return {
        ...base,
        resolveQuestions: (useSetA) => mergeSets(teoriaSets, useSetA ? [0, 1, 2, 3] : [2, 3, 4, 5]),
      };
    }
    if (id === 'extendido') {
      return {
        ...base,
        resolveQuestions: () => mergeSets(teoriaSets, [0, 1, 2, 3, 4, 5]),
      };
    }
    return {
      ...base,
      resolveQuestions: () => practicaBank,
    };
  });
}

export function getStorageKey(levelId, variantId = null) {
  return variantId ? `${levelId}-${variantId}` : levelId;
}

export function getAllTestKeys(levels) {
  const keys = [];
  levels.forEach((level) => {
    level.variants.forEach((variant) => keys.push(getStorageKey(level.id, variant.id)));
  });
  return keys;
}
