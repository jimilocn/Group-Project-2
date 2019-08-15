var io = require("socket.io")(server);
var http = require("http").Server(app);
var rooms = [];
var username = $("#username");
var sendUsername = $("#submitName");
var roomSelected = "";


$(document).ready(function () {

//   //----------USER-LOGIN----------
  var username = $("#username").val();
  socket.emit('username', username);

//     //----------MESSAGE-DOM----------
//     // var message = document.getElementById("message");
//     //   username = document.getElementById("username"),
//     //   messsagesend = document.getElementById("messsagesend"),
//     //   newmessage = document.getElementById("newmessage"),
//     //   istyping = document.getElementById("istyping");

//     //----------CHAT-EVENTS----------
//     //---------APPEND-NEW-MESSAGE-TO-CHAT---------
  socket.on('chat_message', function (msg) {
    $('#messages').append($('<li>').html(msg));
  });
//     //----------SEND-EVENTS----------
//     //----------SUBMIT A MESSAGE----------
  $('form').submit(function (e) {
    e.preventDefault(); // prevents page reloading
    socket.emit('chat_message', $('#txt').val());
    $('#txt').val('');
    return false;
  });
    //----------CAPTURE WHEN SOMEONE IS TYPING----------
    chatmessage.addEventListener("keypress", function () {
      socket.emmit("typing", username.value)
    });
  });
  
// //----------DISPLAY WHEN SOMEONE IS TYPING----------
socket.on("chatmessage", function (data) {
  $("#chatmessage")
    .append($("<li>")
      .html(data));
});

// //----------DISPLAY WHEN SOMEONE IS ONLINE----------
socket.on('is_online', function (username) {
  $('#messages').append($('<li>').html(username));
});;
//----------ADD-A-ROOM----------
$(".roomSelect")
  .on("click", function () { });
$("#submitChatRoom")
  .on("click enter", function () {
    var addRoom = $("#roomSelect")
      .val();
    rooms.push(addRoom);
    roomDropdown();
  });

function roomDropdown() {
  for (i = 0; i < rooms.length; i++) {
    var options = $("<option>");
    $("#roomSelect")
      .append(options);
    options.append(rooms[i]);
  }
};
sendUsername.click(function () {
  console.log("SUBMIT BUTTON SELECTED", username.val());
  socket.emit("username", username.val());
});