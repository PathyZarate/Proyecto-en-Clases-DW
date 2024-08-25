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
            <button class="favorito">Favorito</button>
            <button class="delete">Eliminar</button>
        `;
                
        // Evento para marcar como completada
        li.querySelector('.complete').addEventListener('click', () => toggleComplete(index));

        //Evento para marcar como favorito
        li.querySelector('.favorito').addEventListener('click', () => toggleFavorito(index));
                
        // Evento para eliminar
        li.querySelector('.delete').addEventListener('click', () => deleteTask(index));
                
        taskList.appendChild(li);
    });
}

// Función para marcar/desmarcar como completada
function toggleComplete(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    // Guardar la tarea completada en localStorage
    localStorage.setItem('completedTask', JSON.stringify(tasks[index]));
    
    // Redirigir a tareaCompletada.html
    window.location.href = 'TareaCompletada.html';
}

// Función para marcar/desmarcar como completada
function toggleFavorito(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    // Guardar la tarea completada en localStorage
    localStorage.setItem('favoritoTask', JSON.stringify(tasks[index]));
    
    // Redirigir a tareaCompletada.html
    window.location.href = 'Favoritos.html';
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