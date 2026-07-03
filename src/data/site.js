export const ROUTES = {
  home: '/',
  novedades: '/html/novedades.html',
  material: '/html/materialEstudio.html',
  testProgramacion: '/html/testProgramacion.html',
  testRedes: '/html/testRedes.html',
  testSeguridad: '/html/testSeguridadInformatica.html',
  testElectronica: '/html/testElectronica.html',
};

export const SITE = {
  name: 'Test IT',
  tagline: 'Test de Conocimientos IT',
  description:
    'Los tests son ilimitados. Si encontrás algún problema o error, reportalo: será de gran ayuda.',
  author: 'Andrés Weitzel',
  year: new Date().getFullYear(),
  email: 'andres96energy@hotmail.com',
  links: {
    github: 'https://github.com/andresWeitzel',
    youtube: 'https://www.youtube.com/channel/UCuSVXmBcMURyTvbmbcgZalQ/featured',
    material: 'https://github.com/andresWeitzel/Material_de_Estudio',
  },
};

export const NAV_LINKS = [
  { label: 'Inicio', href: ROUTES.home, path: ROUTES.home },
  { label: 'Ayuda', href: '#ayuda', modal: 'ayuda' },
  { label: 'Novedades', href: ROUTES.novedades, path: ROUTES.novedades },
  { label: 'Material de Estudio', href: ROUTES.material, path: ROUTES.material },
];

export const HELP_TEXT = `Para comenzar algún test, seleccioná primero el área: programación, redes, seguridad informática o electrónica. Una vez elegida el área con el botón "Comenzar", podrás elegir el nivel de complejidad según tu conocimiento.

Si necesitás repasar temas, visitá "Material de Estudio" en la barra de navegación. También podés tomar cursos gratuitos online que el autor desarrolló.`;
