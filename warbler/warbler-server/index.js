const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const errorHandler = require("./handlers/error");

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  let error = new Error("Not Found!");
  error.status = 404;
  next(error);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is starting on PORT: ${PORT}`);
});
