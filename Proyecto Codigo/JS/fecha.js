const fechaActual = new Date();

const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opciones);

document.getElementById('dia-fecha').innerText = fechaFormateada;