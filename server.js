require("dotenv").config();
const express = require('express');
const app = express();
const http = require('http').Server(app);
var db = require("./models");
const io = require('socket.io')(http);
var PORT = process.env.PORT || 3000;

//----------APP-SETUP----------

const server = http.listen(8080, function () {
  console.log('listening on *:8080');
});

//---------STATIC-PAGES---------
app.use(express.static("public"));


//----------MIDDLEWEAR----------

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//----------Socket-setup-----------

io.sockets.on('connection', function (socket) {
  socket.on('username', function (username) {
    socket.username = username;
    io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
    connection.query("SELECT user, text FROM chat;", function (err, result) {
      if (err) throw err;
      console.log(result);
    });

    socket.on('disconnect', function (username) {
      io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
    })

    socket.on('chat_message', function (message) {
      io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
      connection.query("INSERT INTO chat (user, text) VALUES (?, ?)", [socket.username, message], function (err, result) {
        if (err) throw err;
      });
    });

  });
});


  //----------ROUTES----------
  require("./routes/apiRoutes")(app);
  require("./routes/htmlRoutes")(app);


  //----------PARAMS-FOR-RUNNING-TESTS----------
  var syncOptions = { force: false };

  if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
  };

  //----------STARTING DB----------
  module.exports = app;

  db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, function () {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT);
    });
  })