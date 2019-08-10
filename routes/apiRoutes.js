var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/todo", function(req, res) {
    db.Todo.findAll({}).then(function(dbTodos) {
      res.json(dbTodos);
    });
  });


  app.post("/api/todo", function(req, res) {
    db.Todo.create(req.body).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  app.delete("/api/todo/:id", function(req, res) {
    db.Todo.destroy({ where: { id: req.params.id } }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });
  
};
