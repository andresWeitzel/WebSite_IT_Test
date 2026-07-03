/**
 * Carga Bootstrap 5 para modales y componentes en páginas legacy.
 * Bootstrap 5 no requiere jQuery.
 */
let bootstrapPromise = null;

export function loadBootstrap() {
  if (bootstrapPromise) return bootstrapPromise;

  bootstrapPromise = new Promise((resolve, reject) => {
    if (!document.querySelector('link[data-bootstrap]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
      link.setAttribute('data-bootstrap', 'true');
      document.head.appendChild(link);
    }

    if (window.bootstrap) {
      resolve(window.bootstrap);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    script.async = true;
    script.onload = () => resolve(window.bootstrap);
    script.onerror = () => reject(new Error('No se pudo cargar Bootstrap'));
    document.body.appendChild(script);
  });

  return bootstrapPromise;
}

/**
 * Convierte atributos data-* de Bootstrap 4 a Bootstrap 5 en un contenedor.
 */
export function migrateBootstrapAttributes(root = document) {
  const map = [
    ['data-toggle', 'data-bs-toggle'],
    ['data-target', 'data-bs-target'],
    ['data-dismiss', 'data-bs-dismiss'],
    ['data-backdrop', 'data-bs-backdrop'],
    ['data-keyboard', 'data-bs-keyboard'],
  ];

  root.querySelectorAll('*').forEach((el) => {
    map.forEach(([oldAttr, newAttr]) => {
      if (el.hasAttribute(oldAttr)) {
        el.setAttribute(newAttr, el.getAttribute(oldAttr));
        el.removeAttribute(oldAttr);
      }
    });
  });
}
