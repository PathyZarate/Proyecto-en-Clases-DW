const taskList = document.getElementById('taskList');

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

        li.querySelector('.complete').addEventListener('click', () => markAsCompleted(index));

        li.querySelector('.favorite').addEventListener('click', () => markAsFavorite(index));

        li.querySelector('.delete').addEventListener('click', () => deleteTask(index));
                
        taskList.appendChild(li);
    });
}

function markAsCompleted(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];
    task.completed = true;
    tasks[index] = task;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    addCompletedTask(task);
    renderTasks(tasks);
}

function addCompletedTask(task) {
    let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    completedTasks.push(task);
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
}

function markAsFavorite(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];
    addFavoriteTask(task);
}

function addFavoriteTask(task) {
    let favoriteTasks = JSON.parse(localStorage.getItem('favoriteTasks')) || [];
    favoriteTasks.push(task);
    localStorage.setItem('favoriteTasks', JSON.stringify(favoriteTasks));
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks(tasks);
}

document.addEventListener('DOMContentLoaded', () => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks(tasks);
});