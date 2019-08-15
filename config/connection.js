//----------Dependicies-----------
var mysql = require("mysql");
var connection;
var socket = require(io.listen(server));

//----------Setting Up mySQL Connection----------
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
    connection = mysql.createConnection(
        {
            host: "127.0.0.1",
            port: 3306,
            user: "Test",
            password: "Test1234",
            database: "dashboarddb"
        })
}
//----------Connecting To The Database----------
socket.on('connection', function (socket) {
    if (error) throw error;
    console.log("Socket.io connection Successful!");
});

socket.on('data', function (data) {
    new Server({
        port : 8080,
    }).save(function (err, res) {
        if (err) { return console.log("error"); }
        socket.emit('callback', { done: 'Done', data: data });
    });
});
module.exports = connection;