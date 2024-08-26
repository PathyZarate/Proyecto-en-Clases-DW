function showFavoriteTasks() {
    const favoriteTasks = JSON.parse(localStorage.getItem('favoriteTasks')) || [];
    const favoritoTaskDiv = document.getElementById('favoritoTask');
            
    if (favoriteTasks.length > 0) {
        favoriteTasks.forEach(task => {
            const taskDiv = document.createElement('div');
             taskDiv.className = 'opciones-agregar2'
            taskDiv.innerHTML = `
                <h2>Tarea Favorita</h2>
                <p><strong>Título:</strong> ${task.text}</p>
                <p><strong>Descripción:</strong> ${task.desc}</p>
                <p><strong>Fecha:</strong> ${task.date}</p>
                <p><strong>Hora:</strong> ${task.time}</p>
                <p><strong>Motivo:</strong> ${task.motivo}</p>
            `;
            favoritoTaskDiv.appendChild(taskDiv);
        });
    } else {
        favoritoTaskDiv.innerHTML = '<p>No hay tareas favoritas.</p>';
    }
}

document.addEventListener('DOMContentLoaded', showFavoriteTasks);