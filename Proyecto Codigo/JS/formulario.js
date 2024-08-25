const newTaskInput = document.getElementById('titulo');
const newDescInput = document.getElementById('descripcion');
const newDateInput = document.getElementById('selected-date');
const newTimeInput = document.getElementById('time-input');
const newMotivoInput = document.getElementById('am-pm-selector');
const addTaskButton = document.getElementById('addTask');

// Función para agregar una nueva tarea
function addTask() {
    const text = newTaskInput.value.trim();
    const desc = newDescInput.value.trim();
    const date = newDateInput.textContent.trim();
    const time = newTimeInput.value.trim();
    const motivo = newMotivoInput.value.trim();
    
    if (text && desc && date && time && motivo) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text, desc, date, time, motivo, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        // Guardar la tarea en una entrada específica según el motivo seleccionado
        let specificTasks = JSON.parse(localStorage.getItem(motivo)) || [];
        specificTasks.push({ text, desc, date, time, motivo, completed: false });
        localStorage.setItem(motivo, JSON.stringify(specificTasks));
        
        // Redirigir a index.html
        window.location.href = 'index.html';
    }
}

// Evento
addTaskButton.addEventListener('click', addTask);
