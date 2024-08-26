function showCompletedTasks() {
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    const completedTaskDiv = document.getElementById('completedTask');
    
    if (completedTasks.length > 0) {
        completedTasks.forEach(task => {
            const taskDiv = document.createElement('div');
             taskDiv.className = 'opciones-agregar2'
            taskDiv.innerHTML = `
                <h2>Tarea Completada</h2>
                <p><strong>Título:</strong> ${task.text}</p>
                <p><strong>Descripción:</strong> ${task.desc}</p>
                <p><strong>Fecha:</strong> ${task.date}</p>
                <p><strong>Hora:</strong> ${task.time}</p>
                <p><strong>Motivo:</strong> ${task.motivo}</p>
            `;
            completedTaskDiv.appendChild(taskDiv);
        });
    } else {
        completedTaskDiv.innerHTML = '<p>No hay tareas completadas.</p>';
    }
}

document.addEventListener('DOMContentLoaded', showCompletedTasks);