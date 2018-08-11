const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8080;

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
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", () => {
  res.sendFile("index.html");
});
const todo = require("./routes/todo");
app.use("/api/todos", todo);

app.listen(port, () => {
  console.log("Listening to PORT " + port);
});
