import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const sourceDir = join(root, 'public', 'html');
const targetDir = join(root, 'html');

const PAGE_CONFIG = {
  'testProgramacion.html': {
    title: 'Test IT — Programación',
    script: '/src/pages/testProgramacion.js',
  },
  'testRedes.html': {
    title: 'Test IT — Redes',
    script: '/src/pages/testRedes.js',
  },
  'testSeguridadInformatica.html': {
    title: 'Test IT — Seguridad Informática',
    script: '/src/pages/testSeguridad.js',
  },
  'testElectronica.html': {
    title: 'Test IT — Electrónica',
    script: '/src/pages/testElectronica.js',
  },
  'novedades.html': {
    title: 'Test IT — Novedades',
    script: '/src/pages/novedades.js',
  },
  'materialEstudio.html': {
    title: 'Test IT — Material de Estudio',
    script: '/src/pages/materialEstudio.js',
  },
};

function extractMainContent(html) {
  const startMarker = '<!--FIN HEADER-->';
  const endMarker = '<!---FOOTER-->';
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker);

  if (start === -1 || end === -1) {
    throw new Error('No se encontraron marcadores de contenido');
  }

  return html
    .slice(start + startMarker.length, end)
    .replace(/\.\.\/index\.html/g, '/')
    .replace(/href="\/index\.html"/g, 'href="/"')
    .replace(/\.\.\/html\//g, '/html/')
    .replace(/\.\.\/images\//g, '/images/')
    .replace(/\.\.\/js\//g, '/js/')
    .trim();
}

function wrapPage(fileName, content) {
  const config = PAGE_CONFIG[fileName];
  const inner = extractMainContent(content);

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="/images/iconos/lapiz.svg" type="image/svg+xml">
  <title>${config.title}</title>
</head>
<body>
  <div id="site-header"></div>
  <main class="page-content">
${inner}
  </main>
  <div id="site-footer"></div>
  <div id="site-modals"></div>
  <script type="module" src="${config.script}"></script>
</body>
</html>
`;
}

mkdirSync(targetDir, { recursive: true });

for (const fileName of readdirSync(sourceDir)) {
  if (!PAGE_CONFIG[fileName]) continue;
  const raw = readFileSync(join(sourceDir, fileName), 'utf8');
  writeFileSync(join(targetDir, fileName), wrapPage(fileName, raw), 'utf8');
  console.log('Migrated', fileName);
}
