require("dotenv").config();
const express = require('express');
const socket = require('socket.io');
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var db = require("./models");
//----------CALLING----------

var server = express();
var app = express();

//----------APP-SETUP----------
const PORT = 8080;
const PORT2 = process.env.PORT || 3000;


//----------MIDDLEWEAR
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//----------CHAT-SERVER-CONFIG----------

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

//socket setup

var io = socket(server1);

// io.on('connection', function (socket) {

  // console.log('Client..Connected', socket.id)

  // Handle chat event
  // socket.on('chat', function (data) {
  //   // console.log(data);
  //   io.sockets.emit('chat', data);
  // });

  // Handle typing event
//   socket.on('typing', function (data) {
//     socket.broadcast.emit('typing', data);
//   });
// });

io.sockets.on('connection', function(socket) {

  socket.on('username', function(username) {
      socket.username = username;
      
      io.emit('is_online', '🔵 <i>' + socket.username + ' joined the chat..</i>');
      connection.query("SELECT user, text FROM chat;", function(err, result){
        if (err) throw err;
        console.log(result);
    });
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

  // Handle typing event
  socket.on('typing', function (data) {
    socket.broadcast.emit('typing', data);
  });

});


//---------APP-SETUP----------
app.use(express.static('public'));

var server1 = server.listen(PORT, function () {


  console.log("listening for request on Port: " + PORT);

});
//----------ROUTES----------
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

//----------PARAMS-FOR-RUNNING-TESTS----------

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
// module.exports = app;
//----------STARTING DB----------
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT2, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
app.listen(PORT2, function () {
  console.log("listening on port ", PORT2)
})

