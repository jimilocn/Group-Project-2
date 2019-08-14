document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid', 'timeGrid', 'bootstrap'],
        timeZone: 'UTC',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true,
        eventLimit: true,
        views: {
            timeGrid: {
                eventLimit: 6 // adjust to 6 only for timeGridWeek/timeGridDay
            },

        },
        eventTimeFormat: { // like '14:30:00'
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        },
        eventDrop: function (info) {
            console.log(info)
            alert(info.event.title + " was dropped on " + info.event.start.toISOString());

            if (!confirm("Are you sure about this change?")) {
                info.revert();
            }

        },
        dateClick: function (info) {
            console.log(info)
            var newEvent = prompt("Please add new event")
            calendar.addEvent({ title: newEvent, start: info.dateStr });
            newEvent.remove();

        }
    });
    calendar.render();

    calendar.changeView('dayGridMonth');
    // API call db get all the events
    calendar.addEvent({ title: 'Emails', start: '2019-08-15T11:30:00Z', end: '2018-09-15T12:30:00Z' });
    calendar.addEvent({ title: 'Lunch', start: '2019-08-15T12:30:00Z', end: '2018-09-15T14:30:00Z' });


});