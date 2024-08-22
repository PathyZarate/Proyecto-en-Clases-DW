document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('gmail').value;
    var password = document.getElementById('password').value;

    if (!validarEmail(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    alert('Formulario enviado correctamente.');

});

function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}