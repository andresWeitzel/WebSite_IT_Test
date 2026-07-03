export function initCalendar() {
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl || !window.FullCalendar) return;

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2020-12-07',
    eventResizableFromStart: true,
    dayMaxEvents: true,
    themeSystem: 'bootstrap',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: [
      { title: 'Se creo este proyecto', start: '2020-12-22' },
      {
        start: '2020-12-22',
        overlap: false,
        display: 'background',
        color: '#7d93a6',
      },
      { title: 'Creación de contenido al Proyecto', start: '2020-12-25', end: '2020-12-28' },
      { title: 'Ocurrencia de este Proyecto', start: '2020-12-19T03:00:00', end: '2020-12-19T03:30:00' },
      { title: 'Planificacion', start: '2020-12-19T04:00:00' },
      {
        title: 'Link del repo',
        url: 'https://github.com/andresWeitzel/SitioWebTest_IT',
        start: '2020-12-29',
      },
      { title: 'STAND BY', start: '2020-12-31', end: '2021-01-05' },
      {
        start: '2020-12-31',
        end: '2021-01-05',
        overlap: false,
        display: 'background',
        color: '#00ced1',
      },
      { title: 'RETORNO', start: '2021-01-05' },
      {
        start: '2021-01-05',
        overlap: false,
        display: 'background',
        color: '#0D4CB0',
      },
    ],
  });

  calendar.setOption('locale', 'es');
  calendar.render();
}
