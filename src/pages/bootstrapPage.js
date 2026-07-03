import { loadBootstrap, migrateBootstrapAttributes } from '../utils/bootstrap.js';

export async function initLegacyBootstrapContent() {
  const content = document.querySelector('.page-content');
  if (content) migrateBootstrapAttributes(content);
  await loadBootstrap();
}
