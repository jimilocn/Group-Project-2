var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  app.get("/", function(req, res) {
    // db.Todo.findAll({}).then(function(dbTodo) {
    //   res.render("index", {
    //     msg: "Todo",
    //     todos: dbTodo
    //   });
    // });
    console.log("this is the direction name)"+__dirname)
    res.sendFile(path.join(__dirname, "../views/rangers/pinkranger.html"));

  });

  //Temporary Route To Test The Translate Function
  app.get("/translate", function(req, res) 
  { res.sendFile(path.join(__dirname, "../views/rangers/blackranger.html"));  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // app.get("/todo/:id", function(req, res) {
  //   db.Todo.findOne({ where: { id: req.params.id } }).then(function(dbTodo) {
  //     res.render("todo", {
  //       todos: dbTodo
  //     });
  //   });
  // });

  

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
