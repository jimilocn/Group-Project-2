var socket = io.connect('http://localhost:3000');
var io = require('socket.io')(http);

var rooms = [];

var roomSelected = "";

$("#roomSelect").on("click", function () {
})

$("#submitChatRoom").on("click", function () {
  var addRoom = $("#createRoom").val();
  rooms.push(addRoom);
  roomDropdown();
});

function roomDropdown() {
  for (i = 0; i < rooms.length; i++) {
    var options = $("<option>");
    $("select").append(options);
    options.append(rooms[i]);
  }
}

var username = $("#username");
var sendUsername = $("#submitName");

sendUsername.click(function () {
  console.log(username.val());
  socket.emit('username', username.val());
})

// submit text message without reload/refresh the page
$('form').submit(function (e) {
  e.preventDefault(); // prevents page reloading
  socket.emit('chat_message', $('#txt').val());
  $('#txt').val('');
  return false;
});

// append the chat text message
socket.on('chat_message', function (msg) {
  $('#messages').append($('<li class="chatText">').html(msg));
});

// append text if someone is online
socket.on('is_online', function (username) {
  $('#messages').append($('<li>').html(username));
});

// ask username
var username = prompt('Please tell me your name');
socket.emit('username', username);