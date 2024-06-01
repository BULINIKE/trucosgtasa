document.getElementById('downloadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var videoUrl = document.getElementById('videoUrl').value;
    if (videoUrl) {
        document.getElementById('message').innerHTML = 'Procesando la descarga...';
        // Aquí iría la lógica para descargar el video.
        // Como esto generalmente requiere un backend o una API externa,
        // se omite en este ejemplo.
        setTimeout(function() {
            document.getElementById('message').innerHTML = '¡Descarga iniciada!';
        }, 2000);
    } else {
        document.getElementById('message').innerHTML = 'Por favor, ingresa una URL válida.';
    }
});
