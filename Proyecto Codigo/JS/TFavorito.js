// Función para mostrar la tarea completada
function showCompletedTask() {
    const favoritoTask = JSON.parse(localStorage.getItem('favoritoTask'));
    const favoritoTaskDiv = document.getElementById('favoritoTask');
    
    if (favoritoTask) {
        favoritoTaskDiv.innerHTML = `
            <h2>Tarea Completada</h2>
            <p><strong>Título:</strong> ${favoritoTask.text}</p>
            <p><strong>Descripción:</strong> ${favoritoTask.desc}</p>
            <p><strong>Fecha:</strong> ${favoritoTask.date}</p>
            <p><strong>Hora:</strong> ${favoritoTask.time}</p>
            <p><strong>Motivo:</strong> ${favoritoTask.motivo}</p>
        `;
    } else {
        favoritoTaskDiv.innerHTML = '<p>No hay tarea favorita.</p>';
    }
}

// Mostrar la tarea completada al cargar la página
document.addEventListener('DOMContentLoaded', showCompletedTask);