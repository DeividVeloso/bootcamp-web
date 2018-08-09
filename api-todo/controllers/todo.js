const Todo = require("../models/todo");
const getTodos = (req, res, next) => {
  Todo.find()
    .then(resp => res.json(resp))
    .catch(err => res.send(err));
};

const postTodos = (req, res, next) => {
  Todo.create(req.body)
    .then(resp => res.json(resp))
    .catch(err => res.send(err));
};

module.exports = {
  getTodos,
  postTodos
};
