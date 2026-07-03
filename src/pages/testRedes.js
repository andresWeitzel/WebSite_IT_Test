import { mountLayout } from '../layout/mountLayout.js';
import { ROUTES } from '../data/site.js';
import { initAreaComingSoon } from '../js/test/initAreaComingSoon.js';

mountLayout({ activePath: ROUTES.testRedes });
initAreaComingSoon({
  areaId: 'redes',
  title: 'Redes',
  description: 'Infraestructura, protocolos, servicios y conectividad.',
  infoText:
    'Los tests de redes cubrirán protocolos, modelos OSI/TCP-IP, direccionamiento y servicios comunes.',
  gradient: 'linear-gradient(135deg, #0369a1 0%, #1e3a5f 100%)',
});
