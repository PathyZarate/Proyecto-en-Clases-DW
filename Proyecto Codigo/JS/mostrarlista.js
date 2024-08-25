const taskList = document.getElementById('taskList');

// Función para renderizar las tareas
function renderTasks(tasksToRender) {
    taskList.innerHTML = '';
    tasksToRender.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">Titulo: ${task.text}</span>
            <p>Descripcion: ${task.desc}</p>
            <p>Fecha: ${task.date}</p>
            <p>Hora: ${task.time}</p>
            <p>Rutina: ${task.motivo}</p>
            <button class="complete">Completar</button>
            <button class="favorite">Favorito</button>
            <button class="delete">Eliminar</button>
        `;
                
        // Evento para marcar como completada
        li.querySelector('.complete').addEventListener('click', () => markAsCompleted(index));

        // Evento para marcar como favorito
        li.querySelector('.favorite').addEventListener('click', () => markAsFavorite(index));
                
        // Evento para eliminar
        li.querySelector('.delete').addEventListener('click', () => deleteTask(index));
                
        taskList.appendChild(li);
    });
}
// Función para marcar/desmarcar como completada
function markAsCompleted(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];
    task.completed = true;
    tasks[index] = task;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    addCompletedTask(task);
    renderTasks(tasks);
}
// Función para agregar una tarea completada
function addCompletedTask(task) {
    let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    completedTasks.push(task);
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
}

// Función para marcar una tarea como favorita
function markAsFavorite(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];
    addFavoriteTask(task);
}
// Función para agregar una tarea a favoritos
function addFavoriteTask(task) {
    let favoriteTasks = JSON.parse(localStorage.getItem('favoriteTasks')) || [];
    favoriteTasks.push(task);
    localStorage.setItem('favoriteTasks', JSON.stringify(favoriteTasks));
}

// Función para eliminar una tarea
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks(tasks);
}

// Renderizar tareas iniciales
document.addEventListener('DOMContentLoaded', () => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks(tasks);
});