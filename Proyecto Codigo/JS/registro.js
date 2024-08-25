document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    const confirmarContrasena = document.getElementById('confirmarContrasena').value.trim();

    if (nombre === '') {
        alert('El campo nombre es obligatorio.');
        return;
    }
    if (apellido === '') {
        alert('El campo apellido es obligatorio.');
        return;
    }
    if (correo === '') {
        alert('El campo correo es obligatorio.');
        return;
    }
    if (!validateEmail(correo)) {
        alert('El correo no es válido.');
        return;
    }
    if (contrasena === '') {
        alert('El campo contraseña es obligatorio.');
        return;
    }
    if (contrasena.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }
    if (contrasena !== confirmarContrasena) {
        alert('Las contraseñas no coinciden.');
        return;
    }
    alert('Formulario enviado correctamente.');
    window.location.href = 'login.html';
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
