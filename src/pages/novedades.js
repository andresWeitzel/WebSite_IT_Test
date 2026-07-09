import { mountLayout } from '../layout/mountLayout.js';
import { ROUTES } from '../data/site.js';
import { initNovedadesPage, renderCalendarEventModal } from '../js/novedades/initNovedadesPage.js';
import { initCalendar } from '../js/utilidades/calendario.js';
import { loadScript, loadStylesheet } from '../utils/assets.js';
import { markPageReady } from '../utils/pageReady.js';
import { initLegacyBootstrapContent } from './bootstrapPage.js';

mountLayout({ activePath: ROUTES.novedades, extraModals: renderCalendarEventModal() });
initNovedadesPage();

await loadStylesheet('https://cdn.jsdelivr.net/npm/fullcalendar@5.5.0/main.min.css');
await initLegacyBootstrapContent();
await loadScript('https://cdn.jsdelivr.net/npm/fullcalendar@5.5.0/main.min.js');
await loadScript('https://cdn.jsdelivr.net/npm/fullcalendar@5.5.0/locales-all.min.js');
initCalendar();
markPageReady();
