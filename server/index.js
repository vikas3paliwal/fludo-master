var app = require('express')();
var server = require('http').Server(app);

app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!");
});

var io = require('socket.io')(server);

var server_port = process.env.PORT || 3000;


io.on('connection', function(socket){
	socket.emit('player_connected',{"id":socket.id});
	  socket.emit('/test', {"message":"hello"});
	socket.on('dice_output',function(data){
		console.log(data);
	});
	});

server.listen(server_port, function(){
	console.log("Server is now running..."+server_port);
});