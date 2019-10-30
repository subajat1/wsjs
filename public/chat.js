// client
// make sock conn
var socket = io.connect('http://localhost:4000');

// query DOM
var handle = document.getElementById('handle');
var message = document.getElementById('message');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

// emit events
btn.addEventListener('click', function() {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
});

// listen to events
socket.on('chat', function(data){
    feedback.innerHTML = "";
    output.innerHTML += '<p><b>' + data.handle + '</b>' + data.message + '</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>'+data+' is typing a message... </em></p>';
});