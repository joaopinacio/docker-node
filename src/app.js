const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Chat = require('./app/event/Chat.js');

// Environment variables
const PORT = process.env.PORT || 9090;
const HOST = process.env.HOST || '0.0.0.0';

http.listen(PORT, HOST, (err) => {
	if (err) {
		console.error('Error starting  server', err);
	} else {
		console.log('server listening at port ' + PORT + " and host " + HOST);
	}
});

app.use(express.json());							// For parsing application/json
app.use(express.urlencoded({ extended: true }));	// For parsing application/x-www-form-urlencoded

// Anything beginning with "/api" will go into this
app.use('/api', require('./app/routes/api'));

// Test Socket io
app.get('/', function(req, res){
	res.sendFile(__dirname + '/html/index.html');
});

var visits = 0;
// Evento connection ocorre quando entra um novo usuário.
io.on('connection', function(socket){
	visits++;
	io.emit('visits', visits);

	var eventHandlers = {
		chat: new Chat(io ,socket, visits)
	}

	for (var category in eventHandlers) {
        var handler = eventHandlers[category].handler;
        for (var event in handler) {
            socket.on(event, handler[event]);
        }
	}
	
	// Evento disconnect ocorre quando sai um usuário.
	socket.on('disconnect', function(){
		visits--;

		// Atualiza o total de visitas para os demais usuários.
		socket.broadcast.emit('visits', visits);

		// Avisa que alguem saiu para todos conectados.
		socket.broadcast.emit('chat message', 'saiu alguem');

		// Id do cliente que esta se conectando com o server
		// console.log(socket.id);
	});
});