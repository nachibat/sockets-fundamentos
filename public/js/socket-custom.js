var socket = io();
// Escuchar sucesos del lado del cliente
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
// Enviar información del cliente al server
socket.emit('enviarMensaje', {
    usuario: 'nachi2083',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});
// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});