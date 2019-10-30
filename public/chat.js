// client
// make sock conn
var socket = io.connect('http://localhost:4000');

// query DOM
var handle = document.getElementById('handle');
var message = document.getElementById('message');
var btn = document.getElementById('send');
var output = document.getElementById('output');

// emit events
btn.addEventListener('click', function() {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

// listen to events
socket.on('chat', function(data){
    output.innerHTML += '<p><b>' + data.handle + '</b>' + data.message + '</p>';
});