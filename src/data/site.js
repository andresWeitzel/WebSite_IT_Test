export const ROUTES = {
  home: '/',
  novedades: '/html/novedades.html',
  material: '/html/materialEstudio.html',
  testProgramacion: '/html/testProgramacion.html',
  testRedesInfra: '/html/testRedes.html',
  testSeguridad: '/html/testSeguridadInformatica.html',
  testFundamentosIT: '/html/testFundamentosIT.html',
};

export const SITE = {
  name: 'Test IT',
  tagline: 'Test de Conocimientos IT',
  description:
    'Cuatro áreas con tests ilimitados, múltiples modalidades y seguimiento de puntajes. Si encontrás un error, reportalo.',
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
  { label: 'Ayuda', modal: 'ayuda' },
  { label: 'Novedades', href: ROUTES.novedades, path: ROUTES.novedades },
  { label: 'Material de Estudio', href: ROUTES.material, path: ROUTES.material },
];

export const HELP_TEXT = `Para comenzar, elegí un área desde el inicio: Programación, Redes e Infraestructura, Seguridad Informática o Fundamentos IT. Cada área tiene tres niveles y cuatro modalidades (rápido, clásico, extendido y lectura práctica).

Si necesitás repasar, visitá Material de Estudio. También podés seguir los cursos gratuitos del canal de YouTube del autor.`;
