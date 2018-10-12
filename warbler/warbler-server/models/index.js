const mongoose = require("mongoose");
mongoose.set("debug", true); //Vai mostrar a query no terminal
mongoose.Promise = Promise; //Utiliza as promisses do JavaScript para usar async/await
mongoose.connect(
  "mongodb://localhost/warbler",
  {
    keepAlive: true
  }
);

module.exports.User = require("./user");
module.exports.Message = require("./message");
