// Función para mostrar todas las tareas completadas
function showCompletedTasks() {
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    const completedTaskDiv = document.getElementById('completedTask');
    
    if (completedTasks.length > 0) {
        completedTaskDiv.innerHTML = '<h2>Tareas Completadas</h2>';
        completedTasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.innerHTML = `
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

// Mostrar las tareas completadas al cargar la página
document.addEventListener('DOMContentLoaded', showCompletedTasks);