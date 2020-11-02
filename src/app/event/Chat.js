var Chat = function (io ,socket) {
    this.io = io;
    this.socket = socket;

    // Expose handler methods for events
    this.handler = {
        'chat message': message.bind(this), // use the bind function to access Chat atributes
    };

    function message(msg) {
        // Broadcast message to all sockets
        this.io.emit('chat message', msg);
    };
}

// Example comparing code:
    // socket.on('chat message', function(msg){
    //     io.emit('chat message', msg);
    // });

module.exports = Chat;