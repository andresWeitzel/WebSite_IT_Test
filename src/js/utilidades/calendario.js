import { EVENT_CATEGORIES, getCalendarEventsForRange } from '../../data/calendarEvents.js';
import { escapeHtml } from '../../utils/dom.js';
import { openModal } from '../../components/modal.js';

const MOBILE_MQ = window.matchMedia('(max-width: 900px)');

function isMobileCalendar() {
  return MOBILE_MQ.matches;
}

function renderLegend() {
  const legendEl = document.getElementById('calendar-legend');
  if (!legendEl) return;

  legendEl.innerHTML = Object.entries(EVENT_CATEGORIES)
    .map(
      ([key, { label, color }]) => `
        <span class="calendar-legend__item">
          <span class="calendar-legend__dot" style="background:${color}"></span>
          ${escapeHtml(label)}
        </span>
      `
    )
    .join('');
}

function syncCalendarShell() {
  const mount = document.getElementById('calendar-mount');
  mount?.classList.toggle('novedades-calendar--mobile', isMobileCalendar());
}

function getHeaderToolbar(mobile) {
  if (mobile) {
    return {
      left: 'prev,next',
      center: 'title',
      right: 'today',
    };
  }

  return {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,listMonth',
  };
}

function showEventDetail(event) {
  const modal = document.getElementById('calendar-event-modal');
  if (!modal) return;

  const { title, start, end, extendedProps, url } = event;
  const categoryLabel = extendedProps.categoryLabel ?? '';
  const description = extendedProps.description ?? '';
  const category = EVENT_CATEGORIES[extendedProps.category];
  const dateOpts = { day: 'numeric', month: 'long', year: 'numeric' };
  const locale = 'es-AR';

  let dateText = start.toLocaleDateString(locale, dateOpts);
  if (end) {
    const endDate = new Date(end);
    endDate.setDate(endDate.getDate() - 1);
    dateText += ` — ${endDate.toLocaleDateString(locale, dateOpts)}`;
  }

  modal.querySelector('.calendar-event-modal__category').textContent = categoryLabel;
  modal.querySelector('.calendar-event-modal__category').style.color = category?.color ?? '';
  modal.querySelector('.calendar-event-modal__date').textContent = dateText;
  modal.querySelector('.calendar-event-modal__description').textContent = description;

  const linkEl = modal.querySelector('.calendar-event-modal__link');
  if (url) {
    linkEl.href = url;
    linkEl.textContent = url.startsWith('/') ? 'Ir a la sección relacionada →' : 'Ver enlace relacionado →';
    linkEl.hidden = false;
  } else {
    linkEl.hidden = true;
  }

  document.getElementById('calendar-event-title').textContent = title;
  openModal('calendar-event-modal');
}

export function initCalendar() {
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl || !window.FullCalendar) return;

  renderLegend();
  syncCalendarShell();

  const mobile = isMobileCalendar();

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: mobile ? 'listMonth' : 'dayGridMonth',
    locale: 'es',
    firstDay: 1,
    height: 'auto',
    fixedWeekCount: false,
    dayMaxEvents: mobile ? 1 : 3,
    moreLinkClick: 'popover',
    navLinks: !mobile,
    nowIndicator: true,
    eventDisplay: 'block',
    eventTimeFormat: { hour: '2-digit', minute: '2-digit', meridiem: false },
    headerToolbar: getHeaderToolbar(mobile),
    buttonText: {
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      list: 'Agenda',
    },
    views: {
      listMonth: {
        buttonText: 'Agenda',
        listDayFormat: { weekday: 'long', day: 'numeric', month: 'short' },
        listDaySideFormat: false,
      },
    },
    events(info, successCallback) {
      successCallback(getCalendarEventsForRange(info.start, info.end));
    },
    eventClick(info) {
      info.jsEvent.preventDefault();
      showEventDetail(info.event);
    },
    eventDidMount(info) {
      const desc = info.event.extendedProps.description;
      if (desc) {
        info.el.title = desc;
      }
    },
  });

  calendar.render();

  const applyResponsiveLayout = () => {
    const nowMobile = isMobileCalendar();
    syncCalendarShell();
    calendar.setOption('headerToolbar', getHeaderToolbar(nowMobile));
    calendar.setOption('navLinks', !nowMobile);
    calendar.setOption('dayMaxEvents', nowMobile ? 1 : 3);

    if (nowMobile && !calendar.view.type.startsWith('list')) {
      calendar.changeView('listMonth');
    }
  };

  MOBILE_MQ.addEventListener('change', applyResponsiveLayout);
}
