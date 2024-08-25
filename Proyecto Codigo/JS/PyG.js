// Función para mostrar las tareas específicas
function showTasks() {
    const tasks = JSON.parse(localStorage.getItem('Piernas y gluteos')) || [];
    const taskDetails = document.getElementById('taskDetails');
    
    if (tasks.length > 0) {
        tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.innerHTML = `
                <h2>Tarea: Piernas y gluteos</h2>
                <p><strong>Título:</strong> ${task.text}</p>
                <p><strong>Descripción:</strong> ${task.desc}</p>
                <p><strong>Fecha:</strong> ${task.date}</p>
                <p><strong>Hora:</strong> ${task.time}</p>
                <p><strong>Motivo:</strong> ${task.motivo}</p>
            `;
            taskDetails.appendChild(taskDiv);
        });
    } else {
        taskDetails.innerHTML = '<p>No hay tareas disponibles.</p>';
    }
}

// Mostrar las tareas al cargar la página
document.addEventListener('DOMContentLoaded', showTasks);