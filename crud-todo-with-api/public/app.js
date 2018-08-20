$(document).ready(function() {
  $.getJSON("/api/todos").then(data => {
    addTodos(data);
  });

  $("#todoInput").keypress(function(key) {
    //console.log(key);
    if (key.keyCode === 13) {
      createTodo();
    }
  });

  $(".list").on("click", "span", function(e) {
    e.stopPropagation();
    removeTodo($(this).parent());
  });

  $(".list").on("click", "li", function() {
    updateTodo($(this));
  });
});

function updateTodo(todo) {
  var clickedId = todo.data("id");
  var isDone = !todo.data("completed");
  var updateData = { completed: isDone };
  $.ajax({
    method: "PUT",
    url: "/api/todos/" + clickedId,
    data: updateData
  })
    .then(function(updateTodo) {
      todo.toggleClass("done");
      todo.data("completed", isDone);
    })
    .catch(error => console.log(error));
}

function removeTodo(todo) {
  var clickedId = todo.data("id");

  $.ajax({
    method: "DELETE",
    url: "/api/todos/" + clickedId
  })
    .then(function(data) {
      //$(this).parent().remove(); Remove só no HTML o elemento do DOM
      todo.remove();
    })
    .catch(error => console.log(error));
}

function createTodo() {
  const name = $("#todoInput").val();
  $.post("/api/todos", { name: name })
    .then(todo => {
      addTodo(todo);
      $("#todoInput").val("");
    })
    .catch(error => console.log(error));
}

function addTodos(todos) {
  todos.forEach(todo => {
    addTodo(todo);
  });
}

function addTodo(todo) {
  const newTodo = $(`<li class="task">${todo.name} <span>X</span></li>`);
  newTodo.data("id", todo._id);
  newTodo.data("completed", todo.completed);

  if (todo.completed) {
    newTodo.addClass("done");
  }
  $(".list").append(newTodo);
}
