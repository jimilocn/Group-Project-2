//----------DEPENDENCIES----------
var path = require("path");

//----------EXPORTING
module.exports = function (app) {


  app.get("/", function (req, res) {

    console.log("this is the direction name)" + __dirname)
    res.sendFile(path.join(__dirname, "../views/index.html"));

  });

  //Temporary Route To Test The Translate Function
  app.get("/translate", function (req, res) { res.sendFile(path.join(__dirname, "../views/index.html")); });

};
