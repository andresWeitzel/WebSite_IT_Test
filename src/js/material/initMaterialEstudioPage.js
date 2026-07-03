export function initMaterialEstudioPage() {
  const main = document.querySelector('.page-content');
  if (!main) return;

  main.querySelector('.alert')?.remove();

  const legacyBlock = main.querySelector('.test');
  if (!legacyBlock) return;

  const wrapper = document.createElement('section');
  wrapper.className = 'area-page material-page';
  wrapper.innerHTML = `
    <div class="container area-page__inner">
      <header class="area-page__header">
        <a class="area-page__back" href="/">← Volver al inicio</a>
        <p class="area-page__eyebrow">Recursos</p>
        <h1 class="area-page__title">Material de estudio</h1>
        <p class="area-page__description">
          Contenido teórico, videos y definiciones organizadas por área para repasar antes de cada test.
        </p>
      </header>
      <div class="glass-panel material-page__content" id="material-content"></div>
    </div>
  `;

  const contentMount = wrapper.querySelector('#material-content');
  contentMount.appendChild(legacyBlock);
  legacyBlock.classList.remove('m-lg-5', 'test');

  const slider = main.querySelector('.slider');
  main.innerHTML = '';
  main.appendChild(wrapper);
  slider?.remove();
}
