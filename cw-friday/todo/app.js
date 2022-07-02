//variables-public
const API_URL = "https://62ac4e7dbd0e5d29af1fac5b.mockapi.io/api/todosList";
const table = $(".tableBody");

//addToDom
function addToDom(todo) {
  table.append(
    `<tr data-id=${todo.id}><td><i class="bi bi-check" style=${
      todo.status ? "display:none" : "display:block"
    } ></i></td><td>${todo.todos}</td><td><i class="bi bi-x"></i></td></tr>`
  );
}

$(document).ready(function () {
  //get todos data from APi
  $.ajax({
    url: API_URL,
  }).done(function (data) {
    const { todosList } = data;
    $.each(todosList, function (_, todo) {
      addToDom(todo);
    });
  });
  //add new data to todos
  $("#addBtn").click(addToDo);
  function addToDo() {
    $.ajax({
      url: API_URL,
      type: "POST",
      data: JSON.stringify({ todos: $("#addInput").val() }),
      contentType: "application/json; charset=utf-8",
      success: function (todo) {
        addToDom(todo);
      },
    });
  }
});
