// Función para mostrar el formulario
document.querySelector('a[href="#formulario"]').addEventListener('click', function (event) {
    event.preventDefault();
    const formulario = document.getElementById('formulario');
    if (formulario) {
        formulario.classList.remove('hidden');
    } else {
        console.error('No se encontró el formulario con el ID "formulario".');
    }
});

// Función para manejar el envío del formulario
function submitForm(event) {
    event.preventDefault(); // Evitar el envío real del formulario
    const formulario = document.getElementById('formulario');
    const mensaje = document.getElementById('mensaje');
    if (formulario) formulario.classList.add('hidden');
    if (mensaje) {
        mensaje.classList.remove('hidden');
        mensaje.textContent = '¡Gracias! Tu mensaje ha sido enviado con éxito.';
    } else {
        console.error('No se encontró el elemento con el ID "mensaje".');
    }
}

// Función para descargar el Curriculum
function descargarCurriculum() {
    const enlace = document.createElement('a'); // Crear un elemento <a>
    enlace.href = 'Juan%20Schack%20Lobato%20CV.PDF'; // Asegúrate de que esta ruta sea correcta
    enlace.download = 'Juan Schack Lobato CV.pdf'; // Nombre del archivo a descargar
    enlace.click(); // Simular clic en el enlace
}

// Manejar el envío del formulario
document.querySelector('form').addEventListener('submit', submitForm);
