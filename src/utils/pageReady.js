/** Marca la página como lista y muestra el contenido sin flash en blanco. */
export function markPageReady() {
  document.documentElement.classList.remove('is-booting');

  const main = document.querySelector('.page-content');
  if (main) {
    main.classList.remove('page-content--booting');
    main.classList.add('is-ready');
  }
}
