// Función para mostrar la tarea completada
function showCompletedTask() {
    const completedTask = JSON.parse(localStorage.getItem('completedTask'));
    const completedTaskDiv = document.getElementById('completedTask');
    
    if (completedTask) {
        completedTaskDiv.innerHTML = `
            <h2>Tarea Completada</h2>
            <p><strong>Título:</strong> ${completedTask.text}</p>
            <p><strong>Descripción:</strong> ${completedTask.desc}</p>
            <p><strong>Fecha:</strong> ${completedTask.date}</p>
            <p><strong>Hora:</strong> ${completedTask.time}</p>
            <p><strong>Motivo:</strong> ${completedTask.motivo}</p>
        `;
    } else {
        completedTaskDiv.innerHTML = '<p>No hay tarea completada.</p>';
    }
}

// Mostrar la tarea completada al cargar la página
document.addEventListener('DOMContentLoaded', showCompletedTask);