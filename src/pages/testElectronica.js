import { mountLayout } from '../layout/mountLayout.js';
import { ROUTES } from '../data/site.js';
import { initAreaComingSoon } from '../js/test/initAreaComingSoon.js';

mountLayout({ activePath: ROUTES.testElectronica });
initAreaComingSoon({
  areaId: 'electronica',
  title: 'Electrónica',
  description: 'Hardware, numeración, comunicación e implementaciones digitales.',
  infoText:
    'Los tests de electrónica incluirán sistemas de numeración, lógica digital y fundamentos de hardware.',
  gradient: 'linear-gradient(135deg, #4d7c0f 0%, #1a2e05 100%)',
});
