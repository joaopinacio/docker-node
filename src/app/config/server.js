// const io = require('socket.io')(http);

// var visitas = 0;
// // Evento connection ocorre quando entra um novo usu�rio.
// io.on('connection', function(socket){
// 	socket.on('chat message', function(msg){
// 		socket.emit('chat message', msg);
// 	});

// 	// Id do cliente que esta se conectando com o server
// 	console.log(socket.id);

// 	// Incrementa o total de visitas no site.
// 	visitas++;

// 	// Envia o total de visitas para o novo usu�rio.
// 	socket.emit('visits', visitas);

// 	// Envia o total de visitas para os demais usu�rios.
// 	socket.broadcast.emit('visits', visitas);

// 	// Evento disconnect ocorre quando sai um usu�rio.
// 	socket.on('disconnect', function(){
// 		visitas--;

// 		// Atualiza o total de visitas para os demais usu�rios.
// 		socket.broadcast.emit('visits', visitas);

// 		// Atualiza o total de visitas para os demais usu�rios.
// 		socket.broadcast.emit('chat message', 'saiu alguem');

// 		// Id do cliente que esta se conectando com o server
// 		console.log(socket.id);
// 	});
// });