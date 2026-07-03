import { mountLayout } from '../layout/mountLayout.js';
import { ROUTES } from '../data/site.js';
import { initAreaComingSoon } from '../js/test/initAreaComingSoon.js';

mountLayout({ activePath: ROUTES.testSeguridad });
initAreaComingSoon({
  areaId: 'seguridad',
  title: 'Seguridad Informática',
  description: 'Amenazas, vulnerabilidades, malware y buenas prácticas.',
  infoText:
    'Los tests de seguridad abordarán ingeniería social, hardening, tipos de ataques y protección de sistemas.',
  gradient: 'linear-gradient(135deg, #7c2d12 0%, #431407 100%)',
});
