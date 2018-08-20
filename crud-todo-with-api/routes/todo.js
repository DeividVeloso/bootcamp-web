const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");

router.post("/", todoController.postTodos);
router.get("/", todoController.getTodos);
router
  .route("/:todoId")
  .get(todoController.getTodoById)
  .put(todoController.putTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
