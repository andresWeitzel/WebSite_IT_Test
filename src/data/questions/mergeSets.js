export function mergeSets(sets, indices) {
  return indices.flatMap((index) => sets[index] ?? []);
}
