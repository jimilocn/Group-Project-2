var mysql = require("mysql");

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "Test",
    password: "Test1234",
    database: "dashboarddb"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res) {
    res.render('index.ejs');
});

usernames = {};

io.sockets.on('connection', function(socket) {

    socket.on('username', function(username) {
        socket.username = username;
        socket.room = 'room1';
        usernames[username] = username;
        socket.join('room1');
        io.emit('is_online', '🔵 <i>' + socket.username + ' joined the chat..</i>');
        socket.emit('updatechat', 'SERVER', 'you have connected to' + roomSelected);
        // connection.query("SELECT (user, text) FROM chat WHERE user = ?;", [socket.username], function(err, result){
        //     if (err) throw err;
        //     result.render("index");
        // });
    });

    socket.on('disconnect', function(username) {
        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
    })

    socket.on('chat_message', function(message) {
        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
        connection.query("INSERT INTO chat (user, text) VALUES (?, ?)", [socket.username, message], function(err, result){
            if (err) throw err;
        });
    });

});

var server = http.listen(8080, function() {
    console.log('listening on *:8080');
});
