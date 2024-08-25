document.addEventListener('DOMContentLoaded', function() {
    const monthYearElement = document.getElementById('month-year');
    const daysContainer = document.getElementById('days-container');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const selectedDateElement = document.getElementById('selected-date');

    let currentDate = new Date();
    let selectedDayElement = null;

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        monthYearElement.textContent = date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

        daysContainer.innerHTML = '';

        let weekRow = document.createElement('div');
        weekRow.classList.add('week');

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.classList.add('calendarbase');
            weekRow.appendChild(emptyCell);
        }

        for (let day = 1; day <= lastDate; day++) {
            if (weekRow.children.length === 7) {
                daysContainer.appendChild(weekRow);
                weekRow = document.createElement('div');
                weekRow.classList.add('week');
            }

            const dayCell = document.createElement('div');
            dayCell.classList.add('calendarbase13');
            dayCell.innerHTML = `<div class="text">${day}</div>`;
            dayCell.addEventListener('click', function() {
                if (selectedDayElement) {
                    selectedDayElement.classList.remove('selected');
                }
                dayCell.classList.add('selected');
                selectedDayElement = dayCell;

                // Actualizar el campo de fecha seleccionada
                const selectedDate = new Date(year, month, day);
                selectedDateElement.textContent = selectedDate.toLocaleDateString('es-ES');
            });
            dayCell.addEventListener('mouseover', function() {
                dayCell.style.backgroundColor = '#f12711'; // Cambia el color aquí
            });
            dayCell.addEventListener('mouseout', function() {
                dayCell.style.backgroundColor = ''; // Vuelve al color original
            });
            weekRow.appendChild(dayCell);
        }

        if (weekRow.children.length > 0) {
            daysContainer.appendChild(weekRow);
        }
    }

    prevButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
