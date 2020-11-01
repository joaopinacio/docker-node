const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

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

// Anything beginning with "/api" will go into this
app.use('/api', require('./app/routes/api'));

// Test Socket io
app.get('/', function(req, res){
	res.sendFile(__dirname + '/html/index.html');
});

var visitas = 0;
// Evento connection ocorre quando entra um novo usuário.
io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		socket.emit('chat message', msg);
	});

	// Id do cliente que esta se conectando com o server
	console.log(socket.id);

	// Incrementa o total de visitas no site.
	visitas++;

	// Envia o total de visitas para o novo usuário.
	socket.emit('visits', visitas);

	// Envia o total de visitas para os demais usuários.
	socket.broadcast.emit('visits', visitas);

	// Evento disconnect ocorre quando sai um usuário.
	socket.on('disconnect', function(){
		visitas--;

		// Atualiza o total de visitas para os demais usuários.
		socket.broadcast.emit('visits', visitas);

		// Atualiza o total de visitas para os demais usuários.
		socket.broadcast.emit('chat message', 'saiu alguem');

		// Id do cliente que esta se conectando com o server
		console.log(socket.id);
	});
});