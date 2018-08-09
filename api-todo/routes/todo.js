const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");

router.post("/", todoController.postTodos);
router.get("/", todoController.getTodos);
router.get("/:todoId", todoController.getTodoById);
router.put("/:todoId", todoController.putTodo);
router.delete("/:todoId", todoController.deleteTodo);

module.exports = router;
