var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.emit('some event', { for: 'everyone' });

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		socket.broadcast.emit('hi');
		io.emit('chat message', msg);
	});
});



http.listen(3000, function(){
  console.log('3000 rise ups');
});