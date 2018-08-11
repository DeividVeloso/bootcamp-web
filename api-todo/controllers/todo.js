const Todo = require("../models/todo");
const getTodos = (req, res, next) => {
  Todo.find()
    .then(resp => res.status(200).json(resp))
    .catch(err => res.send(err));
};

const postTodos = (req, res, next) => {
  Todo.create(req.body)
    .then(resp => res.status(201).json(resp))
    .catch(err => res.send(err));
};

const getTodoById = (req, res, next) => {
  Todo.findById({ _id: req.params.todoId })
    .then(resp => res.status(200).json(resp))
    .catch(err => res.send(err));
};

const putTodo = (req, res, next) => {
  Todo.findByIdAndUpdate(
    { _id: req.params.todoId },
    { name: req.body.name, completed: req.body.completed },
    { new: true }
  )
    .then(resp => res.json(resp))
    .catch(err => res.send(err));
};

const deleteTodo = (req, res, next) => {
  Todo.findByIdAndDelete({ _id: req.params.todoId })
    .then(resp => res.json(resp))
    .catch(err => res.send(err));
};

module.exports = {
  getTodos,
  postTodos,
  getTodoById,
  putTodo,
  deleteTodo
};
