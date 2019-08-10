var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/", function(req, res) {
    db.Todo.findAll({}).then(function(dbTodo) {
      res.render("index", {
        msg: "Todo",
        todos: dbTodo
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/todo/:id", function(req, res) {
    db.Todo.findOne({ where: { id: req.params.id } }).then(function(dbTodo) {
      res.render("example", {
        todos: dbTodo
      });
    });
  });

  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
