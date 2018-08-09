const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 6000;

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos");
mongoose.set("debug", true);
mongoose.Promise = Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Conectou no mongo");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const todo = require("./routes/todo");

app.use("/api/v1/todo", todo);

app.listen(port, () => {
  console.log("Listening to PORT " + port);
});
