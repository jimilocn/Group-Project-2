//----------Dependencies----------
var db = require("../models");
var orm = require("../config/orm.js");

module.exports = function (app) {

  //----------TO-DO-LIST----------
  app.get("/api/todo", function (req, res) {
    db.Todo.findAll({}).then(function (dbTodos) {
      res.json(dbTodos);
    });
  });

  app.post("/api/todo", function (req, res) {
    db.Todo.create(req.body).then(function (dbTodo) {
      res.json(dbTodo);
    });
  });

  app.delete("/api/todo/:id", function (req, res) {
    db.Todo.destroy({ where: { id: req.params.id } }).then(function (dbTodo) {
      res.json(dbTodo);
    });
  });

  //----------ROUTE FOR GOOGLE TRANSLATE----------
  app.post("/translate", function (request, response) {
    //---------Calls The Function And Then Sends The Data To The HTML Page----------
    orm.translate(request.body.userText, request.body.langId, function (data) { response.send(data); })
  })
};
